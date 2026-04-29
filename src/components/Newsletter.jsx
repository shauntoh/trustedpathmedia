import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

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
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">Weekly Digest</p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get the curated shortlist.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              The no-fluff digest for professionals who want better tools, not more noise. Delivered weekly.
            </p>

            {/* Form or confirmation */}
            {submitted ? (
              <div className="inline-flex items-center gap-3 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 px-6 py-4 rounded-xl">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium text-sm">You're on the list. Watch your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  id="newsletter-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-navy-900 border border-white/10 focus:border-blue-500/60 focus:outline-none text-white placeholder-slate-600 text-sm px-4 py-3 rounded-xl transition-colors"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-slate-600 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
