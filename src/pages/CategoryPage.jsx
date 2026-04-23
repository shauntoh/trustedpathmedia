import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'
import claudeAi from '../data/reviews/claude-ai'
import hostinger from '../data/reviews/hostinger'
import nordvpn from '../data/reviews/nordvpn'
import notion from '../data/reviews/notion'
import { Star } from 'lucide-react'

const allReviews = [claudeAi, hostinger, nordvpn, notion]

const categoryColorMap = {
  'AI Tools':     { text: 'text-violet-400',  bg: 'bg-violet-950/50' },
  'Hosting':      { text: 'text-emerald-400', bg: 'bg-emerald-950/50' },
  'SaaS':         { text: 'text-blue-400',    bg: 'bg-blue-950/50' },
  'VPN':          { text: 'text-rose-400',    bg: 'bg-rose-950/50' },
  'Courses':      { text: 'text-amber-400',   bg: 'bg-amber-950/50' },
  'Productivity': { text: 'text-cyan-400',    bg: 'bg-cyan-950/50' },
}

const categoryDescriptors = {
  'AI Tools':     'Independent reviews of AI writing, coding, research, and automation tools — ranked by actual output quality, not marketing claims.',
  'Hosting':      'Web hosting and cloud platform comparisons covering real uptime data, pricing traps, and which providers hold up when traffic spikes.',
  'SaaS':         'Honest assessments of business software across CRM, analytics, finance, and operations — with a hard look at where the pricing stops making sense.',
  'VPN':          'Privacy and security analysis of VPN providers — jurisdiction, logging policies, and the gap between advertised and tested speeds.',
  'Courses':      'Vetted online courses and learning platforms evaluated on curriculum depth, instructor credibility, and whether the skills transfer to real work.',
  'Productivity': 'Tools that reduce friction in how you work — task management, focus, note-taking, and automation — reviewed for professionals who actually use them daily.',
}

export default function CategoryPage({ category }) {
  usePageMeta({
    title: category ? `Best ${category} Tools` : 'Category',
    description: `Independent reviews and top picks for ${category || 'digital'} tools — ranked by real-world value.`,
  })

  const reviews = allReviews.filter(r => r.category === category)
  const colors = categoryColorMap[category] || { text: 'text-blue-400', bg: 'bg-blue-950/50' }
  const descriptor = categoryDescriptors[category] || 'Curated picks in this category.'

  return (
    <div className="page-enter min-h-screen bg-navy-950 text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} border border-white/[0.07] mb-6`}>
          <span className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}>
            {category}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Best{' '}
          <span className={colors.text}>{category}</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">{descriptor}</p>
      </section>

      {/* Reviews grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div
                key={review.slug}
                className="bg-navy-800 border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${review.badgeColor}`}>
                    {review.badge}
                  </span>
                  {/* Rating */}
                  <span className="flex items-center gap-1 text-sm font-semibold text-white">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {review.rating}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{review.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{review.bestFor}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-4">
                  {review.description}
                </p>

                {/* CTA */}
                <a
                  href={`#/review/${review.slug}`}
                  className={`mt-auto text-sm font-semibold ${colors.text} hover:underline underline-offset-2 transition-colors`}
                >
                  Read Review →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">More picks coming soon.</p>
            <p className="text-slate-600 text-sm mt-2">We're testing tools in this category — check back shortly.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
