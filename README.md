# ToolNav

**The trusted source for digital tools worth your money.**

ToolNav is an independent affiliate media brand focused on expert-curated recommendations for digital products — AI tools, hosting, SaaS, VPN, courses, and productivity software — built for western markets.

Live site: [toolnav.io](https://toolnav.io)

---

## Overview

ToolNav helps professionals and digital buyers make confident purchasing decisions by cutting through sponsored noise. Every recommendation is independently tested, editorially driven, and fully disclosed.

**Core brand values:** Trustworthy · Independent · Editorial · Premium

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4 |
| UI Components | React 18 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Deployment | GitHub Pages |

---

## Project Structure

```
toolnav/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx           # Sticky nav with scroll-blur effect
│   │   ├── Hero.jsx          # Full-viewport hero with gradient headline
│   │   ├── Categories.jsx    # 6-category grid
│   │   ├── EditorsPicks.jsx  # Curated tool cards
│   │   ├── WhyTrustUs.jsx    # Trust pillars
│   │   ├── BestOf.jsx        # Best-of editorial roundups
│   │   ├── Newsletter.jsx    # Email signup block
│   │   └── Footer.jsx        # Multi-column footer
│   ├── data/                 # Content data (reviews, guides, etc.)
│   ├── layouts/              # Astro layouts (BaseLayout.astro)
│   ├── pages/                # Astro file-based routing
│   │   ├── index.astro       # Homepage
│   │   ├── review/           # Dynamic review pages
│   │   └── guide/            # Dynamic guide pages
│   └── index.css
├── astro.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/toolnav.git
cd toolnav

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Build for Production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## Design System

| Token | Value |
|---|---|
| Background | `#080f1e` (deep navy) |
| Card surface | `#0e1c30` |
| Primary text | `#f8fafc` |
| Secondary text | `#94a3b8` (slate-400) |
| Accent | `#3b82f6` (blue-600) |
| Font | Inter, system-ui |

Custom Tailwind `navy` color scale is defined in `tailwind.config.js`.

---

## Deployment

This project is deployed automatically to **GitHub Pages** using GitHub Actions.

### Deploying Updates

```bash
# Make your changes, then:
git add .
git commit -m "feat: your change description"
git push origin main
```

The GitHub Action (`.github/workflows/deploy.yml`) will automatically build the Astro site and push it to the `gh-pages` branch, updating the live site at `toolnav.io`.

---

## Affiliate Disclosure

ToolNav earns commissions from qualifying purchases made through links on this site. Affiliate relationships do not influence editorial rankings or recommendations. All relationships are clearly disclosed.

---

## License

© 2026 ToolNav. All rights reserved.
