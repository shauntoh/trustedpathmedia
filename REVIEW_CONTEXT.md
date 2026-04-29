# Review Page Context — ToolNav

Reference standard for all product review pages. Apply consistently to every new review.

> **Related:** [`GTM_TRACKING.md`](./GTM_TRACKING.md) — click tracking convention for GTM & GA4. Every clickable element on every page (including review pages) must follow that guide.

---

## URL Taxonomy

Standard URL routing via Astro:

```
/review/{slug}
```

**Slug rules:** lowercase, hyphenated, no special characters.
Examples: `claude-ai`, `hostinger`, `nordvpn`, `notion`, `coursera`

---

## Review Data Schema

Each review lives in `src/data/reviews/{slug}.js` and exports a single default object:

```js
{
  slug: String,           // matches URL slug
  name: String,           // product display name
  tagline: String,        // one-line value proposition (≤10 words)
  category: String,       // one of: AI Tools | Hosting | SaaS | VPN | Courses | Productivity
  categoryColor: String,  // Tailwind classes for badge (match Categories.jsx palette)
  badge: String,          // e.g. "Top Pick" | "Best Value" | "Editor's Choice" | "Staff Pick"
  badgeColor: String,     // Tailwind classes for badge pill
  rating: Number,         // overall score to 1 decimal, e.g. 9.4
  ratingBreakdown: {      // 5 dimensions, scored out of 10
    [dimension]: Number   // choose dimensions relevant to the category
  },
  bestFor: String,        // concise audience descriptor, e.g. "Developers & writers"
  pricingNote: String,    // one-line pricing summary, e.g. "Free plan · Pro from $20/mo"
  description: String,    // 2–3 sentence editorial summary (honest, no hype)
  affiliateUrl: String,   // affiliate link URL (replace '#' with real link when available)
  affiliateLabel: String, // CTA button text, e.g. "Try Claude AI"
  pros: String[],         // 4–6 genuine strengths
  cons: String[],         // 3–5 honest limitations
  pricing: [              // pricing tiers table
    { plan: String, price: String, bestFor: String }
  ],
  whoItsFor: [            // user fit grid
    { type: String, fit: 'Excellent' | 'Good' | 'Fair' | 'Poor', reason: String }
  ],
  comparison: {           // vs. top 2 competitors
    dimensions: String[], // row labels
    products: [
      { name: String, scores: String[] } // one score per dimension
    ]
  },
  verdict: String,        // 3–4 sentence final editorial verdict (balanced)
}
```

---

## Page Wireframe (top → bottom)

```
[Nav]                          ← shared, same as homepage

[Breadcrumb]                   ← Home > {Category} > {Product Name}

[Product Hero]
  Category badge
  Product name (h1, large)
  Tagline (subtitle)
  Rating row: stars + score + badge pill
  Best For label
  Description (2–3 sentences)
  [Primary CTA button]         ← affiliate link, opens new tab
  Affiliate disclosure line    ← "We may earn a commission…"

[Quick Stats Bar]              ← 4 pills: Rating | Pricing | Best For | Category

[Pros & Cons]                  ← two-column grid, green/red icons

[Pricing Table]                ← plan | price | best for

[Who It's For]                 ← grid cards: user type + fit badge + reason

[How It Compares]              ← table: dimensions × products

[Our Verdict]                  ← rating breakdown bars + final paragraph + CTA

[Footer]                       ← shared, same as homepage
```

---

## Navigation & Transitions

**Rule:** Every route change triggers a page-enter animation.

**Implementation:**
- The `.page-enter` CSS class is defined in `src/index.css` — `opacity: 0 → 1` + `translateY(8px → 0)` over 200ms ease-out
- Astro handles the routing and page loads natively.

---

## Design Principles

**Voice:** Editorially independent. State strengths clearly, state limitations plainly. No superlatives without evidence. No hype.

**Affiliate transparency:** Every review page includes a visible disclosure line under the primary CTA and a footer disclosure strip. Never bury it.

**Rating integrity:** Overall rating is derived from the 5-dimension breakdown average, rounded to 1 decimal. Do not inflate ratings to improve conversion.

**Tone:** Direct, useful, specific. Speak to a smart reader who is comparison-shopping, not someone who needs convincing.

**Visual language:** Dark navy palette (`navy-900` base). Accent colors match the category color (violet = AI Tools, emerald = Hosting, rose = VPN, cyan = Productivity, amber = Courses, blue = SaaS). Consistent with homepage components.

---

## Category → Color Mapping

| Category    | Text color        | Bg color              | Border color          |
|-------------|-------------------|-----------------------|-----------------------|
| AI Tools    | text-violet-400   | bg-violet-950/50      | border-violet-800/30  |
| Hosting     | text-emerald-400  | bg-emerald-950/50     | border-emerald-800/30 |
| SaaS        | text-blue-400     | bg-blue-950/50        | border-blue-800/30    |
| VPN         | text-rose-400     | bg-rose-950/50        | border-rose-800/30    |
| Courses     | text-amber-400    | bg-amber-950/50       | border-amber-800/30   |
| Productivity| text-cyan-400     | bg-cyan-950/50        | border-cyan-800/30    |

---

## Rating Dimension Guide by Category

Choose 5 dimensions appropriate to the product category:

| Category    | Recommended Dimensions                                      |
|-------------|-------------------------------------------------------------|
| AI Tools    | Writing, Coding, Value, Features, Support                   |
| Hosting     | Performance, Reliability, Value, Ease of Use, Support       |
| VPN         | Speed, Privacy, Server Coverage, Value, App Quality         |
| SaaS        | Features, Ease of Use, Integrations, Value, Support         |
| Courses     | Content Quality, Instructor, Value, Practicality, Support   |
| Productivity| Features, UX, Integrations, Value, Mobile Experience        |

---

## Fit Labels (whoItsFor)

- **Excellent** — core use case, strong recommendation
- **Good** — works well with minor trade-offs
- **Fair** — usable but not the best option
- **Poor** — not recommended for this use case

---

## Affiliate Link Placeholder

Use `'#'` until a real affiliate link is provided. The CTA button still renders; it just won't track until replaced.
