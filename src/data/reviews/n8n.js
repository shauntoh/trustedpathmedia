const review = {
  slug: 'n8n',
  name: 'n8n',
  tagline: 'Open-source workflow automation built for developers and power users.',
  category: 'AI Tools',
  categoryColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  rating: 8.8,
  ratingBreakdown: {
    Features: 9.4,
    Flexibility: 9.6,
    Value: 9.0,
    UX: 7.8,
    Support: 7.5,
  },
  bestFor: 'Developers, ops teams & technical founders',
  pricingNote: 'Free self-hosted (open-source) · Cloud from $20/month',
  description:
    'n8n is an open-source, low-code workflow automation platform that lets developers and technical teams build complex integrations between apps, APIs, databases, and AI models — without being locked into a vendor\'s pricing or infrastructure. Its self-hosted Community Edition is completely free, while the n8n Cloud plans offer a managed option starting at $20 per month. With 400+ native integrations and the ability to write custom JavaScript or Python nodes, n8n sits between no-code tools like Zapier and full custom development. Worth noting: the visual interface has a steeper learning curve than consumer-grade automation tools, and the self-hosted route requires managing your own server infrastructure.',
  affiliateUrl: 'https://n8n.io',
  affiliateLabel: 'Try n8n',
  pros: [
    'Fully open-source and self-hostable — no vendor lock-in and no per-execution fees on Community Edition',
    '400+ native integrations covering CRMs, databases, communication tools, AI models, and developer APIs',
    'First-class AI workflow support — connect LLMs, vector databases, and AI agents directly into automation pipelines',
    'Custom JavaScript and Python nodes let developers extend any workflow beyond what visual builders allow',
    'n8n Cloud removes infrastructure management with a 14-day free trial and competitive execution-based pricing',
  ],
  cons: [
    'The workflow builder has a steeper learning curve than consumer-grade tools like Zapier — most comfortable for users with some technical background',
    'Self-hosting requires managing your own server, updates, and backups, which adds operational overhead for non-technical teams',
    'Cloud plans are execution-based, so high-volume automations benefit from careful planning to stay within tier limits',
    'Community support is active but official support response times can vary depending on plan tier',
  ],
  pricing: [
    { plan: 'Community (Self-Hosted)', price: 'Free', bestFor: 'Developers and technical teams who can manage their own infrastructure' },
    { plan: 'Cloud Starter', price: '$20/month (2,500 executions)', bestFor: 'Individuals and small teams getting started with cloud-managed automation' },
    { plan: 'Cloud Pro', price: '$50/month (10,000 executions)', bestFor: 'Growing teams running moderate automation volume' },
    { plan: 'Cloud Business', price: '~$667/month (40,000 executions)', bestFor: 'Organisations needing SSO, Git integration, and high-volume automation' },
    { plan: 'Enterprise', price: 'Custom', bestFor: 'Large-scale deployments with dedicated support and compliance requirements' },
  ],
  whoItsFor: [
    { type: 'Developers & Engineers', fit: 'Excellent', reason: 'Full custom node support, JavaScript/Python execution, and API-first design make it a natural fit' },
    { type: 'Technical Founders & Ops Teams', fit: 'Excellent', reason: 'Self-hosted free tier and deep integrations make it cost-effective for internal tooling and process automation' },
    { type: 'AI/ML Teams', fit: 'Excellent', reason: 'Native support for LLM integrations, AI agents, and vector database connections makes it strong for AI pipeline orchestration' },
    { type: 'No-Code Teams', fit: 'Fair', reason: 'The visual builder works for simpler flows, but complex automations will likely require someone comfortable with code' },
    { type: 'Non-Technical Business Users', fit: 'Poor', reason: 'Zapier or Make are better fits for users who need guided, code-free automation without server management' },
  ],
  comparison: {
    dimensions: ['Open Source', 'Self-Hostable', 'AI Integration', 'Custom Code', 'Ease of Use', 'Price (entry)'],
    products: [
      {
        name: 'n8n',
        scores: ['Yes', 'Yes (free)', 'Excellent', 'Yes (JS/Python)', 'Moderate', 'Free / $20/mo cloud'],
      },
      {
        name: 'Zapier',
        scores: ['No', 'No', 'Good', 'Limited', 'Excellent', 'Free / $19.99/mo'],
      },
      {
        name: 'Make (Integromat)',
        scores: ['No', 'No', 'Good', 'Limited', 'Good', 'Free / $9/mo'],
      },
    ],
  },
  verdict:
    'n8n earns its 8.8 rating by offering something no major competitor matches: a genuinely powerful, fully open-source automation platform that developers can self-host for free and extend without limits. The 9.6 on Flexibility reflects real freedom — 400+ integrations, custom JavaScript and Python nodes, and first-class AI pipeline support make it one of the most capable automation tools available. The 7.8 on UX is honest: n8n\'s interface is more powerful than intuitive, and new users coming from Zapier should expect a learning period. For developers, technical founders, and ops teams who want to own their automation stack without paying per-execution fees or accepting a walled garden, n8n is the strongest open-source choice available. Teams without technical capacity should evaluate Zapier or Make first.',
}

export default review
