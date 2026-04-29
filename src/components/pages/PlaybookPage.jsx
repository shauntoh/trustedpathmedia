import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

function ArrowIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

function renderBody(body) {
  const paragraphs = body.split(/\n\n+/)
  return paragraphs.map((p, i) => (
    <p key={i} className="text-slate-400 text-base leading-relaxed mb-4 last:mb-0">
      {renderInline(p)}
    </p>
  ))
}

function MetaPill({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">{label}</span>
      <span className="text-sm text-slate-300">{value}</span>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/[0.07] rounded-xl bg-navy-800/40 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1">
          <p className="text-sm text-slate-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function PlaybookPage({ playbook }) {
  if (!playbook) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <p className="text-slate-400">Playbook not found.</p>
      </div>
    )
  }

  const {
    title,
    tagline,
    category,
    categoryColor,
    goal,
    earningPotential,
    difficulty,
    timeRequired,
    toolsUsed,
    steps,
    faq,
    verdict,
  } = playbook

  return (
    <div className="page-enter min-h-screen bg-navy-900">
      <Nav />

      <main className="pt-24">

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
            <span>/</span>
            <a href={url('/playbooks')} className="hover:text-slate-300 transition-colors">Playbooks</a>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-[220px] sm:max-w-none">{title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-0 w-[600px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-10">
            <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColor} mb-5`}>
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {tagline}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-white/[0.05]">
              <MetaPill label="Goal" value={goal.length > 60 ? goal.slice(0, 60) + '…' : goal} />
              <MetaPill label="Difficulty" value={difficulty} />
              <MetaPill label="Time" value={timeRequired} />
              <MetaPill label="Earning Potential" value={earningPotential} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Tools you'll need */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Tools you'll need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {toolsUsed.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-navy-800/40 border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div>
                    <h3 className="text-base font-semibold text-white">{tool.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{tool.role}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                    {tool.reviewSlug && (
                      <a
                        href={url(`/review/${tool.reviewSlug}`)}
                        className="text-blue-400 text-xs font-semibold hover:underline underline-offset-2"
                      >
                        Read review →
                      </a>
                    )}
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      Try {tool.name}
                      <ArrowIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Steps */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-8">
              The Playbook — {steps.length} steps
            </h2>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-navy-800/40 border border-white/[0.07] rounded-2xl p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-400 tabular-nums">#{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight pt-1">{step.title}</h3>
                  </div>
                  <div className="pl-0 sm:pl-14">
                    {renderBody(step.body)}
                    {step.tip && (
                      <div className="mt-5 bg-amber-950/20 border border-amber-900/20 rounded-xl p-4">
                        <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-2">Tip</p>
                        <p className="text-sm text-slate-300 leading-relaxed">{renderInline(step.tip)}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* FAQ */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-6">FAQ</h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Verdict */}
        <section className="py-14 bg-navy-850/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-800/40 border border-white/[0.07] rounded-2xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Bottom Line</p>
              <h2 className="text-2xl font-bold text-white mb-4">Our Verdict</h2>
              <p className="text-slate-400 leading-relaxed text-base">{verdict}</p>
              <p className="text-xs text-slate-600 mt-6 pt-6 border-t border-white/[0.05]">
                <span className="text-slate-500 font-medium">Affiliate Disclosure:</span>{' '}
                ToolNav earns a commission from qualifying purchases made through links on this page. This does not affect our editorial rankings or recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Tools recap */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Tools used in this playbook</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {toolsUsed.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group bg-navy-800/40 border border-white/[0.07] rounded-xl p-5 hover:border-blue-600/20 transition-all duration-300 flex flex-col gap-2"
                >
                  <span className="text-[10px] uppercase tracking-widest text-slate-600">{tool.role}</span>
                  <span className="text-base font-semibold text-white">{tool.name}</span>
                  <span className="text-blue-400 text-xs font-semibold inline-flex items-center gap-1.5 mt-2 group-hover:gap-2.5 transition-all">
                    Try {tool.name}
                    <ArrowIcon className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
