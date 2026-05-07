const review = {
  slug: 'claude-ai',
  name: 'Claude AI',
  lastUpdated: '2026-05-07',
  tagline: 'The AI built for serious writing and code.',
  category: 'AI Tools',
  categoryColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  rating: 9.4,
  ratingBreakdown: {
    Writing: 9.8,
    Coding: 9.6,
    Features: 9.2,
    Value: 8.5,
    Support: 7.5,
  },
  bestFor: 'Developers, writers & researchers',
  pricingNote: 'Free plan available · Pro from $20/month',
  description:
    'Claude is Anthropic\'s flagship AI assistant, purpose-built for long-form writing, complex reasoning, and professional coding work. It consistently outperforms competitors on prose quality and instruction-following — and its 200K-token context window makes it the best option for working with long documents. Worth noting: image generation is not built in, and the Pro plan is best suited to moderate rather than extremely high-volume workflows.',
  affiliateUrl: 'https://claude.ai',
  affiliateLabel: 'Try Claude AI',
  pros: [
    'Best-in-class prose quality — natural, precise, not "AI-voiced"',
    'Tops coding benchmarks (SWE-bench); Claude Code is a professional developer staple',
    '200K-token context window works reliably at scale',
    'Balanced safety design — useful without over-filtering',
    'Strong reasoning on multi-step and research-heavy tasks',
    'Free plan gives genuine access before committing',
  ],
  cons: [
    'Pro plan usage limits apply for very high-volume users',
    'Image generation is not built in — pair with a dedicated tool for visual workflows',
    'Like all AI tools, outputs are worth verifying for factual accuracy',
    'Support response times can vary depending on query volume',
    'Native integrations are still expanding; third-party tools may be needed for CRM or helpdesk workflows',
  ],
  pricing: [
    { plan: 'Free', price: '$0/month', bestFor: 'Casual use and testing' },
    { plan: 'Pro', price: '$20/month', bestFor: 'Active individual users, writers, developers' },
    { plan: 'Max', price: '$100–$200/month', bestFor: 'Power users who hit Pro limits regularly' },
    { plan: 'Team', price: 'From $25/seat/month', bestFor: 'Teams of 5–150, scales with usage' },
    { plan: 'Enterprise', price: 'Custom', bestFor: 'Large organisations, compliance-heavy environments' },
  ],
  whoItsFor: [
    { type: 'Writers & Editors', fit: 'Excellent', reason: 'Best prose quality of any AI assistant; respects style guides' },
    { type: 'Developers', fit: 'Excellent', reason: 'Claude Code leads on SWE-bench; handles full-project reasoning' },
    { type: 'Researchers & Students', fit: 'Excellent', reason: '200K context handles long papers and documents reliably' },
    { type: 'Startup Founders', fit: 'Good', reason: 'Strong general intelligence; limited workflow integrations' },
    { type: 'Marketing Teams', fit: 'Good', reason: 'Excellent copy; no image gen means pairing with another tool' },
    { type: 'Content Creators', fit: 'Fair', reason: 'Great for written content, but no visual output natively' },
    { type: 'Customer Support Teams', fit: 'Poor', reason: 'No CRM or helpdesk integrations; not designed for automation' },
  ],
  comparison: {
    dimensions: ['Writing / Prose', 'Coding', 'Context Window', 'Image Generation', 'Multimodal', 'Price (Pro)'],
    products: [
      {
        name: 'Claude AI',
        scores: ['Best', 'Best', '200K (reliable)', 'None', 'Fair', '$20/mo'],
      },
      {
        name: 'ChatGPT',
        scores: ['Good', 'Strong', '128K', 'Yes (DALL-E)', 'Excellent', '$20/mo'],
      },
      {
        name: 'Gemini',
        scores: ['Fair', 'Good', '2M (variable quality)', 'Yes (native)', 'Excellent', 'Free / ~$20/mo'],
      },
    ],
  },
  verdict:
    'Claude is the right choice if your work lives in words or code. Its writing quality is measurably superior to competitors in blind testing, and Claude Code has earned genuine loyalty from professional developers. The 9.4 rating reflects those real strengths — with a few things to keep in mind: the Pro plan has usage limits that affect very heavy workflows, image generation requires a separate tool, and native business integrations are still growing. For anyone who writes long-form content, works with large documents, or codes professionally, Claude is worth the subscription. For content creators who need images or teams that rely on CRM integrations, it is worth mapping your workflow before committing.',
}

export default review
