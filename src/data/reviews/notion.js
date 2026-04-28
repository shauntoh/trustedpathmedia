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
    'Notion is a flexible all-in-one workspace that combines documents, relational databases, wikis, and project management in a single tool. Its block-based editor and customisable databases let small teams replace Confluence, Trello, and Airtable with one subscription. Worth noting: there is a learning curve for advanced database features, very large databases load more slowly, and full AI features are available on the Business tier.',
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
    'Has a learning curve — most teams get comfortable with databases and linked relations within a couple of weeks',
    'Very large databases (5,000+ records) may experience slower load times; best suited to small-to-medium data sets',
    'Primarily cloud-based; paid plans include offline caching, though full offline access on mobile has some limitations',
    'Full AI features are available on the Business plan ($20/user/month); Free and Plus users can try AI features before upgrading',
    'Mobile database editing is more limited than desktop; AI Agent features on mobile were added in early 2026',
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
    'Notion earns its 8.7 rating by doing something genuinely difficult: combining flexible document editing, relational databases, and team wikis in a single coherent tool that solo users can start for free and small teams can grow into. The 9.2 on Features reflects real breadth — databases, kanban, calendars, AI Agents — while the 7.5 on Mobile Experience reflects a mobile app that continues to improve, with AI Agent features arriving in early 2026. A couple of things to weigh: full AI access requires the Business plan at $20/user/month, and very large databases perform best when kept to a manageable size. For individuals, students, and tech-comfortable teams under 50 people who want to consolidate their stack, Notion is hard to beat; for sales-heavy teams, large enterprises with complex row-level access needs, or anyone who needs offline-first reliability, Coda or a dedicated tool may be a better fit.',
}

export default review
