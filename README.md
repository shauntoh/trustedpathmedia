# TrustedPathMedia

**The trusted source for digital tools worth your money.**

TrustedPathMedia is an independent affiliate media brand focused on expert-curated recommendations for digital products — AI tools, hosting, SaaS, VPN, courses, and productivity software — built for western markets.

Live site: [trustedpathmedia.com](https://trustedpathmedia.com) *(coming soon)*

---

## Overview

TrustedPathMedia helps professionals and digital buyers make confident purchasing decisions by cutting through sponsored noise. Every recommendation is independently tested, editorially driven, and fully disclosed.

**Core brand values:** Trustworthy · Independent · Editorial · Premium

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
trustedpathmedia/
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
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
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
git clone https://github.com/YOUR_USERNAME/trustedpathmedia.git
cd trustedpathmedia

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:3000`.

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

This project is deployed on **Vercel** with zero-config setup.

### Deploy to Vercel

1. Push to GitHub (this repo)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the `trustedpathmedia` repository
4. Framework preset will auto-detect **Vite**
5. Click **Deploy** — no environment variables required

### Custom Domain

In the Vercel dashboard:
1. Project Settings → **Domains**
2. Add `trustedpathmedia.com` and `www.trustedpathmedia.com`
3. Update your DNS registrar with the provided CNAME/A records
4. SSL is provisioned automatically

---

## Updating the Site

```bash
# Make your changes, then:
git add .
git commit -m "feat: your change description"
git push origin main
```

Vercel auto-deploys on every push to `main`.

---

## Affiliate Disclosure

TrustedPathMedia earns commissions from qualifying purchases made through links on this site. Affiliate relationships do not influence editorial rankings or recommendations. All relationships are clearly disclosed.

---

## License

© 2025 TrustedPathMedia. All rights reserved.
