import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { url } from '../lib/url'

const toolsLinks = [
  { label: 'AI Tools', href: '/category/ai-tools' },
  { label: 'Hosting', href: '/category/hosting' },
  { label: 'VPN', href: '/category/vpn' },
  { label: 'SaaS', href: '/category/saas' },
  { label: 'Courses', href: '/category/courses' },
  { label: 'Productivity', href: '/category/productivity' },
]

const topLinks = [
  { label: 'Guides', href: '/guides' },
  { label: 'Playbooks', href: '/playbooks' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false)
  const toolsRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setIsToolsOpen(false)
      }
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsToolsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleToolsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsToolsOpen(true)
  }

  const handleToolsLeave = () => {
    closeTimer.current = setTimeout(() => setIsToolsOpen(false), 120)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href={url('/')} className="flex items-center gap-2.5 group shrink-0">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px] tracking-tight">
              Tool<span className="text-blue-400">Nav</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">

            {/* Tools dropdown */}
            <div
              className="relative"
              ref={toolsRef}
              onMouseEnter={handleToolsEnter}
              onMouseLeave={handleToolsLeave}
            >
              <button
                type="button"
                onClick={() => setIsToolsOpen((v) => !v)}
                className="flex items-center gap-1 text-slate-400 hover:text-white text-sm px-3.5 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
              >
                Tools
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isToolsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-navy-900 border border-white/[0.06] rounded-xl shadow-xl shadow-black/40 py-2">
                  {toolsLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={url(href)}
                      className="block text-slate-400 hover:text-white text-sm px-4 py-2 hover:bg-white/[0.05] transition-all duration-200"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="my-2 border-t border-white/[0.06]" />
                  <a
                    href={url('/reviews')}
                    className="block text-slate-300 hover:text-white text-sm px-4 py-2 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    See all reviews
                  </a>
                </div>
              )}
            </div>

            {topLinks.map(({ label, href }) => (
              <a
                key={label}
                href={url(href)}
                className="text-slate-400 hover:text-white text-sm px-3.5 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={url('/')}
              className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-200"
            >
              Newsletter
            </a>
            <a
              href={url('/reviews')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20"
            >
              See Top Picks
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/[0.06]">
          <div className="px-4 py-4 space-y-1">

            {/* Mobile Tools collapsible */}
            <button
              type="button"
              onClick={() => setIsMobileToolsOpen((v) => !v)}
              className="w-full flex items-center justify-between text-slate-400 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
              aria-expanded={isMobileToolsOpen}
            >
              <span>Tools</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isMobileToolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMobileToolsOpen && (
              <div className="pl-3 space-y-1 border-l border-white/[0.06] ml-3">
                {toolsLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={url(href)}
                    className="block text-slate-400 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={url('/reviews')}
                  className="block text-slate-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  See all reviews
                </a>
              </div>
            )}

            {topLinks.map(({ label, href }) => (
              <a
                key={label}
                href={url(href)}
                className="block text-slate-400 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}

            <div className="pt-3 space-y-2 border-t border-white/[0.06] mt-3">
              <a
                href={url('/')}
                className="block text-slate-300 text-sm py-2.5 px-4 rounded-lg border border-white/10 text-center hover:bg-white/[0.05] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join Newsletter
              </a>
              <a
                href={url('/reviews')}
                className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg text-center transition-all"
                onClick={() => setIsOpen(false)}
              >
                See Top Picks
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
