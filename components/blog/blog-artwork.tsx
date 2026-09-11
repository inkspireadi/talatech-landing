import Image from "next/image";
import { DiagnosticVisual, GrowthVisual, TasksVisual } from "@/components/insight-hub";
import type { BlogArtworkKind } from "@/lib/blog-posts";

export function BlogArtwork({ kind, priority = false }: { kind: BlogArtworkKind; priority?: boolean }) {
  const visual = kind === "diagnostic" ? <DiagnosticVisual /> : kind === "growth" ? <GrowthVisual /> : kind === "tasks" ? <TasksVisual /> : null;
  return (
    <div className={`blog-artwork blog-artwork--${kind}`} aria-hidden="true">
      <Image
        src={kind === "people" ? "/assets/how-we-work.png" : kind === "hands" ? "/assets/hands-halftone.png" : "/assets/insight-bg.png"}
        alt="" fill sizes="(max-width: 1000px) 75vw, 800px" priority={priority}
      />
      {visual && <div className="blog-artwork__window">{visual}</div>}
      {kind === "landscape" && <span className="blog-artwork__signal"><span /> A clearer view. A better next step.</span>}
    </div>
  );
}
