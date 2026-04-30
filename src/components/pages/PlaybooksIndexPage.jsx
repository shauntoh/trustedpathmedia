import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

import releaseSong from '../../data/playbooks/release-a-song-with-suno'
import sideProject from '../../data/playbooks/launch-a-side-project-with-ai'
import learnSkillUdemy from '../../data/playbooks/learn-a-skill-with-udemy'

const allPlaybooks = [releaseSong, sideProject, learnSkillUdemy]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export default function PlaybooksIndexPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-10">
            <a href={url('/')} id="nav-playbooks-breadcrumb-home" className="hover:text-slate-300 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-300">Playbooks</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Playbooks</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Playbooks</h1>
            <p className="text-slate-400 max-w-xl">
              Multi-tool workflows that ship real outcomes — built from tools we actually use.
            </p>
          </div>

          {/* Playbooks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allPlaybooks.map((playbook) => (
              <a
                key={playbook.slug}
                href={url(`/playbook/${playbook.slug}`)}
                id={`content-playbooks-card-${playbook.slug}`}
                className="group bg-navy-800/40 border border-white/[0.07] rounded-2xl p-6 hover:bg-navy-800/70 hover:border-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-flex text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${playbook.categoryColor} mb-4`}>
                    {playbook.category}
                  </span>
                  <h2 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-blue-50 transition-colors">
                    {playbook.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {playbook.tagline}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 mb-4">
                    <span>{playbook.difficulty}</span>
                    <span className="text-slate-700">·</span>
                    <span>{playbook.timeRequired}</span>
                    <span className="text-slate-700">·</span>
                    <span>{playbook.toolsUsed.length} tools</span>
                  </div>

                  {/* Tools chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {playbook.toolsUsed.map((tool) => (
                      <span
                        key={tool.name}
                        className="text-[10px] font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-slate-600">{playbook.timeRequired}</span>
                  <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Read playbook
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
