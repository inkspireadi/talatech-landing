"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [draft, setDraft] = useState<string | null>(null);

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    for (const field of ["name", "email", "subject", "message"]) {
      const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(String(data.get(field) ?? "").trim() ? "" : "Please complete this field.");
    }
    if (!form.reportValidity()) return;
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const subject = String(data.get("subject")).trim();
    const message = String(data.get("message")).trim();
    setDraft(`mailto:admin@talatech.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`);
  }

  return <form className="contact-form" onSubmit={prepareMessage} onInput={event => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) target.setCustomValidity("");
    setDraft(null);
  }} aria-labelledby="contact-form-title" aria-describedby="contact-form-note">
    <div className="contact-form__heading"><h2 id="contact-form-title">Let’s start a conversation.</h2><p>Tell us a little about your business and what you have in mind.</p></div>
    <div className="contact-form__fields">
      <div className="contact-form__details">
        <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" placeholder="Your full name" maxLength={100} required /></label>
        <label htmlFor="contact-email">Your email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={254} required /></label>
        <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" placeholder="What would you like to discuss?" maxLength={150} required /></label>
      </div>
      <label className="contact-form__message" htmlFor="contact-message">Your message<textarea id="contact-message" name="message" placeholder="Share your goals, your website, or the challenge you’re working through…" maxLength={2000} required /></label>
    </div>
    <button className="button button--primary contact-form__submit" type="submit">Prepare message <span aria-hidden="true">↗</span></button>
    <p className="contact-form__note" id="contact-form-note">We’ll prepare an email draft. You’ll review and send it from your email app.</p>
    {draft && <div className="contact-form__draft"><div role="status"><strong>Your draft is ready.</strong><p>Nothing has been sent yet. Open your email app to review and send your message to admin@talatech.io.</p></div><a className="button button--primary" href={draft}>Open email app <span aria-hidden="true">↗</span></a><p className="contact-form__fallback">No email app connected? Email <a href="mailto:admin@talatech.io">admin@talatech.io</a> directly with the details above.</p></div>}
  </form>;
}
