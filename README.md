# Talatech landing page

Next.js App Router and React website for Talatech. This repository contains the frontend and local assets; it does not include the live Insight Hub application or connected form-delivery services.

The homepage includes the shared animated header, interactive halftone hands, status and partner tickers, Insight Hub, Choose your path, How we work, and shared footer.

## Services and company pages

- `/service` — four service tiers, deliverables, recommendations, and the 6/12-month commitment offer. Edit `app/service/page.tsx` for the service copy.
- `/about` — company introduction, Insight Hub overview, supplied performance metrics, and the four Talatech Group divisions. Edit `app/about/page.tsx` for the company copy and metrics.
- `/insight-hub` — platform marketing page with four keyboard-accessible capability tabs. Diagnostic and impact views use the supplied dashboard screenshots; action-plan and account-manager views are illustrative coded previews, not live platform data.
- `/contact` — validated contact form, contact details, and FAQ accordion. The form prepares a `mailto:` draft for the visitor to review and send; it does not send or store submissions.
- Both pages reuse the shared header and footer, and use 70px desktop side gutters with scoped styles. The performance figures on the about page are supplied by the site owner.

## Blog templates

- `/blog` — featured story, latest posts, category filters, and paginated article cards.
- `/blog/[slug]` — full article with contents navigation, a takeaway, article sections, a copy-link button, and related articles.
- Edit `lib/blog-posts.ts` to replace the seven sample editorial posts or add new ones. Each entry defines its URL slug, title, category, date, summary, existing artwork variant, takeaway, and body sections. These are placeholder editorial templates, not previously published Talatech articles.
- Reading times are calculated from the body text. The build generates every article route and metadata automatically; unknown article slugs return a 404.
- `components/site-header.tsx` and `components/site-footer.tsx` are shared by the homepage and blog. Blog styles are scoped in `app/blog/blog.css`.

Shared menu labels and destinations are in `lib/navigation.ts`. The footer mirrors the header's five main links and adds Contact. The header's Get in touch button links to `/contact`.

## Developer handoff / remaining integrations

- Connect an email/form service before replacing the contact form's explicit email-draft workflow with direct submission. Add server-side validation and abuse protection with that integration.
- The existing footer newsletter form is visual only; a subscription backend is not connected.
- Replace the footer's placeholder Discord and LinkedIn destinations (`#`) with approved URLs.
- Audit and walkthrough CTAs currently open email drafts. Connect the real booking or audit flow when available.
- Replace sample blog articles and confirm company copy/metrics before launch.
- Dashboard screenshots and site artwork are bundled under `public/assets`; confirm rights and publication approval before a public launch.
- No environment variables are required for the current frontend. Never commit credentials; `.env*`, dependencies, and build outputs are excluded from Git.

The desktop layout scales fluidly across web viewport sizes. A dedicated mobile pass is deferred until the desktop sections are complete.

## Development

Use Node.js 22 or newer and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

To serve the production build locally, run `npm run build` and then `npm start`.
