import { useState, useMemo } from 'react'
import { Star } from 'lucide-react'
import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'
import claudeAi from '../../data/reviews/claude-ai'
import hostinger from '../../data/reviews/hostinger'
import nordvpn from '../../data/reviews/nordvpn'
import notion from '../../data/reviews/notion'
import grammarly from '../../data/reviews/grammarly'
import suno from '../../data/reviews/suno'
import coursera from '../../data/reviews/coursera'
import skillshare from '../../data/reviews/skillshare'
import udemy from '../../data/reviews/udemy'
import n8n from '../../data/reviews/n8n'

const allReviews = [
  claudeAi,
  hostinger,
  nordvpn,
  notion,
  grammarly,
  suno,
  coursera,
  skillshare,
  udemy,
  n8n,
].map((r, i) => ({ ...r, _order: i }))

const categories = ['All', 'AI Tools', 'Hosting', 'VPN', 'SaaS', 'Courses', 'Productivity']

const categoryColorMap = {
  'AI Tools':     'text-violet-400',
  'Hosting':      'text-emerald-400',
  'SaaS':         'text-blue-400',
  'VPN':          'text-rose-400',
  'Courses':      'text-amber-400',
  'Productivity': 'text-cyan-400',
}

export default function AllReviewsPage() {
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('rating')

  const visible = useMemo(() => {
    const filtered = filter === 'All' ? allReviews : allReviews.filter(r => r.category === filter)
    const sorted = [...filtered]
    if (sort === 'rating') {
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    } else if (sort === 'recent') {
      sorted.sort((a, b) => b._order - a._order)
    } else if (sort === 'az') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    }
    return sorted
  }, [filter, sort])

  return (
    <div className="page-enter min-h-screen bg-navy-950 text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/30 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">All Reviews</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">All Reviews</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Every tool we've independently reviewed — ranked, rated, and honest.
        </p>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  type="button"
                  id={`filter-allreviews-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setFilter(cat)}
                  className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                    active
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-navy-800/50 border-white/[0.07] text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="allreviews-sort-select" className="text-xs uppercase tracking-widest text-slate-500">Sort</label>
            <select
              id="allreviews-sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-navy-800 border border-white/[0.07] text-slate-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500"
            >
              <option value="rating">Highest rated</option>
              <option value="recent">Recently added</option>
              <option value="az">A–Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((review) => {
              const catColor = categoryColorMap[review.category] || 'text-blue-400'
              return (
                <div
                  key={review.slug}
                  className="bg-navy-800 border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${review.categoryColor}`}>
                      {review.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-white">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {review.rating}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{review.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{review.bestFor}</p>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-4">
                    {review.tagline}
                  </p>

                  <a
                    href={url(`/review/${review.slug}`)}
                    id={`content-allreviews-card-${review.slug}`}
                    className={`mt-auto text-sm font-semibold ${catColor} hover:underline underline-offset-2 transition-colors`}
                  >
                    Read review →
                  </a>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No reviews match this filter yet.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
