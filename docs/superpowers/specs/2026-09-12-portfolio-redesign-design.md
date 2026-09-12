# Portfolio Redesign — Technical Design

**Date:** 2026-09-12  
**Status:** Approved (brainstorming)  
**Goal:** HR-impressive, responsive personal site on GitHub Pages with design fidelity, shadcn/ui, smooth motion, and JSON-driven content.

## Decisions (locked)

| Topic | Choice |
|-------|--------|
| Toolchain | Migrate from Create React App to **Vite + React 19 + TypeScript** |
| UI kit | **shadcn/ui** on Tailwind 3 with design tokens from `design/screens/` |
| Content source | **Existing `src/data/*.ts` copy**, restructured into JSON (not design HTML mock copy) |
| Experience list | **All 6 roles** as individual timeline cards |
| Experience detail | **In-page modal** (pattern from `design/screens/detail-experience.md`), not `/work` route |
| Shareable role URLs | **Out of v1** (single-page + modal only; deep links optional later) |
| Placeholder tools section | **Removed** (`src/data/tools.ts` not surfaced in UI) |

## Problem statement

The current site uses an outdated CRA stack, Inter/blue Tailwind theme, and split TS modules that do not match the new Figma/HTML design. HR-facing presentation needs a polished single-page experience with intentional motion, mobile navigation, and content that can be edited without touching React code.

## Architecture

### Stack

- **Vite** with `base: '/'` for `https://levantam.github.io` (`package.json` `homepage` unchanged).
- **React Router** with a single route `/` and hash/anchor navigation for in-page sections.
- **Tailwind CSS** extended with Material-style tokens (mint neo-brutalist shadows, Plus Jakarta Sans, spacing and typography scales from design HTML).
- **shadcn/ui**: Dialog (experience modal), Button, Badge, Sheet (mobile nav), Separator; add components only as needed.
- **Motion** (`motion/react`): scroll-reveal stagger, modal transitions; honor `prefers-reduced-motion`.
- **Content**: JSON under `content/` imported at build time; thin `src/lib/content.ts` + TypeScript interfaces (optional Zod validation in CI).

### Repository layout (target)

```
content/
  site.json
  navigation.json
  profile.json
  about.json
  skills.json
  experiences.json
src/
  components/
    layout/          # SiteHeader, SiteFooter if needed
    sections/        # Hero, Marquee, Experience, Stack, Contact
    experience/      # ExperienceCard, ExperienceModal
    ui/              # shadcn primitives
  lib/
    content.ts
    utils.ts
  pages/
    HomePage.tsx
  App.tsx
  main.tsx
  index.css
public/
  404.html           # SPA redirect for GitHub Pages
design/              # Reference only (unchanged)
```

### Removed (legacy)

- `react-scripts`, CRA entry (`src/index.tsx` → Vite `main.tsx`).
- `src/pages/Home.tsx`, `src/pages/Work.tsx`, old `Layout.tsx`.
- `src/data/*.ts` after JSON migration.
- `src/App.css`, unused animations/theme from old `tailwind.config.js`.
- `/work` route and work-specific navigation.

### Deployment

- GitHub Actions: `npm run build` → publish **`./dist`** (update from `./build`).
- Keep `peaceiris/actions-gh-pages@v4` flow on `master`.
- `BrowserRouter` with `basename={import.meta.env.BASE_URL}`.
- Retain SPA redirect script in `public/index.html` / `404.html` pattern.

## Page structure

Single **HomePage** with fixed header (`z-50`, blur backdrop) and sections:

1. **Hero** (`#` top): Figma-style selection tag, headline, subtitle, primary/secondary CTAs, social strip, portrait frame with status pill and rotating stamp badge.
2. **Marquee**: infinite horizontal ribbon of keywords (from `site.json` / `profile.json`).
3. **Experience** (`#experience`): section header, optional total-experience stat, six clickable cards, helper text “Click card to view details”.
4. **Stack / competencies** (`#stack`): three-column grid (desktop), stacked (mobile); driven by `skills.json` pillar structure.
5. **Contact** (`#contact`): dark CTA band with copy and buttons linking to LinkedIn/email anchors.

**Responsive behavior**

- Desktop: horizontal nav in header.
- Mobile: hamburger → shadcn **Sheet** with same anchor links; touch-friendly card targets (min 44px where applicable).
- Typography: use design token font sizes with mobile variants (`display-lg-mobile`, etc.) in Tailwind config.

## Experience interaction

- Each card is a button (or `role="button"`) with keyboard support (`Enter` / `Space`).
- Click opens **ExperienceModal** (shadcn Dialog) populated from `experiences.json` by `slug`.
- Modal sections: badge (initials or logo), active pill if `active`, date range, title, company line, location, summary, bullet achievements (`highlights`), technology chips, footer dismiss + link to `#contact`.
- Map from legacy TS fields:
  - `shortDescription` → card teaser and/or modal summary
  - `fullDescription` → modal body paragraph
  - `highlights` → achievement list (empty array → hide list or show summary only)
  - `endYear === "Present"` → `active: true`
  - `slug`, `company`, `position`, `location`, `technologies`, `tags`, `logo`

**Deviation from static `home.md`:** design home uses four cards plus `<details>` for early career; implementation uses **six cards** per product decision.

## JSON schemas

### `content/site.json`

```json
{
  "title": "Tam Le — Senior Software Engineer",
  "location": "Ho Chi Minh City, Vietnam",
  "statusPill": "Open to Senior Engineering Opportunities",
  "totalExperienceLabel": "Total Experience: 12 Years, 5 Months",
  "marqueeItems": [".NET Core / C#", "Distributed Systems", "..."],
  "contact": {
    "headline": "Let's build something resilient together.",
    "subheadline": "Copy aligned with design/screens contact section; editable.",
    "email": "mailto:hello@example.com",
    "linkedin": "https://www.linkedin.com/in/lvtam/"
  }
}
```

Fields may be seeded from existing TS + design section labels where TS lacks copy; editable without code.

### `content/navigation.json`

Anchor-based nav (replaces `/work`):

```json
{
  "brand": { "initials": "TL", "name": "Tam Le", "title": "Senior Software Engineer" },
  "links": [
    { "id": "home", "label": "Home", "href": "#" },
    { "id": "experience", "label": "Experience", "href": "#experience" },
    { "id": "stack", "label": "Stack", "href": "#stack" },
    { "id": "blogs", "label": "Blogs", "href": "https://devblogs.gitbook.io/", "external": true }
  ],
  "cta": { "label": "Let's Talk", "href": "#contact" }
}
```

### `content/profile.json`

From `profile.ts` plus optional hero fields:

```json
{
  "name": "Tam Le",
  "title": "Senior Software Engineer",
  "description": "...",
  "hero": {
    "greeting": "Hi everyone 👋, I'm Tam Le",
    "headlinePrimary": "Senior Software Engineer",
    "headlineSecondary": "Based in Ho Chi Minh City, Vietnam"
  },
  "avatar": { "url": "...", "alt": "..." },
  "social": {
    "linkedin": "...",
    "github": "",
    "email": "#contact"
  },
  "mainSkills": ["...", "..."]
}
```

### `content/about.json`

From `about.ts` if used in hero/philosophy blocks; otherwise reserved for future copy blocks.

### `content/skills.json`

From `skills.ts`, extended for three UI pillars:

```json
{
  "sectionTitle": "Tooling & Technical Capabilities",
  "sectionEyebrow": "Core Competencies",
  "pillars": [
    {
      "icon": "memory",
      "title": "Backend & Cloud",
      "subtitle": "...",
      "items": [".NET", "C#", "..."]
    }
  ]
}
```

Split or merge the two existing categories into three pillars with explicit JSON lists (no runtime guessing).

### `content/experiences.json`

```json
{
  "experiences": [
    {
      "slug": "begroup",
      "initials": "BE",
      "active": true,
      "position": "Senior Software Engineer",
      "company": "BeGroup",
      "companyDisplay": "BeGroup",
      "location": "Ho Chi Minh City, Vietnam",
      "startDate": "Jun 2024",
      "endDate": "Present",
      "cardSummary": "...",
      "summary": "...",
      "details": "...",
      "highlights": [],
      "technologies": [],
      "tags": [],
      "logoUrl": "..."
    }
  ]
}
```

**Rules:** unique `slug` per entry; order = display order (newest first); generate `initials` from company name if omitted.

## Theming

Port Tailwind `theme.extend` from `design/screens/home.md` script block:

- Color roles: `background`, `primary`, `primary-container`, `on-surface`, `outline-variant`, etc.
- Font family: Plus Jakarta Sans for all roles.
- Font size tokens: `display-lg`, `headline-md`, `body-md`, `label-sm`, etc.
- Custom spacing: `gutter`, `space-xl`, `margin-mobile`.
- Utilities: neo-brutalist shadows (`shadow-[4px_4px_0px_#161c26]`), selection colors, hidden scrollbar optional.

shadcn theme variables should map primary/accent to mint palette for consistency.

## Animation specification

| Element | Behavior | Reduced motion |
|---------|----------|----------------|
| Section blocks | Fade + translateY on first viewport entry, stagger children 60–100ms | Instant show |
| Marquee | CSS infinite translate, duplicated content | Static wrapped row |
| Experience cards | Hover lift + shadow; focus ring | No transform |
| Modal | Backdrop fade; panel scale 0.95→1 | Instant |
| Hero stamp | Slow rotate (CSS) | No rotation |
| Header | Subtle blur already in design | N/A |

Use `useReducedMotion()` from Motion where logic branches are needed.

## Error handling & edge cases

- Missing experience slug in modal: no-op + console error in dev.
- Broken `logoUrl`: fall back to initials badge.
- Empty `highlights`: hide achievements subsection.
- External links: `rel="noopener noreferrer"`, open in new tab.
- SOFTTEL entry with empty logo: initials from company name.

## Testing & acceptance criteria

- [ ] `npm run build` succeeds; `npm run preview` renders full page.
- [ ] Lighthouse: no critical a11y failures on Dialog (focus trap, aria labels).
- [ ] All six modals open/close via click, Escape, and overlay.
- [ ] Mobile Sheet nav closes after anchor selection.
- [ ] GitHub Actions deploy publishes `dist` to gh-pages branch.
- [ ] Editing `content/experiences.json` updates UI after rebuild without TS changes.

## Implementation sequence (high level)

1. Scaffold Vite + migrate entry/HTML/public assets.
2. Tailwind + design tokens + fonts.
3. Init shadcn; add Dialog, Button, Sheet, Badge.
4. Create JSON from existing TS; wire `content.ts`.
5. Build section components to match design/layout.
6. Experience modal wiring + motion.
7. Remove legacy CRA files; update CI `publish_dir`.
8. Manual QA on mobile + desktop.

## Out of scope (v1)

- CMS or admin UI.
- Contact form backend.
- Blog hosting (external link only).
- `/experience/:slug` routes or query-param deep links.
- i18n.
- Dark mode toggle (tokens support `class` dark mode later).

## References

- Visual/interaction reference: `design/screens/home.md`, `design/screens/detail-experience.md`
- Legacy data: `src/data/*.ts` (migration source only)
