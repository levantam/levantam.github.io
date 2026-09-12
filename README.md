# Tam Le — Portfolio

Single-page portfolio for [levantam.github.io](https://levantam.github.io). Built with **Vite**, **React 19**, **Tailwind CSS 4**, **shadcn/ui**, and **Motion**. Content lives in JSON so you can update copy without touching components.

## Quick start

**Requirements:** Node.js 20+

```bash
npm install --legacy-peer-deps
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # output → dist/
npm run preview  # serve production build locally
npm test         # content + experience helpers
```

## Edit your content (no React required)

All public copy is under `content/`:

| File | What to change |
|------|----------------|
| `content/profile.json` | Name, title, bio, hero headlines, avatar URL, social links |
| `content/site.json` | Status pill, experience summary label, **contact CTA** |
| `content/navigation.json` | Header links, blog URL, “Let’s Talk” anchor |
| `content/experiences.json` | Six roles (cards + modal): summaries, highlights, tech, logos |
| `content/skills.json` | Three “Core competencies” pillars |
| `content/certifications.json` | Certifications & credential images |
| `content/about.json` | Extra about copy (reserved for future sections) |

After editing JSON, save and refresh the dev server (or rebuild for production).

### Contact email (important before HR outreach)

Update the mailto link in `content/site.json`:

```json
"contact": {
  "email": "mailto:your.real.email@domain.com",
  "linkedin": "https://www.linkedin.com/in/lvtam/"
}
```

The contact section’s **Send Direct Message** button uses `contact.email`. Replace the placeholder with your real address before deploying.

Optional: set `profile.json` → `social.github` when you want the hero GitHub icon to appear.

### Company logos (experience cards)

1. **Best:** add PNGs to `public/companies/` named `{slug}.png` (e.g. `begroup.png`). They load first.
2. **Until then:** each role can set `logoDomain` in `experiences.json` for a temporary site favicon fallback (LinkedIn logo URLs are blocked for hotlinking).
3. **Override:** set `logoUrl` to a full `https://…` image URL or a path like `/companies/custom-name.png`.

After editing JSON, save and refresh the dev server (or rebuild for production).

## Design reference

Static HTML mocks (layout reference only):

- `design/screens/home.md`
- `design/screens/detail-experience.md`

## Deploy (GitHub Pages)

Pushes to `master` run `.github/workflows/deploy.yaml`:

1. `npm run build`
2. Publish **`dist/`** to the `gh-pages` branch via `peaceiris/actions-gh-pages`

`package.json` `"homepage"` is `https://levantam.github.io`. SPA routing uses `public/404.html` + redirect snippet in `index.html`.

## Project layout

```
content/           # Editable JSON
src/
  components/
    layout/        # SiteHeader
    sections/      # Hero, Experience, Stack, Contact
    experience/    # Cards + modal
    ui/            # shadcn primitives
  lib/content.ts   # Loads JSON into the app
  pages/HomePage.tsx
docs/superpowers/  # Design spec + implementation plan
```

## Specs

- Design: `docs/superpowers/specs/2026-09-12-portfolio-redesign-design.md`
- Plan: `docs/superpowers/plans/2026-09-12-portfolio-redesign.md`

## License

MIT (see `LICENSE` if present).
