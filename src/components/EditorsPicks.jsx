const picks = [
  {
    name: 'Claude AI',
    category: 'AI Tools',
    rating: '9.4',
    bestFor: 'Knowledge workers & writers',
    description:
      'A standout AI assistant for research, long-form writing, and complex reasoning — with a thoughtful, accurate output that holds up under real-world use.',
    badge: 'Top Pick',
    badgeColor: 'bg-violet-950/60 text-violet-400 border-violet-800/40',
  },
  {
    name: 'Hostinger',
    category: 'Hosting',
    rating: '8.9',
    bestFor: 'Side projects & small businesses',
    description:
      'Strong performance at a price point that makes sense for early-stage projects. Reliable uptime, clean dashboard, and no hidden cost surprises.',
    badge: 'Best Value',
    badgeColor: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40',
  },
  {
    name: 'NordVPN',
    category: 'VPN',
    rating: '9.1',
    bestFor: 'Remote workers & frequent travelers',
    description:
      'One of the most consistently reviewed VPNs for privacy and speed. Covers 60+ countries with a transparent no-logs policy and solid app experience.',
    badge: "Editors' Choice",
    badgeColor: 'bg-rose-950/60 text-rose-400 border-rose-800/40',
  },
  {
    name: 'Notion',
    category: 'Productivity',
    rating: '8.7',
    bestFor: 'Solo operators & small teams',
    description:
      'A flexible workspace that consolidates notes, tasks, wikis, and projects in one place. The learning curve pays off quickly for anyone who works in systems.',
    badge: 'Staff Pick',
    badgeColor: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/40',
  },
]

function StarIcon() {
  return (
    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ArrowIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export default function EditorsPicks() {
  return (
    <section className="py-24 bg-navy-850/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Curated by Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Editor's Picks</h2>
            <p className="text-slate-400 max-w-lg">
              Tools we've researched, compared, and stand behind — with clear context on who each one is best for.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            View all picks
            <ArrowIcon />
          </a>
        </div>

        <div id="picks" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {picks.map(({ name, category, rating, bestFor, description, badge, badgeColor }) => (
            <div
              key={name}
              className="group relative bg-navy-800 border border-white/[0.07] rounded-2xl p-6 flex flex-col hover:border-blue-600/30 hover:bg-navy-750 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

              {/* Badge */}
              <div className={`self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor} mb-5`}>
                {badge}
              </div>

              {/* Tool name */}
              <h3 className="text-xl font-bold text-white mb-1">{name}</h3>

              {/* Category + Rating */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-slate-500 font-medium">{category}</span>
                <span className="text-slate-700">·</span>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <span className="text-xs font-semibold text-amber-400">{rating}</span>
                </div>
              </div>

              {/* Best for */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">Best for</span>
                <span className="text-[11px] text-slate-400 font-medium">{bestFor}</span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                {description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500/50 hover:bg-blue-600/10 text-slate-300 hover:text-blue-400 text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200"
              >
                See Recommendation
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
