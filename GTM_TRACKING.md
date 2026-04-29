# GTM & GA4 Click Tracking — ToolNav

Reference standard for all click tracking across the site. Any new page, component, or clickable element must follow this convention so GTM picks it up automatically without configuration changes.

---

## How It Works

Google Tag Manager captures 5 built-in click variables on every click:

| GTM Variable | What it reads | Example value |
|---|---|---|
| `{{Click ID}}` | The element's `id` attribute | `affiliate-review-claude-ai-hero` |
| `{{Click Element}}` | HTML tag name | `a`, `button`, `input` |
| `{{Click URL}}` | The `href` attribute | `https://claude.ai` |
| `{{Click Text}}` | Visible text content | `Try Claude AI` |
| `{{Click Classes}}` | The `class` attribute | `bg-blue-600 hover:bg-blue-500...` |

We use the `id` attribute as the primary tracking signal. The prefix in the `id` tells GTM what type of click it is, which drives the trigger and GA4 event.

---

## Naming Convention

```
{prefix}-{location}-{section}-{item}
```

All lowercase. Hyphens only — no spaces, no underscores, no special characters.

### Prefixes (and their GTM trigger)

| Prefix | Intent | GTM trigger condition | GA4 event fired |
|---|---|---|---|
| `affiliate-` | Outbound affiliate link — the money click | Click ID **starts with** `affiliate-` | `affiliate_click` |
| `cta-` | On-site primary CTA (non-affiliate) | Click ID **starts with** `cta-` | `cta_click` |
| `nav-` | Navigation links, footer links, breadcrumbs | Click ID **starts with** `nav-` | `navigation_click` |
| `content-` | Content discovery cards (review, guide, playbook) | Click ID **starts with** `content-` | `content_click` |
| `filter-` | Filter buttons, sort dropdowns, FAQ toggles | Click ID **starts with** `filter-` | `filter_interaction` |
| `newsletter-` | Email input and subscribe button | Click ID **starts with** `newsletter-` | `newsletter_interaction` |

### Segments

| Segment | Purpose | Examples |
|---|---|---|
| `location` | Where on the site the element lives | `home`, `review`, `guide`, `playbook`, `allreviews`, `category`, `guides`, `playbooks` |
| `section` | Component or sub-area | `hero`, `bestof`, `picks`, `cat`, `footer`, `breadcrumb`, `nav` |
| `item` | Specific element identifier — use the slug wherever possible | `claude-ai`, `ai-tools`, `view-all-guides`, `verdict` |

---

## Complete ID Reference — All Current Elements

### Nav (`Nav.jsx`)

| Element | id |
|---|---|
| Logo | `nav-logo` |
| Desktop Tools dropdown button | `nav-desktop-tools-btn` |
| Desktop category links (dynamic) | `nav-desktop-cat-{label}` e.g. `nav-desktop-cat-ai-tools` |
| Desktop "See all reviews" | `nav-desktop-see-all-reviews` |
| Desktop top nav links (dynamic) | `nav-desktop-link-{label}` e.g. `nav-desktop-link-guides` |
| Desktop Newsletter link | `cta-nav-desktop-newsletter` |
| Desktop "See Top Picks" | `cta-nav-desktop-see-top-picks` |
| Mobile menu toggle | `nav-mobile-menu-toggle` |
| Mobile Tools dropdown button | `nav-mobile-tools-btn` |
| Mobile category links (dynamic) | `nav-mobile-cat-{label}` e.g. `nav-mobile-cat-hosting` |
| Mobile "See all reviews" | `nav-mobile-see-all-reviews` |
| Mobile top nav links (dynamic) | `nav-mobile-link-{label}` e.g. `nav-mobile-link-playbooks` |
| Mobile "Join Newsletter" | `cta-nav-mobile-join-newsletter` |
| Mobile "See Top Picks" | `cta-nav-mobile-see-top-picks` |

> **Why desktop/mobile?** The same link exists twice in the DOM (once per layout). Duplicate `id`s are invalid HTML and cause GTM to behave unpredictably. The split also lets you see whether mobile users navigate differently.

### Footer (`Footer.jsx`)

| Element | id pattern | Example |
|---|---|---|
| Footer link columns (dynamic) | `nav-footer-{section}-{label}` | `nav-footer-categories-ai-tools` |
| Bottom strip: Privacy | `nav-footer-bottom-privacy` | — |
| Bottom strip: Terms | `nav-footer-bottom-terms` | — |
| Bottom strip: Contact | `nav-footer-bottom-contact` | — |

The footer link `id` is derived dynamically in the map:
```jsx
id={`nav-footer-${section.toLowerCase()}-${label.toLowerCase().replace(/\s+/g, '-')}`}
```
This means new footer link groups and entries are tracked automatically — no code change needed.

### Homepage components

| Component | Element | id |
|---|---|---|
| `Hero.jsx` | "See Top Picks" CTA | `cta-hero-see-top-picks` |
| `Hero.jsx` | "Join Newsletter" CTA | `cta-hero-join-newsletter` |
| `Categories.jsx` | Category cards (dynamic) | `content-home-cat-{name}` e.g. `content-home-cat-vpn` |
| `BestOf.jsx` | Guide cards (dynamic) | `content-home-bestof-{slug}` e.g. `content-home-bestof-web-hosting-beginners` |
| `BestOf.jsx` | "View all guides" | `cta-home-bestof-view-all-guides` |
| `EditorsPicks.jsx` | Pick CTAs (dynamic) | `content-home-picks-{slug}` e.g. `content-home-picks-nordvpn` |
| `EditorsPicks.jsx` | "View all picks" | `cta-home-picks-view-all` |
| `Newsletter.jsx` | Email input | `newsletter-email-input` |
| `Newsletter.jsx` | Submit button | `newsletter-submit-btn` |

### Review page (`ReviewPage.jsx`)

| Element | id |
|---|---|
| Breadcrumb Home | `nav-review-breadcrumb-home` |
| Hero affiliate CTA | `affiliate-review-{slug}-hero` |
| Disclosure inline link | `nav-review-disclosure-link` |
| Verdict affiliate CTA | `affiliate-review-{slug}-verdict` |

Two affiliate CTAs per review page — hero and verdict — so you can see which placement converts better.

### Guide page (`GuidePage.jsx`)

| Element | id |
|---|---|
| Breadcrumb Home | `nav-guide-breadcrumb-home` |
| Pick "See Deal" buttons (dynamic) | `affiliate-guide-deal-{name}` e.g. `affiliate-guide-deal-nordvpn` |

### Playbook page (`PlaybookPage.jsx`)

| Element | id |
|---|---|
| Breadcrumb Home | `nav-playbook-breadcrumb-home` |
| Breadcrumb Playbooks | `nav-playbook-breadcrumb-playbooks` |
| Tool "Read review" links (dynamic) | `content-playbook-tool-review-{slug}` |
| Tool "Try X" buttons — tools section (dynamic) | `affiliate-playbook-tool-try-{name}` |
| Tool "Try X" links — recap section (dynamic) | `affiliate-playbook-recap-try-{name}` |
| FAQ toggle buttons (dynamic) | `filter-playbook-faq-{index}` |

### All Reviews page (`AllReviewsPage.jsx`)

| Element | id |
|---|---|
| Category filter buttons (dynamic) | `filter-allreviews-category-{cat}` e.g. `filter-allreviews-category-vpn` |
| Sort dropdown | `allreviews-sort-select` |
| Review card "Read review" links (dynamic) | `content-allreviews-card-{slug}` |

### Guides index page (`GuidesPage.jsx`)

| Element | id |
|---|---|
| Breadcrumb Home | `nav-guides-breadcrumb-home` |
| Guide cards (dynamic) | `content-guides-card-{slug}` |

### Playbooks index page (`PlaybooksIndexPage.jsx`)

| Element | id |
|---|---|
| Breadcrumb Home | `nav-playbooks-breadcrumb-home` |
| Playbook cards (dynamic) | `content-playbooks-card-{slug}` |

### Category page (`CategoryPage.jsx`)

| Element | id |
|---|---|
| Review cards (dynamic) | `content-category-card-{slug}` |

### Static pages (About, Disclosure, Privacy, Terms)

| Page | Element | id |
|---|---|---|
| About | Breadcrumb Home | `nav-about-breadcrumb-home` |
| Disclosure | Breadcrumb Home | `nav-disclosure-breadcrumb-home` |
| Disclosure | Contact email | `nav-disclosure-contact-email` |
| Privacy | Breadcrumb Home | `nav-privacy-breadcrumb-home` |
| Privacy | Contact email | `nav-privacy-contact-email` |
| Terms | Breadcrumb Home | `nav-terms-breadcrumb-home` |
| Terms | Contact email | `nav-terms-contact-email` |

---

## GTM Setup

### Step 1 — Enable built-in variables
GTM → Variables → Configure. Enable:
- `Click Element`
- `Click ID`
- `Click Classes`
- `Click URL`
- `Click Text`

### Step 2 — Create triggers (one per prefix)

| Trigger name | Type | Fire on |
|---|---|---|
| `trigger-affiliate-clicks` | Click - All Elements | Click ID **starts with** `affiliate-` |
| `trigger-cta-clicks` | Click - All Elements | Click ID **starts with** `cta-` |
| `trigger-nav-clicks` | Click - All Elements | Click ID **starts with** `nav-` |
| `trigger-content-clicks` | Click - All Elements | Click ID **starts with** `content-` |
| `trigger-filter-interactions` | Click - All Elements | Click ID **starts with** `filter-` |
| `trigger-newsletter` | Click - All Elements | Click ID **starts with** `newsletter-` |

### Step 3 — Create GA4 event tags

For each tag: Tag type = **Google Analytics: GA4 Event**. Configure as:

**`ga4-affiliate-click`**
- Trigger: `trigger-affiliate-clicks`
- Event name: `affiliate_click`
- Event parameters:
  - `click_id` → `{{Click ID}}`
  - `click_url` → `{{Click URL}}`
  - `click_text` → `{{Click Text}}`

**`ga4-cta-click`**
- Trigger: `trigger-cta-clicks`
- Event name: `cta_click`
- Event parameters: same as above

**`ga4-navigation-click`**
- Trigger: `trigger-nav-clicks`
- Event name: `navigation_click`
- Event parameters: same as above

**`ga4-content-click`**
- Trigger: `trigger-content-clicks`
- Event name: `content_click`
- Event parameters: same as above

**`ga4-filter-interaction`**
- Trigger: `trigger-filter-interactions`
- Event name: `filter_interaction`
- Event parameters:
  - `click_id` → `{{Click ID}}`
  - `click_text` → `{{Click Text}}`

**`ga4-newsletter-interaction`**
- Trigger: `trigger-newsletter`
- Event name: `newsletter_interaction`
- Event parameters:
  - `click_id` → `{{Click ID}}`
  - `click_text` → `{{Click Text}}`

### Step 4 — Register custom dimensions in GA4

GA4 does not surface custom event parameters in reports automatically. After data starts flowing:

GA4 → Configure → Custom Definitions → Create custom dimension for each:

| Dimension name | Scope | Event parameter |
|---|---|---|
| Click ID | Event | `click_id` |
| Click URL | Event | `click_url` |
| Click Text | Event | `click_text` |

---

## Rules for New Pages and Components

**When adding a new page:**
1. Assign a breadcrumb Home id: `nav-{page-name}-breadcrumb-home`
2. Any affiliate CTA: `affiliate-{page-name}-{section}-{slug}`
3. Any content card link: `content-{page-name}-card-{slug}`

**When adding a new review:**
- The review page uses `review.slug` to generate ids dynamically — no code change needed. Just ensure `slug` is present in the review data object.

**When adding a new guide:**
- Pick cards use `pick.name` to generate ids dynamically — no code change needed.

**When adding a new playbook:**
- Tool try buttons use `tool.name` dynamically — no code change needed.

**When adding a new nav category:**
- Desktop and mobile category links use `label` dynamically — no code change needed.

**When adding a new footer section or link:**
- Footer links use `section` + `label` dynamically — no code change needed.

**When adding a new standalone component with clickable elements:**
- Choose the right prefix for the intent
- Follow `{prefix}-{location}-{section}-{item}` — all lowercase, hyphens only
- Ensure no duplicate `id`s exist on the same page (use page-specific location segments to prevent collisions)
