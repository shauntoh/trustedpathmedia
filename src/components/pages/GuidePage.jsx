import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'
import { guideLinks, reviewMeta } from '../../data/links'

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function ArrowIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function RankBadge({ rank }) {
  return (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
      <span className="text-sm font-bold text-blue-400 tabular-nums">#{rank}</span>
    </div>
  )
}

function PickCard({ pick }) {
  const { rank, name, tagline, bestFor, pros, con, affiliateUrl } = pick

  return (
    <div className="bg-navy-800/40 border border-white/[0.07] rounded-2xl p-7 hover:border-blue-600/20 transition-all duration-300">
      <div className="flex items-start gap-4 mb-5">
        <RankBadge rank={rank} />
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-white leading-tight mb-1">{name}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{tagline}</p>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">Best for</p>
        <p className="text-sm text-blue-400">{bestFor}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Pros */}
        <div className="bg-emerald-950/20 border border-emerald-900/20 rounded-xl p-4">
          <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-3">Strengths</p>
          <ul className="space-y-2.5">
            {pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckIcon />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Con */}
        <div className="bg-rose-950/20 border border-rose-900/20 rounded-xl p-4">
          <p className="text-[10px] uppercase tracking-widest text-rose-500 mb-3">Limitation</p>
          <div className="flex items-start gap-2.5 text-sm text-slate-300">
            <svg className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span>{con}</span>
          </div>
        </div>
      </div>

      <a
        href={affiliateUrl}
        id={`affiliate-guide-deal-${name.toLowerCase().replace(/\s+/g, '-')}`}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
      >
        See Deal
        <ArrowIcon />
      </a>
    </div>
  )
}

export default function GuidePage({ guide }) {
  if (!guide) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <p className="text-slate-400">Guide not found.</p>
      </div>
    )
  }

  const { slug, title, category, categoryColor, readTime, intro, picks, verdict, lastUpdated } = guide

  const links = guideLinks[slug] || {}
  const relatedReviewList = (links.relatedReviews || []).map(r => reviewMeta[r]).filter(Boolean)

  function formatDate(iso) {
    if (!iso) return null
    const [year, month, day] = iso.split('-')
    return new Date(Number(year), Number(month) - 1, Number(day))
      .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="page-enter min-h-screen bg-navy-900">
      <Nav />

      <main className="pt-24">

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <a href={url('/')} id="nav-guide-breadcrumb-home" className="hover:text-slate-300 transition-colors">Home</a>
            <span>/</span>
            <span className={categoryColor.split(' ')[0]}>{category}</span>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-[220px] sm:max-w-none">{title}</span>
          </nav>
        </div>

        {/* Guide Hero */}
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
            <p className="text-slate-400 text-base leading-relaxed mb-5 max-w-2xl">
              {intro}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
              </div>
              {lastUpdated && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                  </svg>
                  <span>Last updated: <span className="text-slate-500">{formatDate(lastUpdated)}</span></span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Picks */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-8">
              Our Top Picks — {picks.length} tools evaluated
            </h2>
            <div className="space-y-5">
              {picks.map((pick) => (
                <PickCard key={pick.rank} pick={pick} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Related Full Reviews */}
        {relatedReviewList.length > 0 && (
          <section className="py-10 bg-navy-850/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-5">Full Reviews</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedReviewList.map((review) => (
                  <a
                    key={review.slug}
                    href={url(`/review/${review.slug}`)}
                    id={`nav-guide-related-review-${review.slug}`}
                    className="group flex items-center gap-3 bg-navy-800/40 border border-white/[0.06] hover:border-violet-600/30 rounded-xl p-4 transition-all duration-200"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-600/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors truncate">{review.name}</p>
                      <p className="text-xs text-slate-500">Full Review →</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

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

      </main>

      <Footer />
    </div>
  )
}
