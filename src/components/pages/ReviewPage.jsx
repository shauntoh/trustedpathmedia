import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

const fitColors = {
  Excellent: 'text-emerald-400 bg-emerald-950/50 border-emerald-800/30',
  Good: 'text-blue-400 bg-blue-950/50 border-blue-800/30',
  Fair: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
  Poor: 'text-rose-400 bg-rose-950/50 border-rose-800/30',
}

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating / 2 >= i
        const half = !filled && rating / 2 >= i - 0.5
        return (
          <svg key={i} className={`w-4 h-4 ${filled || half ? 'text-amber-400' : 'text-slate-700'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      })}
    </div>
  )
}

function RatingBar({ label, score }) {
  const pct = (score / 10) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-slate-400">{label}</span>
        <span className="text-sm font-semibold text-white tabular-nums">{score.toFixed(1)}</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function ReviewPage({ review }) {
  if (!review) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <p className="text-slate-400">Review not found.</p>
      </div>
    )
  }

  const {
    name, tagline, category, categoryColor, badge, badgeColor,
    rating, ratingBreakdown, bestFor, pricingNote, description,
    affiliateUrl, affiliateLabel, pros, cons, pricing,
    whoItsFor, comparison, verdict,
  } = review

  return (
    <div className="min-h-screen bg-navy-900">
      <Nav />

      <main className="pt-24">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
            <span>/</span>
            <span className={categoryColor.split(' ')[0]}>{category}</span>
            <span>/</span>
            <span className="text-slate-300">{name}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-0 w-[700px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="max-w-3xl">
              <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColor} mb-5`}>
                {category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-3">
                {name}
              </h1>
              <p className="text-xl text-slate-400 mb-6">{tagline}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <StarRow rating={rating} />
                  <span className="text-lg font-bold text-amber-400 tabular-nums">{rating}</span>
                  <span className="text-slate-600 text-sm">/10</span>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}`}>
                  {badge}
                </span>
                <span className="text-sm text-slate-500">Best for: <span className="text-slate-300">{bestFor}</span></span>
              </div>

              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-2xl">{description}</p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
                >
                  {affiliateLabel}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="text-xs text-slate-600">
                  We may earn a commission via this link — at no cost to you.{' '}
                  <a href="#disclosure" className="underline hover:text-slate-400 transition-colors">Disclosure</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <div className="border-t border-white/[0.05] bg-navy-850/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { label: 'Our Rating', value: `${rating}/10` },
                { label: 'Pricing', value: pricingNote },
                { label: 'Best For', value: bestFor },
                { label: 'Category', value: category },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <section className="py-16 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Pros &amp; Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-6">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-5">What works</p>
                <ul className="space-y-3">
                  {pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-950/20 border border-rose-900/30 rounded-2xl p-6">
                <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-5">What doesn't</p>
                <ul className="space-y-3">
                  {cons.map((con) => (
                    <li key={con} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-16 border-t border-white/[0.04] bg-navy-850/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-xs uppercase tracking-widest text-slate-500 pb-3 pr-8">Plan</th>
                    <th className="text-left text-xs uppercase tracking-widest text-slate-500 pb-3 pr-8">Price</th>
                    <th className="text-left text-xs uppercase tracking-widest text-slate-500 pb-3">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {pricing.map(({ plan, price, bestFor: pBestFor }) => (
                    <tr key={plan}>
                      <td className="py-4 pr-8 font-medium text-white">{plan}</td>
                      <td className="py-4 pr-8 text-slate-300 tabular-nums">{price}</td>
                      <td className="py-4 text-slate-500">{pBestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Who It&apos;s For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoItsFor.map(({ type, fit, reason }) => (
                <div key={type} className="bg-navy-800/40 border border-white/[0.06] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white text-sm">{type}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${fitColors[fit]}`}>
                      {fit}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 border-t border-white/[0.04] bg-navy-850/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">How It Compares</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-xs uppercase tracking-widest text-slate-500 pb-3 pr-8 min-w-[160px]">Dimension</th>
                    {comparison.products.map((p) => (
                      <th key={p.name} className={`text-left text-xs uppercase tracking-widest pb-3 pr-6 min-w-[140px] ${p.name === name ? 'text-blue-400' : 'text-slate-500'}`}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {comparison.dimensions.map((dim, i) => (
                    <tr key={dim}>
                      <td className="py-4 pr-8 text-slate-400">{dim}</td>
                      {comparison.products.map((p) => (
                        <td key={p.name} className={`py-4 pr-6 ${p.name === name ? 'text-white font-medium' : 'text-slate-400'}`}>
                          {p.scores[i]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="py-16 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Rating breakdown */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white mb-2">Our Rating</h2>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-white tabular-nums">{rating}</span>
                  <span className="text-slate-500 text-lg mb-1">/10</span>
                </div>
                <div className="space-y-4">
                  {Object.entries(ratingBreakdown).map(([label, score]) => (
                    <RatingBar key={label} label={label} score={score} />
                  ))}
                </div>
              </div>

              {/* Verdict text + CTA */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-5">Our Verdict</h2>
                <p className="text-slate-400 leading-relaxed mb-8">{verdict}</p>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
                >
                  {affiliateLabel}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="text-xs text-slate-600 mt-3" id="disclosure">
                  <span className="text-slate-500 font-medium">Affiliate Disclosure:</span> ToolNav earns a commission from qualifying purchases made through links on this page. This does not affect our editorial rating or recommendation.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
