const review = {
  slug: 'gemini',
  name: 'Gemini',
  lastUpdated: '2026-05-07',
  metaDescription: 'Gemini review 2026: Google\'s AI assistant with a 2M-token context window, native image generation, and deep Google Workspace integration tested. Full independent verdict.',
  tagline: 'Google\'s AI built deep into Search, Docs, and Gmail.',
  category: 'AI Tools',
  categoryColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  rating: 8.6,
  ratingBreakdown: {
    Writing: 8.2,
    Coding: 8.5,
    Features: 9.2,
    Value: 9.0,
    Support: 7.5,
  },
  bestFor: 'Google Workspace users & researchers working with long documents',
  pricingNote: 'Free plan available · Advanced from $19.99/month (via Google One AI Premium)',
  description:
    'Gemini is Google\'s AI assistant, available as a standalone product and embedded across Search, Docs, Sheets, Gmail, and Drive. Its 2-million-token context window — the largest of any mainstream AI assistant — makes it a strong choice for tasks involving very long documents or large codebases. Native integration with Google services is a genuine advantage for Workspace users. Where it falls short: prose quality is inconsistent compared to Claude or ChatGPT, and the enormous context window doesn\'t always translate to reliably accurate outputs at the extreme end.',
  affiliateUrl: '#',
  affiliateLabel: 'Try Gemini',
  pros: [
    '2-million-token context window — the largest of any mainstream AI assistant, useful for very long documents',
    'Deep Google Workspace integration — works natively inside Docs, Sheets, Gmail, Drive, and Search',
    'Native image generation included — Imagen 3 available without a separate tool or subscription',
    'Strong multimodal capability — handles text, images, video, and audio in one interface',
    'Competitive free tier — Gemini 2.5 Flash available at no cost with usage limits',
    'Google One AI Premium bundles 2 TB of storage with Gemini Advanced — good value for existing Google subscribers',
  ],
  cons: [
    'Writing quality is inconsistent — output can feel generic and lacks the precision of Claude\'s prose',
    'Context accuracy degrades at the extreme end of the 2M window — length is not the same as reliability',
    'Deeply tied to Google ecosystem — less useful if you don\'t use Google Workspace',
    'Privacy considerations: Google uses data from Gemini interactions for product improvement by default',
    'Gemini Advanced requires a Google One AI Premium subscription, which bundles features some users won\'t need',
    'Reasoning model (Gemini 2.5 Pro) is slower than GPT-4o or Claude on time-sensitive tasks',
  ],
  pricing: [
    { plan: 'Free', price: '$0/month', bestFor: 'Casual users with Google account; includes Gemini 2.5 Flash with limits' },
    { plan: 'Advanced (Google One AI Premium)', price: '$19.99/month', bestFor: 'Power users who want Gemini 2.5 Pro, 2M context, and 2 TB storage' },
    { plan: 'Workspace Add-on', price: 'From $20/user/month', bestFor: 'Business teams using Google Workspace who want Gemini in Docs, Sheets, Gmail' },
  ],
  whoItsFor: [
    { type: 'Google Workspace Users', fit: 'Excellent', reason: 'Native integration with Docs, Sheets, Gmail, and Drive is a meaningful productivity advantage — no copy-paste workflow needed' },
    { type: 'Researchers & Analysts', fit: 'Good', reason: '2M context window is genuinely useful for working with large corpora, though reliability at the extreme end should be verified' },
    { type: 'General Professionals', fit: 'Good', reason: 'Capable across most everyday tasks; falls short of ChatGPT on feature breadth and Claude on writing quality' },
    { type: 'Developers', fit: 'Good', reason: 'Strong on code generation and explanation; Claude Code edges it for complex multi-file engineering tasks' },
    { type: 'Content Creators', fit: 'Fair', reason: 'Image generation is built in, but prose output is less consistent than Claude or ChatGPT for longer content' },
    { type: 'Privacy-Conscious Users', fit: 'Fair', reason: 'Google uses interaction data for product improvement by default; privacy settings exist but require active management' },
  ],
  comparison: {
    dimensions: ['Writing / Prose', 'Coding', 'Context Window', 'Image Generation', 'Workspace Integration', 'Price'],
    products: [
      {
        name: 'Gemini',
        scores: ['Fair', 'Good', '2M (variable)', 'Yes (Imagen 3)', 'Excellent (Google)', 'Free / $19.99/mo'],
      },
      {
        name: 'ChatGPT',
        scores: ['Good', 'Strong', '128K', 'Yes (DALL-E 3)', 'Good (Microsoft)', '$20/mo (Plus)'],
      },
      {
        name: 'Claude AI',
        scores: ['Best', 'Best', '200K (reliable)', 'None', 'Fair', '$20/mo (Pro)'],
      },
    ],
  },
  verdict:
    'Gemini earns an 8.6 — competitive and useful, but not the top pick in any single dimension for most users. Its strongest case is for Google Workspace power users: the native integration into Docs, Sheets, and Gmail is a genuine workflow advantage that ChatGPT and Claude can\'t replicate natively. The 2-million-token context window is impressive on paper, though the accuracy trade-offs at scale mean it\'s better suited to exploratory work than precision tasks. For users already paying for Google One storage, the AI Premium plan is reasonable value. For users choosing a primary AI assistant on merit alone, ChatGPT edges it on features and Claude edges it on writing quality. Gemini\'s best position is as a complementary tool for Google Workspace users rather than a first-choice standalone assistant.',
}

export default review