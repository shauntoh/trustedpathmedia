import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const script = document.createElement('script')
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
    script.async = true
    script.setAttribute('data-beehiiv-form', 'a34ba540-0dfd-4213-95a3-1a85260a5a6a')
    containerRef.current.appendChild(script)
  }, [])

  return (
    <section id="newsletter" className="py-24 bg-navy-900 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-800/50 border border-white/[0.07] rounded-3xl px-8 py-16 sm:px-16 text-center overflow-hidden">

          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.07] rounded-full blur-[100px]" />
          </div>

          <div className="relative">
            {/* Icon */}
            <div className="w-14 h-14 bg-blue-950/60 border border-blue-800/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>

            {/* Label */}
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">The AI Hustle Playbook Newsletter</p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get the curated shortlist.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              A curated playbook of AI tools and strategies for building income streams.
            </p>

            {/* Beehiiv embed */}
            <div ref={containerRef} className="max-w-md mx-auto" />

            <p className="text-slate-600 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
