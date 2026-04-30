const playbook = {
  slug: 'learn-a-skill-with-udemy',
  title: 'Go from zero to job-ready in a new skill using Udemy + Claude',
  tagline: 'A repeatable system for closing specific skill gaps fast — course selection, structured study, and a portfolio project to show for it.',
  category: 'Learning',
  categoryColor: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
  goal: 'Identify a trending, in-demand skill, learn it fast with the right Udemy course, and walk away with a portfolio project that proves you have it.',
  earningPotential: 'Skill-dependent · directly increases billable rate or employability',
  difficulty: 'Beginner',
  timeRequired: '1–3 weeks',
  publishedAt: '2026-04-30',
  toolsUsed: [
    {
      name: 'Udemy',
      role: 'Course library for targeted skill acquisition',
      reviewSlug: 'udemy',
      affiliateUrl: 'https://trk.udemy.com/KBZ0P9',
    },
    {
      name: 'Claude AI',
      role: 'Study companion, concept explainer, and project brief generator',
      reviewSlug: 'claude-ai',
      affiliateUrl: 'https://claude.ai',
    },
  ],
  steps: [
    {
      title: 'Define the exact skill gap you are closing',
      body: "Before you open Udemy, write one sentence that completes this prompt: *\"I need to be able to [do X] so that I can [outcome].\"* For example: \"I need to be able to build REST APIs in Python so that I can take on freelance backend work.\" This sentence is your filter for everything that follows — course selection, what you prioritise watching, and what you build. Vague goals produce vague skills. Claude is useful here: paste your job description, a client brief, or a list of tools you keep seeing in job postings, and ask it to identify the three or four core skills you're actually missing.",
      tip: 'If you can name the skill in two words (e.g. "Excel pivot tables", "React hooks", "SQL joins"), you are specific enough to find a course.',
    },
    {
      title: 'Find the right course — and filter ruthlessly',
      body: "Search Udemy for your skill. You will get dozens of results. Filter to **4.5 stars and above**, sort by **Most Reviewed**, and ignore anything with fewer than 1,000 ratings — small review counts don't give you a reliable signal. Read the last 20 reviews, not the best ones; recent reviews reflect the current state of the content. Check the \"Last updated\" date — anything more than two years old for a technical skill is suspect. Watch the first free preview lecture: if the audio quality or pacing is off, move on. You're looking for a course where the instructor is clear, the exercises are hands-on, and the content matches the exact skill gap you defined in Step 1.",
      tip: 'Udemy runs sitewide sales constantly — if the course is full price, wait a day or two. You will almost never pay more than $15–$20.',
    },
    {
      title: 'Set up a structured study schedule before you start',
      body: "The single biggest reason people abandon online courses is starting without a plan. Before you watch lecture one, open your calendar and block the study time. A one-week intensive at 90 minutes/day works better than a passive \"I'll fit it in\" approach. Set a hard deadline for finishing the course — typically one to two weeks for a focused skill. Tell Claude your skill goal, the course length (in hours), and your available daily time, and ask it to generate a day-by-day completion schedule. This takes two minutes and gives you a concrete commitment instead of a vague intention.",
      tip: 'Studying at the same time each day — even 45 minutes — beats long sporadic sessions every time.',
    },
    {
      title: 'Use Claude as your study companion while you learn',
      body: "Don't passively watch — actively test your understanding. After each section, open Claude and explain what you just learned in plain language. If you can't explain it simply, you haven't learned it yet. Use Claude to go deeper on anything that didn't fully click: \"I just learned about [concept X] in [skill Y]. I understand the basics but I'm not clear on [specific part] — can you explain it differently and give me a small example?\" Claude is also useful for generating practice problems tailored to your level, and for previewing what real-world use cases look like for each concept before you encounter them in the course.",
      tip: 'The \"explain it to me like I\'m applying it in a real project\" prompt reliably produces more useful explanations than textbook definitions.',
    },
    {
      title: 'Do every exercise — skip the theory-only lectures if needed',
      body: "Hands-on exercises are where the skill actually forms. If a section is pure theory with no practical component, watch it at 1.5x speed and move on. If there is a coding exercise, a design task, or a working file to complete — do it before watching the solution. Struggling through a problem without immediately seeing the answer is where retention actually happens. If you get stuck, use Claude to get hints rather than spoilers: \"I'm trying to [do X] and my current approach is [Y] — what am I missing?\" rather than \"give me the answer.\"",
      tip: null,
    },
    {
      title: 'Build one portfolio project using the skill',
      body: "The course teaches you the skill. The portfolio project proves you have it. Once you finish the course, ask Claude to generate three project brief ideas that are achievable in 3–5 days given your new skill level and match a real use case an employer or client would recognise. Pick one, build it, and document it — a short README, a few screenshots, or a short Loom walkthrough. GitHub is the standard for technical projects; a Notion page or PDF works for non-technical skills. The project doesn't need to be impressive. It needs to demonstrate that you can apply the skill to a real problem, not just follow along with a tutorial.",
      tip: 'Ask Claude: "I just completed a [course name] on [skill]. Give me 3 portfolio project ideas that a hiring manager in [target role] would find credible." Pick the one that excites you most.',
    },
    {
      title: 'Apply and iterate — the skill compounds over time',
      body: "One course gets you to functional. What gets you to proficient is applying the skill on real work and hitting problems the course didn't cover. Start using the skill immediately — even in small ways. Freelance platforms, side projects, open source contributions, and internal tools at your current job are all valid. Each time you hit a wall, the research and problem-solving deepens the skill faster than any course. If you want to go deeper, Udemy often has intermediate and advanced courses on the same topic — and with lifetime access, your first purchase already gave you a base to return to.",
      tip: null,
    },
  ],
  faq: [
    {
      question: 'How do I know if a Udemy course is actually good?',
      answer: "Filter to 4.5 stars and above, sort by Most Reviewed, and read the most recent 20 reviews rather than the highlighted ones. Recent reviews reflect the current state of the course — older courses in fast-moving technical areas (especially software development) can have outdated content even if their overall rating is high. Watch the first free preview lecture before buying: audio quality, pacing, and whether the instructor actually explains or just reads slides will tell you most of what you need to know in five minutes.",
    },
    {
      question: "Is a Udemy certificate worth anything?",
      answer: "Not in the credential sense — Udemy certificates are completion records, not employer-recognised qualifications. They will not carry weight the way a Google Career Certificate on Coursera or a university degree does. What matters is the skill and the portfolio project you build from it. The certificate is a minor addition to your LinkedIn profile at best; the work you can demonstrate is the real signal.",
    },
    {
      question: 'How much should I pay for a Udemy course?',
      answer: "Almost never more than $15–$20. Udemy runs sitewide sales constantly — often several times a month. If a course you want is showing at full price ($50–$200), wait a day or two and check back. You can also find active discount codes easily via a quick search. Buying at full price is rarely necessary.",
    },
    {
      question: "How is Claude actually useful for learning — isn't it just a search engine?",
      answer: "Claude is more useful than search for learning because it explains in context. Instead of returning links you have to evaluate, it can work through a concept with you, generate examples tailored to your specific situation, produce practice problems at exactly your level, and give you hints when you're stuck without just handing you the answer. The key is to use it actively — ask it to explain things differently when the course explanation doesn't click, and use it to test your understanding after each section by trying to explain what you learned back to it.",
    },
    {
      question: 'How long does it actually take to become job-ready with this approach?',
      answer: "Depends heavily on the skill. For a focused, well-scoped skill (a specific programming language, a software tool, a business framework), a serious one-to-three week push through a quality course plus one portfolio project is often enough to reach a level that opens freelance or entry-level opportunities. More complex or broad skills — full-stack development, data science, product management — require more time and more than one course. The honest answer: you can reach \"good enough to get paid\" faster than most people expect if you follow a structured approach, but \"expert\" takes months to years of applied work.",
    },
  ],
  verdict:
    "Udemy's value proposition is straightforward: 250,000+ courses, most available for under $20 on sale, with lifetime access. The platform will not hand you credentials that impress hiring managers, and the quality ceiling varies by instructor — but for closing a specific, well-defined skill gap as fast and cheaply as possible, it is hard to beat. The system in this playbook — define the gap, pick the right course, use Claude as a study companion, build one real project — is what separates learners who finish and apply their skills from those who complete a course and promptly forget it. The course gets you the knowledge. The project proves you have it.",
}

export default playbook
