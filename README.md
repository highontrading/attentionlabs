# Attention Labs — website

The agency site for Attention Labs: case studies, portfolio and a "Book a call" flow.
It is a plain static site with no framework and no npm dependencies.

## Run locally

```bash
npm run dev        # builds into ./dist and serves it on http://localhost:4321
```

## Edit content

All copy lives in **`src/data.mjs`**: services, pricing, stats, testimonials, FAQs, portfolio videos, case studies and contact details. After you edit it, run `npm run build`.

| What | Where |
| --- | --- |
| Page templates | `build.mjs` |
| Design system / styles | `assets/css/style.css` (tokens at the top) |
| Animations & interactions | `assets/js/main.js` |
| Images | `assets/img/` (WebP) |
| Font (Inter Tight, self-hosted, OFL) | `assets/fonts/` |
| Static extras (robots, redirects) | `public/` |

**To add a case study,** add an object to `caseStudies` in `src/data.mjs`. Its page is generated at `/case-studies/<slug>/`.

**To update a case study:** everything lives in its entry in `caseStudies`:
- `stats`: headline numbers. Numeric values ("600K", "+40%") count up; words show as text.
- `overview`, `challenge`, `approach` (steps), `deliverables`, `results`, `outcomes`, `learnings`: the story sections.
- `growth`: before → after bars per platform.
- `cover` / `hero` / `logo` / `video`: artwork, and the YouTube film for the header.

**To add a portfolio video,** add `{ id: '<YouTube id>', title, client, type, img }` to `work`. Each new `type` becomes a filter chip automatically.

## Pages

- `/`: home
- `/work/`: films and short-form video (hero reel + YouTube work) with filters and a lightbox
- `/case-studies/`: case study index
- `/case-studies/<slug>/`: one page per case study
- `/services/`: methodology, guarantees and lab report
- `/about/`: who we are — services, platform strategy, process, why us
- `/contact/`: book a call (Calendly embed) or apply for access
- `404.html`: not-found page

## Motion

- No loading screen: the hero animates in as soon as the page opens
- Fast page transitions: native cross-fade (View Transitions API), header stays still, links prerender on hover
- Lenis smooth scroll
- Split-text reveals and clip-path image reveals
- Scroll-filled About text
- Parallax and count-up stats
- Full-screen menu with image previews
- Custom cursor and magnetic buttons
- Hover-reveal images on the case-study list
- Marquees, testimonial slider, accordion

Everything respects `prefers-reduced-motion`.

## Deploy

- **Netlify:** `netlify.toml` is included. The application form works through Netlify Forms with no extra setup.
- **Vercel:** `vercel.json` is included.
- **Anywhere else:** upload the contents of `dist/`.

Both configs redirect the old URLs (`/portfolio`, `/casestudies`, `/methodology`, `/intelligence`) to the new pages.

On hosts without Netlify Forms, the form falls back to opening the visitor's email client, pre-filled and addressed to contact@attentionlabs.com.
