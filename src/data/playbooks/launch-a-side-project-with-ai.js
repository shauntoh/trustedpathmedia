const playbook = {
  slug: 'launch-a-side-project-with-ai',
  title: 'Launch a side project landing page in a weekend with Claude + n8n + Hostinger',
  tagline: 'Validate an idea by shipping a real landing page, email capture, and welcome automation — in one weekend.',
  category: 'Side Project',
  categoryColor: 'text-blue-400 bg-blue-950/50 border-blue-800/30',
  goal: 'Go from a rough side-project idea to a live landing page with a working email capture, a welcome email, and a Slack notification on every signup — all in a single weekend.',
  earningPotential: 'Validation, not revenue · sets up future paid offerings once demand is proven',
  difficulty: 'Intermediate',
  timeRequired: '4–8 hours',
  publishedAt: '2026-04-29',
  toolsUsed: [
    {
      name: 'Claude AI',
      role: 'Idea shaping, copywriting, and landing-page planning',
      reviewSlug: 'claude-ai',
      affiliateUrl: 'https://claude.ai',
    },
    {
      name: 'n8n',
      role: 'Automation workflows for signup events',
      reviewSlug: 'n8n',
      affiliateUrl: 'https://n8n.io',
    },
    {
      name: 'Hostinger',
      role: 'Domain registration and static hosting',
      reviewSlug: 'hostinger',
      affiliateUrl: 'https://www.hostinger.com',
    },
  ],
  steps: [
    {
      title: 'Pressure-test the idea with Claude',
      body: 'Before you write a line of code, open Claude and run a 20-minute conversation. Describe the idea in plain language: who it serves, the painful problem it solves, and the *narrowest* version of the product that would still be useful. Ask Claude to play three roles in order — a skeptical investor, the target user, and a competitor. Capture the sharpest objections. The goal is not to get a green light, it\'s to surface the assumption your weekend will actually test. Most landing-page experiments succeed or fail on whether you picked the right wedge.',
      tip: 'Ask Claude: "What would have to be true for this to be a 10/10 idea? What would make it a 3/10?" The contrast is more useful than either answer alone.',
    },
    {
      title: 'Draft the landing copy with Claude',
      body: 'Give Claude the answers from step 1 and ask it to draft a five-section landing page: **headline**, **subheadline**, **one-line value prop**, **3 benefit bullets**, and **a single email-capture CTA**. Iterate three times. The first draft will be too clever; the second will be too generic. The third — once you\'ve told Claude exactly which lines feel off — usually lands. Keep it short. A landing page that fits on a laptop screen without scrolling converts better than a long-form page when you\'re still validating.',
      tip: 'Avoid superlatives ("amazing," "revolutionary"). Specifics convert.',
    },
    {
      title: 'Buy a domain and set up hosting on Hostinger',
      body: 'Open Hostinger and pick a **.com or .io domain** that\'s short and memorable — even a slightly awkward name beats a long descriptive one. Hostinger\'s shared hosting is overkill for a static landing page, but it includes a free domain on annual plans, which is the actual win. If you prefer something leaner, use Hostinger\'s Website Builder for a fully drag-and-drop static page. Either way, you can ship a real domain for under $30 in year one.',
      tip: 'Skip the upsells (paid SSL, premium DNS) — Hostinger includes the basics and you don\'t need more for a landing page.',
    },
    {
      title: 'Deploy a static landing page',
      body: 'You have two reasonable options. **Option A:** use Hostinger\'s Website Builder, drop in your Claude-drafted copy, add an email-capture block, and publish. Fastest path. **Option B:** if you\'re comfortable with code, paste your copy into a single-file HTML template (Tailwind via CDN keeps it tidy), upload via FTP or hPanel\'s file manager, and connect the domain. Either approach is a 30–60 minute task once the copy is locked. Avoid spending the weekend tweaking design — your landing page will look fine.',
      tip: null,
    },
    {
      title: 'Wire the email capture to a real list',
      body: 'You need a place for emails to actually go. The fastest options: **ConvertKit** (free up to 1,000 subscribers), **Beehiiv**, or a simple **Google Sheet** via Tally or Formspree. Connect your form to one of these — most accept a webhook or direct integration. Test the flow end-to-end with your own email before moving on. A capture form that silently drops emails is worse than no form at all.',
      tip: 'Use a real email address you check. The first 5 signups are gold for follow-up conversations.',
    },
    {
      title: 'Set up n8n with two workflows: welcome email + Slack ping',
      body: 'Sign up for n8n Cloud (or self-host if you prefer). Create your first workflow with a **Webhook trigger** — that webhook is what your form will POST to on signup. Add two parallel branches: (1) an **email node** that sends a personal-feeling welcome message ("Hey, I\'m [you] — saw you signed up. What made you click?"), and (2) a **Slack node** that pings your personal Slack with the new email and any other form data. The welcome email is what converts a curious signup into a real conversation. The Slack ping is what keeps you motivated when signups trickle in.',
      tip: 'Send the welcome from your real email, not a no-reply. Replies are the whole point.',
    },
    {
      title: 'Soft-launch and watch what happens',
      body: 'Share the link in 2–3 places where your target audience genuinely hangs out — a niche subreddit, a relevant Discord, a small group chat, your own LinkedIn or X. Don\'t blast it everywhere. Watch the signups roll in over 48 hours, then **email every single signup personally** within a day. The landing page metric that matters is not visits or signups — it\'s how many people reply to your welcome email. That\'s your validation signal.',
      tip: 'If fewer than 10% of signups reply to a personal welcome, the wedge is probably off — go back to step 1.',
    },
  ],
  faq: [
    {
      question: 'Why use n8n instead of Zapier or Make?',
      answer: 'All three work fine for this. n8n stands out on cost (free self-hosted tier, generous cloud free tier), node coverage for technical workflows, and the ability to run custom JavaScript when you need it. If you\'re already paying for Zapier, stay there — the choice doesn\'t matter much for two-step workflows like this.',
    },
    {
      question: 'Do I need a custom domain, or is a Vercel/Netlify subdomain enough?',
      answer: 'For a quick test among friends, a free subdomain works. For anything you plan to share more broadly or keep around, a custom domain on Hostinger ($10–15/yr) signals seriousness and protects you if you switch hosts later. The .com still carries weight in 2026.',
    },
    {
      question: 'How many signups counts as validation?',
      answer: 'There\'s no universal number. A useful rule of thumb: 50+ signups from a single channel where 20%+ reply substantively to your welcome email is a real signal. 500 signups with no replies is a vanity metric. Quality of conversation beats quantity of email addresses every time.',
    },
    {
      question: 'Can I skip n8n and just use the email tool\'s built-in autoresponder?',
      answer: 'Yes — and it\'s a reasonable shortcut. The reason to use n8n is that you\'ll likely add more steps later (CRM sync, AI-drafted personalized replies, lead scoring). Building the workflow once gives you a foundation for the next iteration.',
    },
    {
      question: 'What if I want to charge money on day one?',
      answer: 'You can — add a Stripe Payment Link to the page in place of the email capture. But a paid landing page tests willingness to pay, which is a different (and harder) signal than interest. For most ideas, capturing emails first and selling to that list once you\'ve had real conversations is a more reliable path.',
    },
  ],
  verdict:
    'A landing page in a weekend is not the goal — the goal is the conversations it starts. Claude shapes the idea and the copy, Hostinger gets you a real domain cheaply, and n8n turns every signup into a feedback loop instead of a number on a dashboard. Ship it rough, talk to the first 10 humans who reply, and let what you hear shape what you build next.',
}

export default playbook
