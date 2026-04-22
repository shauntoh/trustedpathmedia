import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────────────────────

const topPicks = [
  {
    rank: '01',
    name: 'Claude AI',
    badge: 'Top Pick',
    badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
    accentGlow: 'via-violet-600/40',
    hoverBorder: 'hover:border-violet-600/30',
    bestFor: 'Deep thinking & long-form work',
    description:
      'Ideal for writing, research, and structured reasoning. Consistently produces accurate, nuanced output — particularly strong for professionals who need reliable, long-context responses without shortcuts.',
    rating: '9.4',
    pricing: 'Free · Pro $20/mo',
    cta: 'View Recommendation',
    href: '#',
  },
  {
    rank: '02',
    name: 'ChatGPT',
    badge: 'Best All-Rounder',
    badgeColor: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40',
    accentGlow: 'via-emerald-600/40',
    hoverBorder: 'hover:border-emerald-600/30',
    bestFor: 'General use & versatility',
    description:
      'The most versatile AI assistant available. Excellent for writing, coding, brainstorming, and everyday tasks. The free tier is genuinely useful — the Plus subscription unlocks one of the best AI experiences available.',
    rating: '9.1',
    pricing: 'Free · Plus $20/mo',
    cta: 'View Recommendation',
    href: '#',
  },
  {
    rank: '03',
    name: 'Notion AI',
    badge: 'Best for Productivity',
    badgeColor: 'bg-blue-950/60 text-blue-400 border-blue-800/40',
    accentGlow: 'via-blue-600/40',
    hoverBorder: 'hover:border-blue-600/30',
    bestFor: 'Productivity & workflow automation',
    description:
      'AI built directly into your workspace. Best for teams and solo operators already in Notion — it handles writing assistance, summarization, and template auto-fill without switching context.',
    rating: '8.6',
    pricing: 'Add-on $10/mo',
    cta: 'View Recommendation',
    href: '#',
  },
]

const comparisonRows = [
  {
    tool: 'Claude AI',
    bestFor: 'Writing & deep reasoning',
    pricing: 'Free + $20/mo',
    recommendation: 'Top Pick',
    recColor: 'text-violet-400',
  },
  {
    tool: 'ChatGPT',
    bestFor: 'General AI use',
    pricing: 'Free + $20/mo',
    recommendation: 'Very Strong',
    recColor: 'text-emerald-400',
  },
  {
    tool: 'Notion AI',
    bestFor: 'Productivity workflows',
    pricing: 'Add-on $10/mo',
    recommendation: 'Best for Workflow',
    recColor: 'text-blue-400',
  },
]

const chooseGuide = [
  {
    condition: 'You want the best all-around AI',
    pick: 'ChatGPT',
    reason:
      'Most versatile, largest ecosystem, strong free tier. Best starting point for anyone new to AI or with varied use cases.',
    pickColor: 'text-emerald-400',
    bgColor: 'bg-emerald-950/30',
    hoverBorder: 'hover:border-emerald-500/30',
  },
  {
    condition: 'You do deep, focused work',
    pick: 'Claude AI',
    reason:
      'Exceptional for long documents, research, and complex reasoning. Fewer errors on nuanced tasks — better for professional output.',
    pickColor: 'text-violet-400',
    bgColor: 'bg-violet-950/30',
    hoverBorder: 'hover:border-violet-500/30',
  },
  {
    condition: 'You live in your productivity stack',
    pick: 'Notion AI',
    reason:
      'If you already use Notion, the AI layer removes friction. Summarize notes, generate drafts, fill templates — without switching tools.',
    pickColor: 'text-blue-400',
    bgColor: 'bg-blue-950/30',
    hoverBorder: 'hover:border-blue-500/30',
  },
]

const faqs = [
  {
    question: 'What is the best AI tool right now?',
    answer:
      "It depends on your use case. For deep work, writing, and reasoning, Claude AI is currently one of the strongest options. For general-purpose use and versatility, ChatGPT remains the most widely capable all-rounder. For productivity inside a document workspace, Notion AI is hard to beat.",
  },
  {
    question: 'Are paid AI tools worth it?',
    answer:
      'For most professionals, yes. The paid tiers of Claude and ChatGPT unlock faster responses, larger context windows, and access to more capable models. If you use AI tools regularly for work, the $20/month cost typically pays for itself in time saved within the first week.',
  },
  {
    question: 'Which AI tool should beginners use?',
    answer:
      "ChatGPT is the most beginner-friendly option — it has the largest user base, the most community resources, and a genuinely useful free tier. If you're focused on writing or professional work, Claude AI is also highly accessible and worth trying from day one.",
  },
]

// ── Sub-components ───────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-navy-800/40 border border-white/[0.07] rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-white text-sm">{question}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/[0.05]">
          <p className="text-slate-400 text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function BestAITools() {
  return (
    <main className="bg-navy-900">

      {/* ── A: Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900 pt-28 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 right-0 w-[700px] h-[600px] bg-violet-600/[0.06] rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-900/[0.08] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-600 mb-8">
            <Link to="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Best AI Tools</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-950/50 border border-violet-800/30 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-violet-400 text-xs font-medium tracking-widest uppercase">2026 Edition · AI Tools</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight max-w-3xl mb-5">
            Best AI Tools Worth Paying For{' '}
            <span className="text-slate-600">(2026)</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            We researched and curated the best AI tools to help you save time, work smarter,
            and grow faster. No fluff, no hype — only tools that deliver real value.
          </p>
        </div>
      </section>

      {/* ── B: Top Picks ───────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Top Picks</p>
            <h2 className="text-3xl font-bold text-white mb-2">The AI Tools We Recommend</h2>
            <p className="text-slate-400 text-sm">Ranked by real-world value for professionals and ambitious users.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {topPicks.map(({ rank, name, badge, badgeColor, accentGlow, hoverBorder, bestFor, description, rating, pricing, cta, href }) => (
              <div
                key={name}
                className={`group relative bg-navy-800 border border-white/[0.07] rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-navy-750 hover:shadow-2xl hover:shadow-black/40 ${hoverBorder}`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${accentGlow} to-transparent`} />

                {/* Rank + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-white/[0.07] tabular-nums leading-none select-none">{rank}</span>
                  <div className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}`}>
                    {badge}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3>

                {/* Best for */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">Best for</span>
                  <span className="text-[11px] text-slate-400 font-medium">{bestFor}</span>
                </div>

                {/* Rating + Pricing */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="text-xs font-semibold text-amber-400">{rating}</span>
                  </div>
                  <span className="text-slate-700">·</span>
                  <span className="text-xs text-slate-500">{pricing}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">{description}</p>

                {/* CTA */}
                <a
                  href={href}
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-violet-500/50 hover:bg-violet-600/10 text-slate-300 hover:text-violet-400 text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200"
                >
                  {cta}
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C: Comparison Table ────────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">Quick Comparison</p>
            <h2 className="text-3xl font-bold text-white">Side-by-Side Breakdown</h2>
          </div>

          <div className="bg-navy-800/50 border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[560px]">
                {/* Header */}
                <div className="grid grid-cols-4 px-6 py-4 border-b border-white/[0.07] bg-navy-800/60">
                  {['Tool', 'Best For', 'Pricing', 'Our Take'].map((h) => (
                    <span key={h} className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{h}</span>
                  ))}
                </div>

                {/* Rows */}
                {comparisonRows.map(({ tool, bestFor, pricing, recommendation, recColor }, i) => (
                  <div
                    key={tool}
                    className={`grid grid-cols-4 px-6 py-5 items-center hover:bg-white/[0.02] transition-colors ${i < comparisonRows.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
                  >
                    <span className="font-semibold text-white text-sm">{tool}</span>
                    <span className="text-slate-400 text-sm">{bestFor}</span>
                    <span className="text-slate-400 text-sm">{pricing}</span>
                    <span className={`text-sm font-semibold ${recColor}`}>{recommendation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── D: How to Choose ───────────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">Decision Guide</p>
            <h2 className="text-3xl font-bold text-white mb-3">How to Choose the Right AI Tool</h2>
            <p className="text-slate-400 max-w-xl">Not every AI tool is right for every person. Here's how to match the tool to the job.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {chooseGuide.map(({ condition, pick, reason, pickColor, bgColor, hoverBorder }) => (
              <div
                key={pick}
                className={`bg-navy-800/40 border border-white/[0.07] rounded-2xl p-6 ${hoverBorder} hover:bg-navy-800/70 transition-all duration-300`}
              >
                <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest mb-3">If…</p>
                <p className="text-slate-300 text-sm leading-snug mb-5">"{condition}"</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${bgColor} border border-white/[0.05] mb-4`}>
                  <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">Go with</span>
                  <span className={`text-sm font-bold ${pickColor}`}>{pick}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E: FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── F: CTA Block ───────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-navy-800/50 border border-white/[0.07] rounded-3xl px-8 py-16 sm:px-14 text-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/[0.07] rounded-full blur-[100px]" />
            </div>

            <div className="relative">
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">Ready to Start</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Try the Tools. See What Works.
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
                All three have free tiers — the best way to find your fit is to try them.
                Upgrade when the value is obvious.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/25 hover:-translate-y-0.5"
                >
                  Try Claude
                </a>
                <a
                  href="#"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-700/25 hover:-translate-y-0.5"
                >
                  Try ChatGPT
                </a>
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/25 hover:-translate-y-0.5"
                >
                  Try Notion AI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
