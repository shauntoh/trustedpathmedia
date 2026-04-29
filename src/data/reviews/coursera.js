const review = {
  slug: 'coursera',
  name: 'Coursera',
  tagline: 'University-quality learning, online and on your schedule.',
  category: 'Courses',
  categoryColor: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
  badge: 'Top Pick',
  badgeColor: 'bg-amber-950/60 text-amber-400 border-amber-800/40',
  rating: 8.9,
  ratingBreakdown: {
    Content: 9.4,
    Instructors: 9.2,
    Value: 8.5,
    UX: 8.8,
    Certification: 9.0,
  },
  bestFor: 'Career changers, professionals & lifelong learners',
  pricingNote: 'Free auditing available · Coursera Plus from $59/month or $399/year',
  description:
    'Coursera is one of the world\'s largest online learning platforms, offering courses, Specializations, Professional Certificates, and accredited degrees from 300+ leading universities and companies including Google, IBM, Stanford, and Meta. Its depth of structured, credential-backed content sets it apart from project-based platforms — especially for learners who want verified qualifications for their resume or LinkedIn profile. Worth noting: graded assignments and certificates on most courses require a paid subscription, and the breadth of content means quality can vary across providers.',
  affiliateUrl: 'https://www.coursera.org',
  affiliateLabel: 'Try Coursera',
  pros: [
    'Partners with 300+ world-class universities and companies — including Google, IBM, Stanford, and Meta',
    'Coursera Plus unlocks 7,000+ courses and Specializations for one flat annual fee',
    'Accredited online degrees available at a fraction of on-campus tuition costs',
    'Professional Certificate programs are designed with hiring outcomes in mind — Google and Meta certificates are widely recognised',
    'Free course auditing lets learners explore content before committing to a paid plan',
  ],
  cons: [
    'Graded assignments and shareable certificates require a paid subscription or individual course purchase to unlock',
    'Course quality can vary across partner institutions — some offerings are more polished than others',
    'The volume of available content can make it hard to identify the best path without guidance',
    'Degree programmes require separate enrolment and fees not covered by Coursera Plus',
  ],
  pricing: [
    { plan: 'Free (Audit)', price: '$0', bestFor: 'Exploring course content without a certificate' },
    { plan: 'Individual Course', price: '$49–$99 (one-time)', bestFor: 'Learners who need one specific certificate' },
    { plan: 'Coursera Plus Monthly', price: '$59/month', bestFor: 'Short-term intensive learners with a 7-day free trial' },
    { plan: 'Coursera Plus Annual', price: '$399/year (~$33/month)', bestFor: 'Consistent learners who want the best per-course value' },
    { plan: 'Degrees', price: 'Varies by programme', bestFor: 'Learners seeking accredited bachelor\'s or master\'s credentials' },
  ],
  whoItsFor: [
    { type: 'Career Changers', fit: 'Excellent', reason: 'Professional Certificates from Google, IBM, and Meta are hiring-recognised pathways into tech roles' },
    { type: 'Working Professionals', fit: 'Excellent', reason: 'Structured learning with real credentials to show on a resume or LinkedIn profile' },
    { type: 'University Students', fit: 'Good', reason: 'Supplements formal study with courses from top institutions; degrees cost extra' },
    { type: 'Lifelong Learners', fit: 'Good', reason: 'Free auditing and breadth of topics support curiosity-driven learning without financial commitment' },
    { type: 'Casual Learners', fit: 'Fair', reason: 'Coursera\'s structured, assessment-heavy format suits goal-oriented learners more than those browsing for fun' },
  ],
  comparison: {
    dimensions: ['Course Depth', 'Certifications', 'University Partners', 'Free Access', 'Creative Content', 'Price (annual)'],
    products: [
      {
        name: 'Coursera',
        scores: ['Excellent', 'Excellent', 'Yes (300+)', 'Audit only', 'Limited', '$399/yr (Plus)'],
      },
      {
        name: 'Skillshare',
        scores: ['Good', 'None', 'No', 'Trial only', 'Excellent', '$168/yr'],
      },
      {
        name: 'LinkedIn Learning',
        scores: ['Good', 'Good', 'No', 'Trial only', 'Good', '$239/yr'],
      },
    ],
  },
  verdict:
    'Coursera earns its 8.9 rating by doing something rare in online learning: backing its courses with genuine institutional credibility. The 9.4 on Content reflects the depth and rigour of university-partnered curricula, while the 9.0 on Certification reflects how seriously hiring managers treat Google, Meta, and IBM Professional Certificates. Coursera Plus at $399 per year is strong value for anyone pursuing more than one or two credentials — and free auditing means there\'s no cost to evaluate whether a course is worth it before committing. A few things to keep in mind: graded assignments require a paid plan, and the sheer volume of content means new learners benefit from coming in with a clear goal. For career changers, professionals building credentials, or anyone who wants structured learning backed by recognisable names, Coursera is the strongest platform available.',
}

export default review
