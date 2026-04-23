import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'AI Tools', href: '#/category/ai-tools' },
  { label: 'Hosting', href: '#/category/hosting' },
  { label: 'VPN', href: '#/category/vpn' },
  { label: 'Buying Guides', href: '#/guides' },
  { label: 'About', href: '#/about' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px] tracking-tight">
              TrustedPath<span className="text-blue-400">Media</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-white text-sm px-3.5 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-200"
            >
              Newsletter
            </a>
            <a
              href="#"
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
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-slate-400 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-white/[0.06] mt-3">
              <a
                href="#"
                className="block text-slate-300 text-sm py-2.5 px-4 rounded-lg border border-white/10 text-center hover:bg-white/[0.05] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join Newsletter
              </a>
              <a
                href="#"
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
