"use client";

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Particle = {
  x: number;
  y: number;
  scatterX: number;
  scatterY: number;
  offsetX: number;
  offsetY: number;
  velocityX: number;
  velocityY: number;
};

const PARTICLE_STEP = 2;
const PARTICLE_RADIUS = 0.82;
const PARTICLE_COLOR = "#424242";
const PARTICLE_OPACITY = 0.76;
const INTERACTION_SPREAD = 82;
const FORMATION_DURATION = 1900;

export function InteractiveHands() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const startAnimationRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const source = new window.Image();
    source.decoding = "async";

    let particles: Particle[] = [];
    let frameId = 0;
    let logicalWidth = 0;
    let logicalHeight = 0;
    let formationAmount = reducedMotion.matches ? 0 : 1;
    let formationStartTime: number | null = null;
    let hasPlayedFormation = reducedMotion.matches;

    const clear = () => context.clearRect(0, 0, logicalWidth, logicalHeight);

    const drawParticles = () => {
      clear();
      context.beginPath();

      for (const particle of particles) {
        const x =
          particle.x + particle.scatterX * formationAmount + particle.offsetX;
        const y =
          particle.y + particle.scatterY * formationAmount + particle.offsetY;
        context.moveTo(x + PARTICLE_RADIUS, y);
        context.arc(x, y, PARTICLE_RADIUS, 0, Math.PI * 2);
      }

      context.fillStyle = PARTICLE_COLOR;
      context.globalAlpha = PARTICLE_OPACITY;
      context.fill();
      context.globalAlpha = 1;
    };

    const buildParticles = () => {
      if (!source.complete || !source.naturalWidth) return;

      const bounds = wrapper.getBoundingClientRect();
      logicalWidth = Math.max(1, Math.round(bounds.width));
      logicalHeight = Math.max(1, Math.round(bounds.height));

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(logicalWidth * pixelRatio);
      canvas.height = Math.round(logicalHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const buffer = document.createElement("canvas");
      buffer.width = logicalWidth;
      buffer.height = logicalHeight;

      const bufferContext = buffer.getContext("2d", {
        willReadFrequently: true,
      });
      if (!bufferContext) return;

      const scale = Math.max(
        logicalWidth / source.naturalWidth,
        logicalHeight / source.naturalHeight,
      );
      const renderedWidth = source.naturalWidth * scale;
      const renderedHeight = source.naturalHeight * scale;
      const offsetX = (logicalWidth - renderedWidth) / 2;
      const offsetY = (logicalHeight - renderedHeight) / 2;

      bufferContext.clearRect(0, 0, logicalWidth, logicalHeight);
      bufferContext.drawImage(
        source,
        offsetX,
        offsetY,
        renderedWidth,
        renderedHeight,
      );

      const pixels = bufferContext.getImageData(
        0,
        0,
        logicalWidth,
        logicalHeight,
      ).data;
      const nextParticles: Particle[] = [];
      const isStartingFormation =
        !hasPlayedFormation && !reducedMotion.matches;
      const shouldForm =
        isStartingFormation ||
        (!reducedMotion.matches && formationAmount > 0.001);

      for (let y = 0; y < logicalHeight; y += PARTICLE_STEP) {
        for (let x = 0; x < logicalWidth; x += PARTICLE_STEP) {
          const pixelIndex = (y * logicalWidth + x) * 4;
          const alpha = pixels[pixelIndex + 3];
          const luminance =
            pixels[pixelIndex] * 0.2126 +
            pixels[pixelIndex + 1] * 0.7152 +
            pixels[pixelIndex + 2] * 0.0722;

          if (alpha < 36 || luminance > 220) continue;

          const scatterSeed =
            Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
          const scatterUnit = scatterSeed - Math.floor(scatterSeed);
          const distanceSeed =
            Math.sin(x * 4.1414 + y * 19.19) * 24634.6345;
          const distanceUnit = distanceSeed - Math.floor(distanceSeed);
          const scatterAngle = scatterUnit * Math.PI * 2;
          const scatterDistance = shouldForm ? 14 + distanceUnit * 28 : 0;

          nextParticles.push({
            x,
            y,
            scatterX: Math.cos(scatterAngle) * scatterDistance,
            scatterY: Math.sin(scatterAngle) * scatterDistance,
            offsetX: 0,
            offsetY: 0,
            velocityX: 0,
            velocityY: 0,
          });
        }
      }

      particles = nextParticles;
      if (isStartingFormation) {
        formationAmount = 1;
        formationStartTime = null;
        hasPlayedFormation = true;
      } else if (!shouldForm) {
        formationAmount = 0;
      }
      drawParticles();

      if (shouldForm) {
        startAnimationRef.current();
      }
    };

    const animate = (time: number) => {
      frameId = 0;
      const pointer = pointerRef.current;
      let isSettling = false;

      if (formationAmount > 0) {
        formationStartTime ??= time;
        const progress = Math.min(
          1,
          (time - formationStartTime) / FORMATION_DURATION,
        );
        formationAmount = Math.pow(1 - progress, 3);
      }

      for (const particle of particles) {
        const deltaX = particle.x - pointer.x;
        const deltaY = particle.y - pointer.y;
        const distance = Math.hypot(deltaX, deltaY);
        const influence = pointer.active
          ? Math.exp(
              -(distance * distance) /
                (2 * INTERACTION_SPREAD * INTERACTION_SPREAD),
            )
          : 0;
        const angle = Math.atan2(deltaY, deltaX);
        const driftAngle =
          Math.sin(particle.x * 12.9898 + particle.y * 78.233) * Math.PI * 2;
        const flutter =
          Math.sin(time * 0.0032 + particle.x * 0.025) * 2;
        const targetX =
          (Math.cos(driftAngle) * 33 + Math.cos(angle) * 8 + flutter) *
          influence;
        const targetY =
          (Math.sin(driftAngle) * 33 + Math.sin(angle) * 8 - flutter) *
          influence;

        particle.velocityX +=
          (targetX - particle.offsetX) * 0.08 - particle.velocityX * 0.18;
        particle.velocityY +=
          (targetY - particle.offsetY) * 0.08 - particle.velocityY * 0.18;
        particle.offsetX += particle.velocityX;
        particle.offsetY += particle.velocityY;

        if (
          Math.abs(particle.offsetX) > 0.04 ||
          Math.abs(particle.offsetY) > 0.04 ||
          Math.abs(particle.velocityX) > 0.04 ||
          Math.abs(particle.velocityY) > 0.04
        ) {
          isSettling = true;
        }
      }

      drawParticles();

      if (
        !reducedMotion.matches &&
        (formationAmount > 0.001 || pointer.active || isSettling)
      ) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    startAnimationRef.current = () => {
      if (!frameId && !reducedMotion.matches) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    source.addEventListener("load", buildParticles);
    source.src = "/assets/hands-halftone.png";

    const resizeObserver = new ResizeObserver(buildParticles);
    resizeObserver.observe(wrapper);

    return () => {
      resizeObserver.disconnect();
      source.removeEventListener("load", buildParticles);
      if (frameId) window.cancelAnimationFrame(frameId);
      startAnimationRef.current = () => undefined;
    };
  }, []);

  const updatePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    pointerRef.current = { x, y, active: true };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    startAnimationRef.current();
  };

  const clearPointer = () => {
    pointerRef.current.active = false;
    startAnimationRef.current();
  };

  return (
    <div
      ref={wrapperRef}
      className="hero__artwork interactive-hands"
      onPointerEnter={updatePointer}
      onPointerMove={updatePointer}
      onPointerLeave={clearPointer}
      aria-hidden="true"
      data-node-id="40:1794"
    >
      <canvas ref={canvasRef} className="interactive-hands__canvas" />
    </div>
  );
}
