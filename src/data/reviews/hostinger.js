const review = {
  slug: 'hostinger',
  name: 'Hostinger',
  tagline: 'Fast, affordable hosting for sites that need to ship.',
  category: 'Hosting',
  categoryColor: 'text-emerald-400 bg-emerald-950/50 border-emerald-800/30',
  badge: 'Best Value',
  badgeColor: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40',
  rating: 8.9,
  ratingBreakdown: {
    Performance: 9.2,
    Reliability: 9.0,
    Value: 9.8,
    EaseOfUse: 9.0,
    Support: 7.5,
  },
  bestFor: 'Side projects & small businesses',
  pricingNote: 'Shared hosting from $2.99/month (48-mo) · renews at $10.99–$25.99/month',
  description:
    'Hostinger delivers genuinely fast shared hosting — LiteSpeed web servers, NVMe SSD storage, and a global CDN — at prices that undercut most competitors by a wide margin. The hPanel control panel is clean and accessible to beginners, while Git integration and multiple PHP versions make it workable for developers too. The main catch is the significant gap between introductory and renewal pricing, and support is live chat only with no phone option.',
  affiliateUrl: '#',
  affiliateLabel: 'Try Hostinger',
  pros: [
    'Lowest introductory price in mainstream shared hosting (from $2.99/month)',
    'LiteSpeed servers and NVMe SSD storage deliver sub-500ms response times in independent tests',
    '99.9% uptime guarantee, with real-world measurements averaging 99.96–99.98% over 12 months',
    'Datacenters across 4 continents (US, UK, EU, India, Singapore, Brazil) — good global coverage',
    'hPanel is clean and beginner-friendly without sacrificing developer tools (Git, PHP version switching)',
    'Free domain, SSL, CDN, and site migration included on most plans',
  ],
  cons: [
    'Renewal prices jump sharply — Premium plan goes from $2.99 to $10.99/month (267% increase)',
    'No phone support; live chat only — response quality varies and the AI bot is unreliable for complex issues',
    'Automated daily backups only available on Business plan and above; Premium gets weekly',
    'Aggressive upsells during checkout for add-ons that are free or cheaper elsewhere',
    'Account suspension policy has drawn complaints — some users report sites suspended with little warning and limited recourse',
  ],
  pricing: [
    {
      plan: 'Premium',
      price: '$2.99/month (48-mo intro) · renews at $10.99/month',
      bestFor: 'Personal sites and first-time hosting users',
    },
    {
      plan: 'Business',
      price: '$3.99/month (48-mo intro) · renews at $16.99/month',
      bestFor: 'Small businesses needing daily backups and more storage',
    },
    {
      plan: 'Cloud Startup',
      price: '$7.99/month (48-mo intro) · renews at $25.99/month',
      bestFor: 'Growing sites needing dedicated resources and priority support',
    },
  ],
  whoItsFor: [
    {
      type: 'Bloggers & Personal Sites',
      fit: 'Excellent',
      reason: 'Low entry cost, easy WordPress install, and adequate performance for low-to-medium traffic',
    },
    {
      type: 'Freelancers & Agencies',
      fit: 'Good',
      reason: 'Business plan supports 50 sites with daily backups; hPanel client management works for small rosters',
    },
    {
      type: 'Small Business Owners',
      fit: 'Good',
      reason: 'Solid uptime and speed for brochure or WooCommerce sites; renewal cost needs to be budgeted for',
    },
    {
      type: 'Developers',
      fit: 'Fair',
      reason: 'Git integration and PHP version control are useful, but shared hosting resource limits cap serious app workloads',
    },
    {
      type: 'High-Traffic eCommerce',
      fit: 'Poor',
      reason: 'Shared CPU/RAM limits are a real constraint at scale; VPS or cloud hosting better suited here',
    },
  ],
  comparison: {
    dimensions: ['Starting Price', 'Renewal Price', 'Uptime (tested)', 'Load Speed', 'Support Channels', 'Free Domain'],
    products: [
      {
        name: 'Hostinger',
        scores: ['$2.99/mo', '$10.99/mo', '~99.97%', 'Under 500ms', 'Live chat only', 'Yes'],
      },
      {
        name: 'Bluehost',
        scores: ['$2.95/mo', '$8.99/mo', '~99.95%', '600–800ms', 'Chat + Phone', 'Yes'],
      },
      {
        name: 'SiteGround',
        scores: ['$2.99/mo', '$17.99/mo', '~99.99%', 'Under 400ms', 'Chat + Ticket + Phone', 'No'],
      },
    ],
  },
  verdict:
    'Hostinger earns an 8.9 based on a genuine strength: it delivers measurably fast hosting at a price point that other hosts cannot match at comparable performance levels. LiteSpeed servers and NVMe storage produce load times that rival hosts charging two or three times more. The 8.9 is not a 9.5+ because the support tier is a real gap — no phone line, an unreliable AI chatbot as first contact, and inconsistent escalation for billing or suspension issues. The renewal pricing cliff is also something every buyer needs to see before signing up, not after. For side projects, personal sites, WordPress blogs, and small business pages that need reliable speed without enterprise budget, Hostinger is a strong choice. For anything that requires guaranteed fast human support or stable long-term pricing, look at SiteGround.',
}

export default review
