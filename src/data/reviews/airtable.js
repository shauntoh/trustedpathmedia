const review = {
  slug: 'airtable',
  name: 'Airtable',
  lastUpdated: '2026-05-07',
  metaDescription: 'Airtable review 2026: the flexible database-spreadsheet hybrid tested for project management, content calendars, and CRM use cases. Is it worth the upgrade from free?',
  tagline: 'A flexible database for teams who\'ve outgrown spreadsheets.',
  category: 'SaaS',
  categoryColor: 'text-blue-400 bg-blue-950/50 border-blue-800/30',
  badge: 'Staff Pick',
  badgeColor: 'bg-blue-950/60 text-blue-400 border-blue-800/40',
  rating: 8.5,
  ratingBreakdown: {
    Features: 9.0,
    EaseOfUse: 8.2,
    Integrations: 8.5,
    Value: 7.8,
    Support: 8.0,
  },
  bestFor: 'Teams managing structured data across projects, content, and operations',
  pricingNote: 'Free plan available · Team from $20/seat/month',
  description:
    'Airtable sits between a spreadsheet and a database — more structured than Google Sheets, more flexible than traditional project management tools. You can view the same data as a grid, Kanban board, calendar, gallery, or Gantt chart, making it adaptable to editorial calendars, CRM pipelines, product roadmaps, and operational workflows. AI features added in recent releases automate field population and data categorisation. The free plan is genuinely useful; Team plan pricing adds up quickly for larger groups, and the learning curve for building complex relational bases is steeper than it first appears.',
  affiliateUrl: '#',
  affiliateLabel: 'Try Airtable',
  pros: [
    'Flexible views — Grid, Kanban, Calendar, Gallery, Gantt, and Form on the same underlying data',
    'Relational tables let you link records across bases — closer to a real database than most no-code tools',
    'AI field automation populates, categorises, and summarises data without manual entry',
    'Interfaces builder creates custom dashboards and forms without coding',
    'Strong integration ecosystem including Zapier, n8n, and a native API',
  ],
  cons: [
    'Team plan pricing per seat adds up quickly for larger teams — becomes expensive relative to alternatives',
    'Building complex relational bases has a steeper learning curve than the clean UI suggests',
    'Automation features are more limited than dedicated tools like Zapier or n8n',
    'Record limits on the free and Team plans require careful data management for growing databases',
    'Offline access is limited — not suitable for workflows requiring full offline capability',
  ],
  pricing: [
    { plan: 'Free', price: '$0/month', bestFor: 'Up to 5 editors, 1,000 records per base — suitable for solo use or very small teams' },
    { plan: 'Team', price: '$20/seat/month (annual)', bestFor: '50,000 records per base, unlimited editors, automations — most teams start here' },
    { plan: 'Business', price: '$45/seat/month (annual)', bestFor: 'Advanced permissions, Gantt and Timeline views, and admin tools for mid-sized organisations' },
    { plan: 'Enterprise Scale', price: 'Custom', bestFor: 'Large organisations needing SSO, audit logs, and dedicated support' },
  ],
  whoItsFor: [
    { type: 'Content & Editorial Teams', fit: 'Excellent', reason: 'The Calendar and Kanban views on the same data make it the most flexible tool for managing editorial pipelines and content calendars' },
    { type: 'Operations Teams', fit: 'Excellent', reason: 'Flexible relational structure handles operational workflows — vendor tracking, asset management, project coordination — that spreadsheets struggle with' },
    { type: 'Small Product Teams', fit: 'Good', reason: 'Roadmap management and feature tracking work well; dedicated tools like Linear are more purpose-built for engineering workflows' },
    { type: 'Sales Teams', fit: 'Good', reason: 'Works as a lightweight CRM for early-stage teams; dedicated CRM tools are stronger once pipeline complexity grows' },
    { type: 'Large Enterprises', fit: 'Fair', reason: 'Per-seat pricing at scale and record limits make it expensive relative to purpose-built enterprise tools' },
  ],
  comparison: {
    dimensions: ['Primary Use Case', 'Relational Data', 'Free Plan', 'Price (Team)', 'AI Features', 'Views Available'],
    products: [
      {
        name: 'Airtable',
        scores: ['Database + PM', 'Yes (linked records)', '1,000 records', '$20/seat/mo', 'Yes (AI fields)', 'Grid, Kanban, Calendar, Gantt, Gallery'],
      },
      {
        name: 'Notion',
        scores: ['Docs + Wiki + DB', 'Basic relations', 'Unlimited blocks', '$10/seat/mo', 'Yes (Notion AI)', 'Table, Board, Calendar, Gallery, List'],
      },
      {
        name: 'Google Sheets',
        scores: ['Spreadsheet', 'No', 'Free (generous)', 'Free', 'Limited', 'Grid only'],
      },
    ],
  },
  verdict:
    'Airtable earns an 8.5 — the most flexible no-code database available, and the right tool when you\'ve outgrown spreadsheets but don\'t need (or want) a full relational database. The combination of multiple views on the same data and a genuine relational structure is a real competitive advantage for content, operations, and small product teams. Where it falls short: per-seat pricing makes it expensive at scale, and the learning curve for building complex bases is steeper than the product\'s polished UI implies. For teams running structured workflows across projects, content, or operations, Airtable is among the best tools in its category. For users who primarily need docs plus lightweight databases, Notion at $10/seat/month is a more cost-effective starting point.',
}

export default review