const articles = [
  {
    category: 'AI Tools',
    title: 'Best AI Tools for Side Hustlers in 2025',
    description:
      'The AI tools that genuinely move the needle for freelancers, creators, and one-person businesses — ranked by real-world value, not hype.',
    readTime: '8 min read',
    badgeColor: 'text-violet-400 bg-violet-950/50 border-violet-800/30',
    featured: true,
    href: '#/guide/ai-tools-side-hustlers',
  },
  {
    category: 'Hosting',
    title: 'Best Web Hosting for Beginners',
    description:
      'How to choose the right host for your first site — without overpaying, getting locked into the wrong plan, or wading through sales jargon.',
    readTime: '6 min read',
    badgeColor: 'text-emerald-400 bg-emerald-950/50 border-emerald-800/30',
    featured: false,
    href: '#/guide/web-hosting-beginners',
  },
  {
    category: 'VPN',
    title: 'Best VPNs for Remote Workers & Travelers',
    description:
      'Which VPNs hold up on hotel networks, airport WiFi, and international connections — compared on speed, privacy policy, and app quality.',
    readTime: '7 min read',
    badgeColor: 'text-rose-400 bg-rose-950/50 border-rose-800/30',
    featured: false,
    href: '#/guide/vpn-remote-workers',
  },
  {
    category: 'Productivity',
    title: 'Best Productivity Apps Worth Paying For',
    description:
      'The tools that justify their subscription every month — assessed on whether they save meaningful time and actually get used.',
    readTime: '9 min read',
    badgeColor: 'text-cyan-400 bg-cyan-950/50 border-cyan-800/30',
    featured: false,
    href: '#/guide/productivity-apps',
  },
  {
    category: 'SaaS',
    title: 'Best SaaS Tools for Small Teams',
    description:
      'High-leverage platforms that let small teams punch above their weight — without bloated feature sets or enterprise pricing.',
    readTime: '7 min read',
    badgeColor: 'text-blue-400 bg-blue-950/50 border-blue-800/30',
    featured: false,
    href: '#/guide/saas-small-teams',
  },
  {
    category: 'Courses',
    title: 'Best Online Courses for High-Income Skills',
    description:
      'Courses worth the investment — focused on skills with clear career or income upside, not just credentials.',
    readTime: '5 min read',
    badgeColor: 'text-amber-400 bg-amber-950/50 border-amber-800/30',
    featured: false,
    href: '#/guide/online-courses-high-income',
  },
]

function ArrowIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function ArticleCard({ article }) {
  const { category, title, description, readTime, badgeColor, featured, href } = article

  if (featured) {
    return (
      <a
        href={href}
        className="group col-span-1 sm:col-span-2 bg-navy-800/60 border border-white/[0.07] rounded-2xl p-8 hover:bg-navy-800 hover:border-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between min-h-[230px]"
      >
        <div>
          <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor} mb-5`}>
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white leading-snug mb-3 group-hover:text-blue-50 transition-colors max-w-lg">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.05]">
          <span className="text-xs text-slate-500">{readTime}</span>
          <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            Read the Guide
            <ArrowIcon />
          </span>
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      className="group bg-navy-800/40 border border-white/[0.07] rounded-2xl p-6 hover:bg-navy-800/70 hover:border-blue-600/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col justify-between"
    >
      <div>
        <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor} mb-4`}>
          {category}
        </span>
        <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-blue-50 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]">
        <span className="text-xs text-slate-600">{readTime}</span>
        <ArrowIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200" />
      </div>
    </a>
  )
}

export default function BestOf() {
  return (
    <section className="py-24 bg-navy-850/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Buying Guides</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Make the Right Call</h2>
            <p className="text-slate-400">Practical guides that cut through the noise — so you only pay for what's worth it.</p>
          </div>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            View all guides
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
