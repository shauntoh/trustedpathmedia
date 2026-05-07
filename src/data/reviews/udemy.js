const review = {
  slug: 'udemy',
  name: 'Udemy',
  lastUpdated: '2026-05-07',
  metaDescription: "Udemy review 2026: 200,000 courses, lifetime access and frequent $15 sales. Best value for self-paced learners — here's when to buy and what to avoid.",
  tagline: "The world's largest course marketplace — millions of topics at perpetually sale prices.",
  category: 'Courses',
  categoryColor: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-amber-950/60 text-amber-400 border-amber-800/40',
  rating: 8.4,
  ratingBreakdown: {
    Content: 8.0,
    Instructors: 7.8,
    Value: 9.5,
    UX: 8.6,
    Certification: 6.5,
  },
  bestFor: 'Self-directed learners filling specific skill gaps on a budget',
  pricingNote: 'Individual courses typically $10–$20 on sale · Udemy Business from $360/seat/year',
  description:
    "Udemy is the world's largest open online course marketplace, with 250,000+ courses across development, business, design, IT, marketing, and more — taught by independent instructors rather than institutions. Its defining characteristic is price: frequent sales bring most courses under $20 with lifetime access, making it the lowest-cost way to acquire a specific, well-defined skill. Worth noting: because any qualified instructor can publish on Udemy, content quality and depth vary significantly. Udemy certificates carry no employer recognition, making it best suited for practical skill acquisition rather than credential-building.",
  affiliateUrl: 'https://trk.udemy.com/KBZ0P9',
  affiliateLabel: 'Browse Udemy Courses',
  pros: [
    'Massive library of 250,000+ courses covering almost every technical, business, and creative topic',
    'Frequent sales bring most courses under $15–$20 — lifetime access included at that price',
    'Lifetime access means you can revisit content when a project actually demands the skill',
    'Breadth is unmatched for specific tool and technology learning: Python, Excel, Figma, AWS, and more',
    'Preview lectures available for every course so you can evaluate the instructor before buying',
  ],
  cons: [
    'No employer-recognised certification — Udemy certificates are completion records, not credentials',
    'Quality varies widely by instructor; filtering by top-rated is a necessary starting point, not a guarantee',
    'No structured curriculum paths — self-directed learners must assemble their own progression',
    'Udemy Business pricing ($360+/seat/year) is expensive relative to the individual course model',
  ],
  pricing: [
    { plan: 'Individual Course (on sale)', price: '$10–$20', bestFor: 'Learners who need one specific skill or tool — lifetime access included' },
    { plan: 'Individual Course (full price)', price: '$50–$200', bestFor: 'Rarely the right choice — sales occur almost weekly, so waiting costs nothing' },
    { plan: 'Udemy Business', price: 'From $360/seat/year', bestFor: 'Teams needing managed learning with admin reporting and curated content' },
  ],
  whoItsFor: [
    { type: 'Self-Directed Professionals', fit: 'Excellent', reason: 'Targeted courses for specific tools or frameworks — cheap, fast, and available for virtually any topic' },
    { type: 'Budget Learners', fit: 'Excellent', reason: 'Best per-dollar value in online learning when bought on sale; lifetime access adds long-term utility' },
    { type: 'Career Changers Seeking Credentials', fit: 'Poor', reason: 'Udemy certificates are not employer-recognised; Coursera Professional Certificates are the better path' },
    { type: 'Structured Curriculum Seekers', fit: 'Fair', reason: 'No guided learning paths by default — learners must curate their own course sequence' },
    { type: 'Teams & Organisations', fit: 'Good', reason: 'Udemy Business offers a curated catalog with admin controls, though cost per seat is higher than individual purchasing' },
  ],
  comparison: {
    dimensions: ['Course Depth', 'Certifications', 'Library Size', 'Free Access', 'Price (per course)', 'Lifetime Access'],
    products: [
      {
        name: 'Udemy',
        scores: ['Good', 'None (completion only)', '250,000+ courses', 'Preview only', '~$15 on sale', 'Yes'],
      },
      {
        name: 'Coursera',
        scores: ['Excellent', 'Excellent', '7,000+ (Plus)', 'Audit only', '$399/yr (Plus)', 'No (subscription)'],
      },
      {
        name: 'Skillshare',
        scores: ['Good', 'None', '~30,000 classes', 'Trial (1 month)', '$168/yr', 'No (subscription)'],
      },
    ],
  },
  verdict:
    "Udemy earns its 8.4 rating primarily on value and breadth. The 9.5 on Value reflects a genuine market reality: no other platform puts 250,000+ courses within reach for under $20 per topic, with lifetime access that means you can return when a project requires the skill. The 6.5 on Certification is not a flaw to work around — it is the platform's actual design. Udemy is a skill-acquisition tool, not a credential engine, and that distinction matters. For learners who come in with a specific, well-defined skill gap — a particular programming language, a software tool, a business framework — Udemy is often the fastest and cheapest way to close it. For anyone whose primary goal is an employer-recognised certificate, Coursera is the stronger choice. Use Udemy tactically, buy on sale, and you will rarely overpay for what you get.",
}

export default review
