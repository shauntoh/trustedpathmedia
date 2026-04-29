import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

import aiToolsSideHustlers from '../../data/guides/ai-tools-side-hustlers'
import webHostingBeginners from '../../data/guides/web-hosting-beginners'
import vpnRemoteWorkers from '../../data/guides/vpn-remote-workers'
import productivityApps from '../../data/guides/productivity-apps'
import saasSmallTeams from '../../data/guides/saas-small-teams'
import onlineCoursesHighIncome from '../../data/guides/online-courses-high-income'

const allGuides = [
  aiToolsSideHustlers,
  webHostingBeginners,
  vpnRemoteWorkers,
  productivityApps,
  saasSmallTeams,
  onlineCoursesHighIncome,
]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10">
            <a href={url('/')} id="nav-guides-breadcrumb-home" className="hover:text-slate-300 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-300">Buying Guides</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Buying Guides</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Make the Right Call</h1>
            <p className="text-slate-400 max-w-xl">
              Practical guides that cut through the noise — so you only pay for what's worth it.
            </p>
          </div>

          {/* Guides grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allGuides.map((guide) => (
              <a
                key={guide.slug}
                href={url(`/guide/${guide.slug}`)}
                id={`content-guides-card-${guide.slug}`}
                className="group bg-navy-800/40 border border-white/[0.07] rounded-2xl p-6 hover:bg-navy-800/70 hover:border-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${guide.categoryColor} mb-4`}>
                    {guide.category}
                  </span>
                  <h2 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-blue-50 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{guide.intro}</p>
                </div>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-slate-600">{guide.readTime}</span>
                  <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Read Guide
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
