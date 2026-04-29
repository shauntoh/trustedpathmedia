export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">

      {/* Atmospheric glow layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 right-0 w-[900px] h-[700px] bg-blue-600/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-[600px] h-[600px] bg-blue-900/[0.12] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] bg-slate-800/30 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-800/30 rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 text-xs font-medium tracking-widest uppercase">Independent Reviews</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mb-6">
          Trusted digital tools{' '}
          <span className="text-gradient">worth paying for.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Honest picks across AI tools, hosting, SaaS, VPNs, courses, and productivity
          software. No paid placements. No filler. Just tools that hold up under use.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#picks"
            id="cta-hero-see-top-picks"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
          >
            See Top Picks
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#newsletter"
            id="cta-hero-join-newsletter"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
          >
            Join Newsletter
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/[0.06]">
          {[
            { value: 'Every Tool', label: 'Independently Tested' },
            { value: '100%', label: 'Independent' },
            { value: '$0', label: 'Paid Rankings' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-bold text-white tabular-nums">{value}</span>
              <span className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
