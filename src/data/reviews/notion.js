const review = {
  slug: 'notion',
  name: 'Notion',
  tagline: 'All-in-one workspace for notes, wikis, and projects.',
  category: 'Productivity',
  categoryColor: 'text-cyan-400 bg-cyan-950/50 border-cyan-800/30',
  badge: 'Staff Pick',
  badgeColor: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/40',
  rating: 8.7,
  ratingBreakdown: {
    Features: 9.2,
    UX: 8.5,
    Integrations: 8.8,
    Value: 8.0,
    MobileExperience: 7.5,
  },
  bestFor: 'Solo operators & small teams',
  pricingNote: 'Free plan available · Plus from $10/user/month',
  description:
    'Notion is a flexible all-in-one workspace that combines documents, relational databases, wikis, and project management in a single tool. Its block-based editor and customisable databases let small teams replace Confluence, Trello, and Airtable with one subscription. The trade-offs are real: the learning curve is steep, performance degrades noticeably past 5,000 database records, and full AI features require the $20/user Business tier.',
  affiliateUrl: '#',
  affiliateLabel: 'Try Notion',
  pros: [
    'Genuinely flexible: combine docs, databases, wikis, and task boards in one workspace',
    'Relational databases with filters, rollups, and formulas rival lightweight spreadsheet tools',
    'Generous free tier — unlimited blocks and pages with no time limit',
    '30,000+ community templates accelerate setup for common use cases',
    'Strong real-time collaboration with comments, mentions, and granular permissions',
    'Notion AI Agents (Business tier) handle multi-step automation, web research, and workspace search',
  ],
  cons: [
    'Steep learning curve — most teams need 2+ weeks to work confidently with databases and linked relations',
    'Performance drops noticeably with 5,000+ database records; 7,000+ rows can mean 4-6 second load times',
    'No true offline mode — cloud-only; limited offline caching for paid plans, no cellular sync on mobile',
    'Full AI features locked behind Business plan ($20/user/month); Free and Plus users get only a trial',
    'Mobile editing is frustrating for databases; AI Agent features on mobile only arrived in early 2026',
  ],
  pricing: [
    {
      plan: 'Free',
      price: '$0/month',
      bestFor: 'Individuals and light personal use',
    },
    {
      plan: 'Plus',
      price: '$10/user/month (annual) · $12/user/month (monthly)',
      bestFor: 'Small teams, unlimited uploads, 100 guests',
    },
    {
      plan: 'Business',
      price: '$20/user/month (annual) · $24/user/month (monthly)',
      bestFor: 'Teams needing SSO, advanced permissions, and full AI access',
    },
    {
      plan: 'Enterprise',
      price: 'Custom (contact sales)',
      bestFor: 'Large organisations requiring SCIM, audit logs, and dedicated support',
    },
  ],
  whoItsFor: [
    {
      type: 'Solo Operators & Freelancers',
      fit: 'Excellent',
      reason: 'Generous free tier handles notes, projects, and client wikis without cost',
    },
    {
      type: 'Startups & Small Teams (2–20 people)',
      fit: 'Excellent',
      reason: 'Replaces multiple tools; flexible enough to grow with the team',
    },
    {
      type: 'Knowledge Workers & Researchers',
      fit: 'Good',
      reason: 'Strong for structured notes and internal wikis; lacks local-first privacy of Obsidian',
    },
    {
      type: 'Mid-Size Teams (20–100 people)',
      fit: 'Good',
      reason: 'Works well with discipline; per-seat Business pricing adds up and database scale limits bite',
    },
    {
      type: 'Operations & Sales Teams',
      fit: 'Fair',
      reason: 'No native time tracking or CRM features; database performance falters at scale',
    },
    {
      type: 'Large Enterprises',
      fit: 'Fair',
      reason: 'Enterprise tier offers governance controls, but row-level permissions remain limited for complex orgs',
    },
  ],
  comparison: {
    dimensions: [
      'Collaboration',
      'Database Depth',
      'Offline Access',
      'AI Features',
      'Ease of Setup',
      'Price (team plan)',
    ],
    products: [
      {
        name: 'Notion',
        scores: [
          'Excellent',
          'Good',
          'Limited (paid caching only)',
          'Good (Business tier only)',
          'Moderate',
          '$20/user/mo (Business)',
        ],
      },
      {
        name: 'Obsidian',
        scores: [
          'Poor (individual-first)',
          'None',
          'Excellent (local-first)',
          'None native',
          'Easy for solo users',
          'Free / $8/mo sync',
        ],
      },
      {
        name: 'Coda',
        scores: [
          'Excellent',
          'Excellent',
          'None',
          'Good (all paid plans)',
          'Moderate',
          '$12/Doc Maker/mo (Pro)',
        ],
      },
    ],
  },
  verdict:
    'Notion earns its 8.7 rating by doing something genuinely difficult: combining flexible document editing, relational databases, and team wikis in a single coherent tool that solo users can start for free and small teams can grow into. The 9.2 on Features reflects real breadth — databases, kanban, calendars, AI Agents — while the 7.5 on Mobile Experience honestly reflects a mobile app that still lags behind desktop in editing comfort and lacks cellular offline sync. The main watch-outs are pricing and scale: full AI requires committing to $20/user/month, and database performance degrades meaningfully past 5,000 records. For individuals, students, and tech-comfortable teams under 50 people who want to consolidate their stack, Notion is hard to beat; for sales-heavy teams, large enterprises with strict row-level access needs, or anyone requiring offline-first reliability, look at Coda or a dedicated tool instead.',
}

export default review
