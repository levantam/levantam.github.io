# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the CRA portfolio with a Vite + shadcn single-page site matching `design/screens/`, JSON-driven content, smooth motion, and GitHub Pages deploy from `./dist`.

**Architecture:** One `HomePage` with anchored sections; experience details in shadcn `Dialog`; content loaded from `content/*.json` via `src/lib/content.ts`. Design tokens ported into Tailwind from design HTML exports.

**Tech Stack:** Vite 6, React 19, TypeScript, React Router 7, Tailwind 3, shadcn/ui, motion/react, Vitest (minimal JSON test).

**Spec:** `docs/superpowers/specs/2026-09-12-portfolio-redesign-design.md`

## Global Constraints

- `base: '/'` and `homepage`: `https://levantam.github.io`
- Content copy from legacy `src/data/*.ts` only (six experiences, no `tools.ts` UI)
- Six clickable experience cards opening modal (not `/work` route)
- No shareable role URLs in v1
- Honor `prefers-reduced-motion`
- Deploy: GitHub Actions publishes `./dist` (not `./build`)
- Remove redundant CRA/legacy files when new site builds

---

## File map

| Path | Responsibility |
|------|----------------|
| `vite.config.ts` | Vite + React plugin, `@` alias, `base: '/'` |
| `index.html` | Vite entry, fonts, SPA redirect snippet |
| `src/main.tsx` | Bootstrap React + Router |
| `src/App.tsx` | Single route to `HomePage` |
| `src/pages/HomePage.tsx` | Compose sections |
| `src/components/layout/SiteHeader.tsx` | Nav + mobile Sheet |
| `src/components/sections/*.tsx` | Hero, Marquee, Experience, Stack, Contact |
| `src/components/experience/*` | Card + Modal |
| `src/lib/content.ts` | Import JSON, typed exports |
| `src/lib/experience.ts` | `getExperienceBySlug`, initials helper |
| `content/*.json` | Editable site data |
| `tailwind.config.ts` | Design tokens |
| `src/index.css` | Tailwind layers + CSS variables for shadcn |
| `.github/workflows/deploy.yaml` | `publish_dir: ./dist` |
| `vitest.config.ts` | Unit tests for content |

---

### Task 1: Migrate toolchain CRA → Vite

**Files:**
- Create: `vite.config.ts`, `src/main.tsx`, `index.html` (root)
- Modify: `package.json`, `tsconfig.json`, `tsconfig.node.json`
- Delete: `src/index.tsx`, `src/react-app-env.d.ts` (if present)
- Modify: `public/index.html` content merged into root `index.html` SPA script

**Interfaces:**
- Produces: runnable `npm run dev` with empty `App` placeholder

- [ ] **Step 1: Update `package.json` scripts and dependencies**

Remove `react-scripts`. Add:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-slot": "^1.2.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.7",
    "vitest": "^3.0.5",
    "typescript": "^5.7.3",
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21"
  }
}
```

Run: `npm install --legacy-peer-deps`

- [ ] **Step 2: Add `vite.config.ts`**

```ts
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  json: { namedExports: true },
});
```

- [ ] **Step 3: Root `index.html`**

Move SPA redirect from `public/index.html`, set:

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tam Le — Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

(Preserve gh-pages redirect script in `public/404.html` as today.)

- [ ] **Step 4: `src/main.tsx`**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

- [ ] **Step 5: Verify**

Run: `npm run dev`  
Expected: Vite starts, blank or minimal App renders.

- [ ] **Step 6: Commit** (local GPG may require your terminal)

```bash
git add package.json package-lock.json vite.config.ts index.html src/main.tsx tsconfig.json
git commit -m "chore: migrate from CRA to Vite"
```

---

### Task 2: Tailwind design tokens + fonts

**Files:**
- Modify: `tailwind.config.js` → `tailwind.config.ts` (or keep JS with full extend)
- Modify: `src/index.css`
- Modify: `index.html` (Plus Jakarta Sans + Material Symbols links)

**Interfaces:**
- Produces: utility classes `bg-background`, `text-on-surface`, `font-display-lg`, `px-gutter`, etc.

- [ ] **Step 1: Port `theme.extend` from `design/screens/home.md` tailwind-config script**

Copy colors, fontSize, fontFamily, spacing, borderRadius into `tailwind.config.js` `content: ["./index.html", "./src/**/*.{ts,tsx}"]`.

- [ ] **Step 2: `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body {
    @apply antialiased bg-background text-on-surface;
    overscroll-behavior: none;
  }
}
```

- [ ] **Step 3: Verify**

Add temporary markup in `App.tsx`:

```tsx
export default function App() {
  return (
    <h1 className="font-display-lg text-display-lg text-primary-container">
      Token test
    </h1>
  );
}
```

Run: `npm run dev` — mint headline visible.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js src/index.css index.html src/App.tsx postcss.config.js
git commit -m "feat: add design system tailwind tokens"
```

---

### Task 3: shadcn/ui foundation

**Files:**
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/button.tsx`, `dialog.tsx`, `sheet.tsx`, `badge.tsx`
- Modify: `src/index.css` (CSS variables mapping primary to mint)

**Interfaces:**
- Produces: `cn()` from `@/lib/utils`, shadcn Button/Dialog/Sheet/Badge

- [ ] **Step 1: Init shadcn for Vite**

Run: `npx shadcn@latest init -y` (defaults: `@/components`, `@/lib/utils`, CSS variables)

- [ ] **Step 2: Add components**

Run:

```bash
npx shadcn@latest add button dialog sheet badge separator
```

- [ ] **Step 3: Map shadcn `--primary` to `#006d3e` / container `#00f090` in `:root`**

- [ ] **Step 4: Verify**

Render `<Button>Test</Button>` in App; open devtools — no console errors.

- [ ] **Step 5: Commit**

```bash
git add components.json src/components/ui src/lib/utils.ts src/index.css
git commit -m "feat: add shadcn ui primitives"
```

---

### Task 4: JSON content + types

**Files:**
- Create: `content/site.json`, `navigation.json`, `profile.json`, `about.json`, `skills.json`, `experiences.json`
- Create: `src/types/content.ts`, `src/lib/content.ts`
- Test: `src/lib/content.test.ts`

**Interfaces:**
- Produces: `export const site`, `navigation`, `profile`, `about`, `skills`, `experiences` from `content.ts`
- Produces: `Experience` type with `slug: string`

- [ ] **Step 1: Write failing test**

```ts
// src/lib/content.test.ts
import { describe, expect, it } from "vitest";
import { experiences } from "./content";

describe("experiences", () => {
  it("has six unique slugs", () => {
    const slugs = experiences.map((e) => e.slug);
    expect(slugs).toHaveLength(6);
    expect(new Set(slugs).size).toBe(6);
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

Run: `npm test`  
Expected: cannot resolve `./content`

- [ ] **Step 3: Create JSON from legacy TS**

Translate `src/data/profile.ts`, `navigation.ts`, `skills.ts`, `about.ts`, `workExperience.ts` into JSON files per spec schemas. Set `active: true` when `endDate === "Present"`. Generate `initials` (BE, RX, G1, KMS, KO, ST).

Example `src/lib/content.ts`:

```ts
import siteJson from "../../content/site.json";
import navigationJson from "../../content/navigation.json";
import profileJson from "../../content/profile.json";
import aboutJson from "../../content/about.json";
import skillsJson from "../../content/skills.json";
import experiencesJson from "../../content/experiences.json";
import type { Experience, SiteContent } from "@/types/content";

export const site = siteJson as SiteContent;
export const navigation = navigationJson;
export const profile = profileJson;
export const about = aboutJson;
export const skills = skillsJson;
export const experiences = experiencesJson.experiences as Experience[];
```

Enable `resolveJsonModule` in `tsconfig.json`.

- [ ] **Step 4: Run test — PASS**

Run: `npm test`

- [ ] **Step 5: Commit**

```bash
git add content src/types/content.ts src/lib/content.ts src/lib/content.test.ts tsconfig.json vitest.config.ts
git commit -m "feat: move portfolio content to JSON"
```

---

### Task 5: App shell + SiteHeader

**Files:**
- Create: `src/components/layout/SiteHeader.tsx`
- Modify: `src/App.tsx`, `src/pages/HomePage.tsx`

**Interfaces:**
- Consumes: `navigation`, `profile` from `@/lib/content`
- Produces: `SiteHeader` with anchor links + CTA + mobile Sheet

- [ ] **Step 1: `SiteHeader.tsx`**

Implement fixed header matching design: logo block (initials + name + title), desktop nav with active dot on `#`, external Blogs link, Let's Talk button → `#contact`, avatar circle, Sheet menu `< md`.

- [ ] **Step 2: `App.tsx`**

```tsx
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
```

- [ ] **Step 3: `HomePage.tsx` skeleton**

```tsx
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 min-h-screen bg-background">{/* sections */}</main>
    </>
  );
}
```

- [ ] **Step 4: Verify** — resize to mobile, Sheet opens/closes.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/SiteHeader.tsx src/App.tsx src/pages/HomePage.tsx
git commit -m "feat: add responsive site header with mobile sheet"
```

---

### Task 6: Hero + Marquee sections

**Files:**
- Create: `src/components/sections/HeroSection.tsx`, `MarqueeSection.tsx`
- Modify: `HomePage.tsx`

**Interfaces:**
- Consumes: `profile`, `site`
- Produces: exported section components

- [ ] **Step 1: Hero** — selection box tag, headline, description, CTAs, social icons (Material Symbols), portrait with status pill + rotating stamp (CSS animation from design).

- [ ] **Step 2: Marquee** — duplicate track for seamless CSS `@keyframes` scroll using `site.marqueeItems`.

- [ ] **Step 3: Wire into HomePage**

- [ ] **Step 4: Verify** at 375px and 1280px widths.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/MarqueeSection.tsx src/pages/HomePage.tsx
git commit -m "feat: add hero and marquee sections"
```

---

### Task 7: Experience list + modal

**Files:**
- Create: `src/components/experience/ExperienceCard.tsx`, `ExperienceModal.tsx`, `ExperienceSection.tsx`
- Create: `src/lib/experience.ts`
- Modify: `HomePage.tsx`

**Interfaces:**
- Consumes: `experiences`, `site.totalExperienceLabel`
- Produces: `ExperienceSection` with `onSelect(slug: string)` state in section or page

`src/lib/experience.ts`:

```ts
import { experiences } from "./content";
import type { Experience } from "@/types/content";

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
```

- [ ] **Step 1: ExperienceCard** — clickable card UI from design; `onClick={() => onSelect(exp.slug)}`; keyboard handlers.

- [ ] **Step 2: ExperienceModal** — shadcn Dialog; props `{ slug: string | null; onClose: () => void }`; populate from `getExperienceBySlug`; achievements from `highlights`; hide list if empty.

- [ ] **Step 3: ExperienceSection** — header, total experience chip, helper "Click card to view details", map six cards.

- [ ] **Step 4: Manual test** — all six modals, Escape closes, focus returns.

- [ ] **Step 5: Commit**

```bash
git add src/components/experience src/lib/experience.ts src/pages/HomePage.tsx
git commit -m "feat: add experience timeline with detail dialog"
```

---

### Task 8: Stack + Contact sections

**Files:**
- Create: `src/components/sections/StackSection.tsx`, `ContactSection.tsx`
- Modify: `HomePage.tsx`

**Interfaces:**
- Consumes: `skills`, `site.contact`

- [ ] **Step 1: StackSection** — three pillars from `skills.pillars` with icons (Material Symbols names from JSON).

- [ ] **Step 2: ContactSection** — dark band `#contact`, copy from `site.contact`, buttons to LinkedIn/mailto.

- [ ] **Step 3: Complete HomePage section order:** Hero → Marquee → Experience → Stack → Contact.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/StackSection.tsx src/components/sections/ContactSection.tsx src/pages/HomePage.tsx
git commit -m "feat: add stack and contact sections"
```

---

### Task 9: Motion + reduced motion

**Files:**
- Modify: section components, `ExperienceModal.tsx`
- Add dependency: `motion`

**Interfaces:**
- Uses: `motion`, `useReducedMotion` from `motion/react`

- [ ] **Step 1: Install**

Run: `npm install motion`

- [ ] **Step 2: Wrap sections** with `motion.section` `initial={{ opacity: 0, y: 24 }}` `whileInView={{ opacity: 1, y: 0 }}` `viewport={{ once: true, margin: "-80px" }}`.

- [ ] **Step 3: Stagger experience cards** with `transition={{ delay: index * 0.08 }}`.

- [ ] **Step 4: When `useReducedMotion()` true**, skip transforms (opacity only or none).

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/components
git commit -m "feat: add scroll and modal motion with reduced-motion support"
```

---

### Task 10: Legacy cleanup + CI

**Files:**
- Delete: `src/pages/Home.tsx`, `Work.tsx`, `components/Layout.tsx`, `src/data/*`, `src/App.css`, `src/App.test.tsx`, `src/setupTests.ts`, `src/reportWebVitals.ts`, old `public/index.html` if duplicated
- Modify: `.github/workflows/deploy.yaml`

**Interfaces:**
- Produces: clean tree; deploy uses `dist`

- [ ] **Step 1: Update deploy workflow**

```yaml
      - name: Build React app
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: Delete legacy files listed above**

- [ ] **Step 3: Build**

Run: `npm run build`  
Expected: `dist/index.html` + assets, no TS errors.

Run: `npm run preview` — full page smoke test.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove legacy CRA UI and deploy dist to GitHub Pages"
```

---

### Task 11: Final verification checklist

- [ ] All acceptance criteria in spec marked done
- [ ] Edit one string in `content/profile.json`, rebuild, confirm UI update
- [ ] Optional: update `README.md` with `npm run dev` / content editing instructions

---

## Plan self-review

| Spec requirement | Task |
|------------------|------|
| Vite + shadcn + Motion | 1, 3, 9 |
| JSON content | 4 |
| Six cards + modal | 7 |
| Design tokens | 2 |
| Responsive header | 5 |
| All sections | 6, 8 |
| GH Pages dist | 10 |
| Remove tools/legacy | 10 |
| Reduced motion | 9 |
| JSON slug test | 4 |

No TBD placeholders in task steps.

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-12-portfolio-redesign.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — fresh subagent per task, review between tasks  
2. **Inline Execution** — implement tasks in this session with checkpoints

Which approach?
