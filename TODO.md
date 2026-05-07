# ToolNav — To-Do

Single source of truth for ToolNav project tasks.

**Convention:** Open items get a target tag (`today` / `tomorrow` / `backlog` / `blocked`). Done items move to the Done section bucketed by completion date. Re-targeting an item is a one-word edit, not a section move.

---

## Open

### Blockers
- [ ] **Fix Vercel auto-deploy for private repo** — Vercel project slug is `5545s`, not `shauntoh`; private-repo author check fails on every push. Fix: disconnect Vercel's GitHub auto-deploy, set up GitHub Actions with `VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` secrets and a `.github/workflows/deploy.yml`. *target: today*

### Quick wins
- [ ] **Homepage `<title>` tag** — `index.astro` has `title=""`; set to "ToolNav — Trusted Digital Tool Reviews". *target: today*
- [ ] **Default OG image** — add a fallback to `public/`, wire `BaseLayout.astro` to use it when no `ogImage` prop is passed. *target: today*
- [ ] **Affiliate link audit** — sweep all `affiliateUrl: '#'` placeholders in guide picks; replace with real affiliate URLs. *target: tomorrow*

### Content / authority
- [ ] **Author bio + methodology page** — E-E-A-T trust signal: who reviews, how scoring works, conflict-of-interest disclosure. *target: tomorrow*
- [ ] **Build `/deals` page** — coupon/discount aggregation; captures coupon-intent searches. *target: tomorrow*
- [ ] **Comparison pages (`/compare/[slug]`)** — 5-7 head-to-head pages: Claude vs ChatGPT, Hostinger vs Bluehost, NordVPN vs ExpressVPN, Notion vs Obsidian, Coursera vs Udemy, Grammarly vs ProWritingAid (optional 7th: n8n vs Zapier). Shared scoring rubric, side-by-side table, verdict, internal links to both reviews. *target: backlog (re-evaluate when domain authority improves)*
- [ ] **`/alternatives/` template + first page** — captures "[tool] alternatives" search intent. *target: backlog*
- [ ] **Glossary** — `/glossary` index + per-term pages, auto-link from reviews/guides. *target: backlog (only if 30+ terms committed)*

### Distribution
- [ ] **Weekly Beehiiv RSS digest** — manual setup in Beehiiv dashboard, point to `https://toolnav.io/rss.xml`. *target: tomorrow*
- [ ] **Social media repurposing pipeline** — use `social_media_assets/` folder; turn news + reviews into LinkedIn / X / TikTok posts. *target: backlog*
- [ ] **Backlink seeding** — Reddit, HN, guest post outreach. *target: backlog*

---

## Done

### 2026-05-08
- [x] News audit: fix 13 articles (relatedReviewSlug mappings, Zapier 7K/9K discrepancy, Grammarly body rewrite, Flux 2 slug correction, source URL fixes, no-hardcoded-prices policy applied) — committed `2651859`
- [x] Publish 3 new news articles via senior-editor agent: EU AI Act streamlining (today), Sierra $950M raise, Project Glasswing / Claude Mythos — committed `3e93263`
- [x] Consolidate todos into single `TODO.md` (this file)

### 2026-05-07

**SEO foundation:**
- [x] Add Schema.org JSON-LD (Review + BreadcrumbList) to all review pages
- [x] Internal linking auto-blocks (related reviews, used-in-playbooks) via `links.js`
- [x] Create `/news` index + per-entry template + Nav/Footer link
- [x] Add `lastUpdated` field to all reviews/guides + display on templates
- [x] Per-page meta descriptions (140-160 chars, unique) for all reviews + guides
- [x] `public/robots.txt` with sitemap reference
- [x] Image alt text audit (no `<img>` tags found — visuals are inline SVGs/icons)
- [x] Expand news section from 1 to 10 entries (seeded historical news Mar 12 → May 5)
- [x] Sitemap + RSS feed live at `/sitemap-index.xml` and `/rss.xml`; sitemap submitted to GSC

**Reviews + guides:**
- [x] Add 6 AI/VPN reviews: ChatGPT, Gemini, Perplexity, ExpressVPN, Surfshark, Proton VPN
- [x] Add 6 hosting/SaaS reviews: Bluehost, SiteGround, Cloudways, Zapier, Airtable, Webflow
- [x] Write 4 use-case guides: AI for blog writing, AI for coding, VPN for streaming Netflix, Hosting for WordPress

**UX + monetization:**
- [x] Sticky scroll-triggered affiliate CTA on review pages
- [x] Wire affiliate CTAs into news articles (related-tool hand-off block)
