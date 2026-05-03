const review = {
  slug: 'fiverr',
  name: 'Fiverr',
  tagline: 'The world\'s largest freelance marketplace — hire specialists for any task in hours, not weeks.',
  category: 'Productivity',
  categoryColor: 'text-cyan-400 bg-cyan-950/50 border-cyan-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/40',
  rating: 8.7,
  ratingBreakdown: {
    TalentQuality: 8.5,
    ValueForMoney: 8.8,
    EaseOfHiring: 9.2,
    Communication: 8.0,
    PlatformFeatures: 9.0,
  },
  bestFor: 'Solopreneurs and small teams who need to outsource quickly without a full hiring process',
  pricingNote: 'Free to join · Pay per gig · Fiverr Business from $149/year',
  description:
    'Fiverr is the largest on-demand freelance marketplace, connecting buyers with specialists across over 700 service categories — from logo design and copywriting to software development and video production. The platform\'s fixed-price gig model makes it fast to hire without writing briefs or negotiating hourly rates. That said, service quality varies significantly by seller: some categories are saturated with low-quality work, and gig pricing can be confusing once you factor in package tiers and add-ons.',
  affiliateUrl: 'https://go.fiverr.com/visit/?bta=1167365&brand=fiverrmarketplace',
  affiliateLabel: 'Browse Fiverr',
  pros: [
    'Massive talent pool across 700+ categories means you can find a specialist for almost any task',
    'Fixed-price gig model lets you hire in minutes without negotiating scope or hourly rates',
    'Fast turnaround — many sellers deliver within 24–48 hours, useful for time-sensitive work',
    'Fiverr Pro surfaces vetted, hand-reviewed sellers for higher-stakes projects where quality matters',
    'Escrow-backed payments protect buyers — funds release only when you approve the delivery',
    'Fiverr Business ($149/year) adds team accounts, consolidated billing, and a dedicated success manager',
  ],
  cons: [
    'Service quality varies widely by seller — cheap gigs in competitive categories often produce generic, low-effort work',
    'Gig pricing is frequently misleading: base prices advertise low entry points while most usable deliverables require higher-tier packages or paid add-ons',
    'Some popular categories (logo design, article writing, social media posts) are flooded with sellers, making shortlisting time-consuming',
    'Communication is asynchronous and seller availability is not guaranteed — revisions can add days to delivery',
    'Less suitable for complex, ongoing engagements; Upwork\'s hourly contracts and milestone system handle long-term projects more cleanly',
  ],
  pricing: [
    {
      plan: 'Buyer Account',
      price: 'Free to join',
      bestFor: 'Anyone hiring on the platform — no subscription required, pay only for gigs you order',
    },
    {
      plan: 'Fiverr Business',
      price: '$149/year per account',
      bestFor: 'Teams that need shared billing, team collaboration tools, and a dedicated success manager',
    },
    {
      plan: 'Fiverr Pro',
      price: 'Varies by seller (typically 3–10x standard gig prices)',
      bestFor: 'Buyers who need vetted, professional-grade work and can pay a premium for quality assurance',
    },
  ],
  whoItsFor: [
    {
      type: 'Solopreneurs & Freelancers',
      fit: 'Excellent',
      reason: 'No subscription needed; fast access to specialists for one-off tasks like design, copy, or development without overhead',
    },
    {
      type: 'Small Teams (2–10 people)',
      fit: 'Excellent',
      reason: 'Fiverr Business consolidates team hiring, billing, and vendor management without a full procurement process',
    },
    {
      type: 'Startups',
      fit: 'Good',
      reason: 'Strong for filling skill gaps quickly during early growth stages; quality variance requires careful seller vetting',
    },
    {
      type: 'Marketing Teams',
      fit: 'Good',
      reason: 'Deep talent pool in content, design, video, and social media; Fiverr Pro reduces quality risk for brand-critical work',
    },
    {
      type: 'Agencies',
      fit: 'Fair',
      reason: 'Useful for overflow work and specialist tasks, but managing multiple freelancers across client projects adds coordination overhead',
    },
    {
      type: 'Large Enterprises',
      fit: 'Fair',
      reason: 'Fiverr Business adds structure, but enterprises with strict vendor compliance, NDAs, and SLA requirements typically need a managed solution or a dedicated staffing partner',
    },
  ],
  comparison: {
    dimensions: [
      'Ease of Hiring',
      'Talent Quality',
      'Price Range',
      'Long-Term Projects',
      'Vetting Process',
      'Best Use Case',
    ],
    products: [
      {
        name: 'Fiverr',
        scores: [
          'Excellent (fixed-price gigs, hire in minutes)',
          'Variable (Fiverr Pro raises the floor)',
          'Low to mid ($5–$500+ per gig)',
          'Fair (better suited to one-off tasks)',
          'Self-directed + Pro vetting tier',
          'Fast, one-off or recurring task outsourcing',
        ],
      },
      {
        name: 'Upwork',
        scores: [
          'Moderate (proposals, interviews, contract setup)',
          'Good to Excellent (competitive market)',
          'Mid to high ($15–$200+/hour)',
          'Excellent (hourly contracts and milestones)',
          'Skill tests, reviews, Top Rated badges',
          'Ongoing or complex projects needing close collaboration',
        ],
      },
      {
        name: 'Toptal',
        scores: [
          'Low (3–5 day matching process)',
          'Excellent (top 3% claim)',
          'High ($60–$200+/hour)',
          'Excellent (built for long-term engagements)',
          'Rigorous multi-stage screening',
          'Senior engineering, design, and finance talent at enterprise rates',
        ],
      },
    ],
  },
  verdict:
    'Fiverr earns its 8.7 rating by solving a genuine problem: getting specialised work done quickly without the overhead of traditional hiring. The 9.2 on Ease of Hiring reflects how far ahead the fixed-price gig model is for one-off tasks — you can find, evaluate, and order from a seller in under ten minutes. The 9.0 on Platform Features reflects real depth: Fiverr Pro, Fiverr Business, seller badges, review systems, and escrow payments all work reliably.\n\nThe lower scores on Talent Quality (8.5) and Communication (8.0) reflect the honest tradeoffs. High-traffic categories — logo design, blog writing, voiceover — are crowded with sellers racing to the bottom on price, and some package pricing structures obscure the true cost of a deliverable. The platform rewards buyers who know how to read seller reviews critically, check portfolio samples, and ask clarifying questions before ordering. Treating Fiverr as a quick-hire shortcut without vetting is how buyers end up disappointed.\n\nFor solopreneurs, small teams, and startups who need to move fast and outsource without a hiring process, Fiverr is one of the highest-ROI platforms available. For complex, long-running projects requiring tight collaboration and accountability, Upwork\'s hourly-contract model is a better structural fit. For enterprise teams that need guaranteed senior talent and formal vendor relationships, Toptal justifies the premium. But for the common case — getting a solid deliverable done quickly by a vetted specialist — Fiverr is hard to beat.',
}

export default review
