const review = {
  slug: 'chatgpt',
  name: 'ChatGPT',
  lastUpdated: '2026-05-07',
  metaDescription: 'ChatGPT review 2026: GPT-4o, DALL-E image generation, voice mode, and web search tested. The most feature-rich AI assistant — but is it the best? Full independent verdict.',
  tagline: 'The most feature-complete AI assistant for everyday use.',
  category: 'AI Tools',
  categoryColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
  badge: 'Staff Pick',
  badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  rating: 9.0,
  ratingBreakdown: {
    Writing: 8.8,
    Coding: 9.2,
    Features: 9.8,
    Value: 9.0,
    Support: 7.5,
  },
  bestFor: 'General users, creators & teams who need everything in one place',
  pricingNote: 'Free plan available · Plus from $20/month · Pro from $200/month',
  description:
    'ChatGPT is OpenAI\'s flagship product and the most widely adopted AI assistant in the world. GPT-4o handles text, code, images, voice, and web search in a single interface — making it the most feature-complete AI tool for general use. Its free tier is genuinely useful, and the Plus plan gives access to the full model range including DALL-E 3 image generation and Advanced Voice Mode. The trade-off: writing quality is strong but output tends to have a more recognisable "AI voice" than Claude\'s prose, and conversation history is stored by default unless manually adjusted in settings.',
  affiliateUrl: '#',
  affiliateLabel: 'Try ChatGPT',
  pros: [
    'Most feature-complete AI assistant — text, images (DALL-E 3), voice, web search, and code in one product',
    'GPT-4o is fast, multimodal, and highly capable across a wide range of everyday tasks',
    'Custom GPTs and the GPT Store enable purpose-built workflows without coding',
    'Advanced Voice Mode delivers natural, real-time conversation with emotional tone awareness',
    'Generous free tier — GPT-4o access included with usage limits, no credit card required',
    'Memory feature retains user context across conversations, reducing repetitive setup',
  ],
  cons: [
    'Writing output has a recognisable "AI voice" — more noticeable than Claude on longer-form prose',
    'Conversation data is stored by default and used for model training unless disabled in settings',
    '128K context window is smaller than Claude\'s 200K — affects performance on very long documents',
    'Pro plan at $200/month is a steep jump over Plus for most users who won\'t need extended reasoning limits',
    'Support quality and response times vary significantly across free and paid tiers',
  ],
  pricing: [
    { plan: 'Free', price: '$0/month', bestFor: 'Casual use, testing GPT-4o with usage limits' },
    { plan: 'Plus', price: '$20/month', bestFor: 'Active users who need full model access, image generation, and voice' },
    { plan: 'Pro', price: '$200/month', bestFor: 'Power users who need o3 Pro mode and extended reasoning limits' },
    { plan: 'Team', price: '$30/seat/month', bestFor: 'Small teams needing shared workspace and admin controls' },
    { plan: 'Enterprise', price: 'Custom', bestFor: 'Large organisations needing compliance, SSO, and SLAs' },
  ],
  whoItsFor: [
    { type: 'General Professionals', fit: 'Excellent', reason: 'Widest feature set in one interface — handles most everyday tasks without needing multiple tools' },
    { type: 'Content Creators', fit: 'Excellent', reason: 'Built-in image generation, voice mode, and web search covers creative workflows end-to-end' },
    { type: 'Developers', fit: 'Good', reason: 'Strong coding and code interpreter; Claude Code edges it for serious software engineering tasks' },
    { type: 'Writers & Editors', fit: 'Good', reason: 'Capable on most writing tasks but output tends to sound more "AI-written" — Claude produces more natural prose' },
    { type: 'Business Teams', fit: 'Good', reason: 'Team plan and custom GPTs enable workflow automation; enterprise integrations are maturing' },
    { type: 'Privacy-Conscious Users', fit: 'Fair', reason: 'Conversations stored by default and used for training; requires active settings management to opt out' },
  ],
  comparison: {
    dimensions: ['Writing / Prose', 'Coding', 'Context Window', 'Image Generation', 'Voice Mode', 'Price (Plus/Pro)'],
    products: [
      {
        name: 'ChatGPT',
        scores: ['Good', 'Strong', '128K', 'Yes (DALL-E 3)', 'Excellent', '$20/mo'],
      },
      {
        name: 'Claude AI',
        scores: ['Best', 'Best', '200K (reliable)', 'None', 'None', '$20/mo'],
      },
      {
        name: 'Gemini',
        scores: ['Fair', 'Good', '2M (variable quality)', 'Yes (native)', 'Good', 'Free / ~$20/mo'],
      },
    ],
  },
  verdict:
    'ChatGPT earns a 9.0 as the most feature-complete AI assistant available. If you want one tool that handles text, images, voice, code, and web search, nothing else matches the breadth of what GPT-4o delivers on the Plus plan at $20/month. The free tier is genuinely useful — enough to evaluate before committing. Where it falls short of a higher score: writing output has a recognisable AI quality that more discerning users notice, the 128K context window limits performance on large documents, and conversation storage requires active management to turn off. For users who prioritise versatility and breadth, ChatGPT is the top choice. For users whose work centres on prose quality, long documents, or serious coding, Claude is the stronger option. Both have free tiers worth trying before deciding.',
}

export default review
