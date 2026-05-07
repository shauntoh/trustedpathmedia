const review = {
  slug: 'perplexity',
  name: 'Perplexity',
  lastUpdated: '2026-05-07',
  metaDescription: 'Perplexity AI review 2026: AI-powered search with cited sources tested. Is it a research tool, a search engine, or both? Full independent verdict.',
  tagline: 'AI-powered search that shows its sources.',
  category: 'AI Tools',
  categoryColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
  badge: 'Staff Pick',
  badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  rating: 8.4,
  ratingBreakdown: {
    Writing: 8.0,
    Coding: 7.5,
    Features: 8.8,
    Value: 8.8,
    Support: 7.2,
  },
  bestFor: 'Researchers, analysts & professionals who need cited, up-to-date answers',
  pricingNote: 'Free plan available · Pro from $20/month',
  description:
    'Perplexity is an AI-powered search and research tool that answers questions with cited sources pulled in real time from the web. Its core strength is transparency — every claim links back to a source, which makes it far more useful than a standard chatbot for research, fact-checking, and staying current. The free tier is genuinely capable. Where it differs from ChatGPT or Claude: Perplexity is optimised for retrieval and synthesis, not long-form creation or coding. Think of it as a smarter search engine rather than a general-purpose AI assistant.',
  affiliateUrl: '#',
  affiliateLabel: 'Try Perplexity',
  pros: [
    'Every answer cites its sources inline — easy to verify claims and dig deeper',
    'Real-time web access by default — no knowledge cutoff issues for current events',
    'Pro Search mode reasons through complex multi-step research questions',
    'Spaces feature lets you build persistent research workspaces around a topic',
    'Model choice on Pro — run searches through GPT-4o, Claude, or Sonar depending on your needs',
    'Clean, focused interface — less noise than a full chatbot, faster for research tasks',
  ],
  cons: [
    'Not designed for long-form writing or creative tasks — responses are concise by default',
    'Weaker at coding than Claude or ChatGPT — not the right tool for software development',
    'Source quality varies — popular or recent sources are well-covered; niche or paywalled content less so',
    'No memory or persistent conversation context in the way ChatGPT or Claude offer',
    'Pro plan at $20/month is the same price as ChatGPT Plus or Claude Pro — harder to justify as a primary tool',
  ],
  pricing: [
    { plan: 'Free', price: '$0/month', bestFor: 'Everyday research with standard search and basic Pro Search limits' },
    { plan: 'Pro', price: '$20/month (monthly) · $200/year', bestFor: 'Heavy researchers who need unlimited Pro Search, more model options, and file uploads' },
  ],
  whoItsFor: [
    { type: 'Researchers & Analysts', fit: 'Excellent', reason: 'Cited sources, real-time web access, and Pro Search mode make it the fastest tool for evidence-based research' },
    { type: 'Journalists & Fact-Checkers', fit: 'Excellent', reason: 'Inline citations make source verification faster than any other AI tool on the market' },
    { type: 'Students', fit: 'Good', reason: 'Strong for literature review and background research; should be cross-checked for academic accuracy' },
    { type: 'General Professionals', fit: 'Good', reason: 'Useful for current events, quick lookups, and competitive research; less capable as a general assistant' },
    { type: 'Developers', fit: 'Fair', reason: 'Can explain concepts and find documentation, but coding assistance is noticeably weaker than Claude or ChatGPT' },
    { type: 'Content Creators', fit: 'Fair', reason: 'Good for research and fact-finding; not the right tool for drafting or editing long-form content' },
  ],
  comparison: {
    dimensions: ['Real-time Web', 'Source Citations', 'Writing / Prose', 'Coding', 'Context Window', 'Price'],
    products: [
      {
        name: 'Perplexity',
        scores: ['Yes (default)', 'Yes (inline)', 'Fair', 'Weak', 'N/A (search-based)', '$20/mo (Pro)'],
      },
      {
        name: 'ChatGPT',
        scores: ['Yes (tool-based)', 'Partial', 'Good', 'Strong', '128K', '$20/mo (Plus)'],
      },
      {
        name: 'Claude AI',
        scores: ['No (knowledge cutoff)', 'No', 'Best', 'Best', '200K', '$20/mo (Pro)'],
      },
    ],
  },
  verdict:
    'Perplexity earns an 8.4 as the best AI tool for research and fact-finding — a category where Claude and ChatGPT are weaker by design. If you regularly need cited, up-to-date answers to specific questions, nothing else matches its speed and transparency. The free tier covers most research use cases without a credit card. Where it doesn\'t compete: long-form writing, creative work, and coding are not what Perplexity is built for, and the Pro plan is harder to justify as a standalone $20/month subscription when ChatGPT Plus and Claude Pro offer broader capabilities at the same price. The strongest case for Perplexity Pro is as a complement to another AI assistant — not a replacement. For researchers, journalists, and analysts who need sourced answers fast, it\'s the clearest recommendation in its category.',
}

export default review
