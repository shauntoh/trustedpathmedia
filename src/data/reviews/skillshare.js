const review = {
  slug: 'skillshare',
  name: 'Skillshare',
  lastUpdated: '2026-05-07',
  tagline: 'Project-based creative learning for curious professionals.',
  category: 'Courses',
  categoryColor: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-amber-950/60 text-amber-400 border-amber-800/40',
  rating: 8.2,
  ratingBreakdown: {
    Content: 8.4,
    Instructors: 8.0,
    Value: 8.8,
    UX: 8.5,
    Certification: 6.8,
  },
  bestFor: 'Creatives, freelancers & side-project builders',
  pricingNote: '1-month free trial · Membership from $167.88/year (~$14/month)',
  description:
    'Skillshare is a subscription-based learning platform built around short, project-driven classes taught by working practitioners in creative, design, business, and technology fields. Unlike university-partnered platforms, Skillshare\'s strength is its practitioner-led content — courses are taught by designers, illustrators, photographers, marketers, and entrepreneurs who share real workflows rather than academic curricula. Worth noting: Skillshare does not offer accredited certificates, which makes it a poor fit for learners seeking credentials recognised by employers or academic institutions.',
  affiliateUrl: 'https://www.skillshare.com',
  affiliateLabel: 'Try Skillshare',
  pros: [
    'Flat annual membership ($167.88/year) unlocks the full library — no per-course fees',
    'Short, project-based class format makes it easy to learn by doing and build a portfolio alongside',
    'Taught by working practitioners — designers, illustrators, entrepreneurs — sharing real-world workflows',
    'Broad creative library covering illustration, graphic design, photography, video, writing, and freelance business',
    'Generous one-month free trial gives meaningful time to explore before committing',
  ],
  cons: [
    'Skillshare does not offer accredited certificates — learners seeking employer-recognised credentials should consider a complementary platform',
    'Content quality and depth can vary across instructors, as the platform is open to independent teachers',
    'The platform skews toward creative disciplines; coverage of technical or professional fields is less extensive than dedicated platforms',
    'Without a clear curriculum path, learners who prefer structured progression may need to self-direct more than they expect',
  ],
  pricing: [
    { plan: 'Free Trial', price: '1 month free', bestFor: 'New users wanting to explore the full library before committing' },
    { plan: 'Annual Membership', price: '$167.88/year (~$13.99/month)', bestFor: 'Regular learners who want the best value per class' },
    { plan: 'Monthly (app stores)', price: '~$32/month', bestFor: 'Short-term learners or those who prefer flexible billing' },
    { plan: 'Teams', price: '$159/seat/year', bestFor: 'Teams of 2+ wanting shared learning with admin oversight' },
  ],
  whoItsFor: [
    { type: 'Designers & Illustrators', fit: 'Excellent', reason: 'Deep library of hands-on creative courses taught by working designers with real portfolio outcomes' },
    { type: 'Freelancers & Side-Project Builders', fit: 'Excellent', reason: 'Practical, workflow-focused content for building marketable skills without a long-form commitment' },
    { type: 'Marketing & Content Creators', fit: 'Good', reason: 'Strong courses on copywriting, social media, video, and brand — practical over academic' },
    { type: 'Career Changers Seeking Credentials', fit: 'Poor', reason: 'No accredited certificates; Coursera or LinkedIn Learning better serve credential-focused learners' },
    { type: 'Technical Learners (data, dev)', fit: 'Fair', reason: 'Some programming and analytics courses exist, but the library is thinner than dedicated tech platforms' },
  ],
  comparison: {
    dimensions: ['Course Depth', 'Certifications', 'Creative Content', 'Free Access', 'Practitioner-Led', 'Price (annual)'],
    products: [
      {
        name: 'Skillshare',
        scores: ['Good', 'None', 'Excellent', 'Trial (1 month)', 'Yes', '$168/yr'],
      },
      {
        name: 'Coursera',
        scores: ['Excellent', 'Excellent', 'Limited', 'Audit only', 'Mixed', '$399/yr (Plus)'],
      },
      {
        name: 'MasterClass',
        scores: ['Good', 'None', 'Excellent', 'No', 'Yes (celebrity instructors)', '$120/yr'],
      },
    ],
  },
  verdict:
    'Skillshare earns its 8.2 rating by delivering genuine value for creative and practical learners at a price that makes the full library accessible. The 8.8 on Value reflects just how affordable $167.88 per year is for unlimited access — and the one-month free trial is long enough to complete two or three courses and genuinely evaluate fit. The 6.8 on Certification is not a criticism of the platform\'s purpose; Skillshare is deliberately practitioner-led rather than credential-driven, and it excels in that lane. Where it falls short is for learners who need employer-recognised qualifications or highly structured technical programmes. For designers, illustrators, freelancers, content creators, and curious professionals who learn best by making something, Skillshare is one of the best-value learning platforms available.',
}

export default review
