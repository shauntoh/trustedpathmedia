import { Search, ShieldCheck, Award, Eye } from 'lucide-react'

const pillars = [
  {
    icon: Search,
    title: 'Editorially Independent',
    description:
      'Our picks are based on independent research, publicly available data, and real-world use cases — not free access deals or vendor relationships.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-950/40',
  },
  {
    icon: ShieldCheck,
    title: 'No Paid Rankings',
    description:
      'We don\'t accept payment to rank or feature tools. Recommendations reflect value, reliability, and fit for the intended audience — nothing else.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-950/40',
  },
  {
    icon: Award,
    title: 'Practical Focus',
    description:
      'Every recommendation states clearly who it\'s best for and why — with enough context to know if it fits before you commit.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-950/40',
  },
  {
    icon: Eye,
    title: 'Affiliate Transparent',
    description:
      'We earn commissions through affiliate links, which funds this work. Every relationship is clearly disclosed. Our opinions are always our own.',
    color: 'text-violet-400',
    bgColor: 'bg-violet-950/40',
  },
]

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-navy-900 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Why Trust Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Most "best of" lists are paid placements. Ours aren't. Here's the approach
            we take to keep our recommendations worth reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, title, description, color, bgColor }) => (
            <div
              key={title}
              className="bg-navy-800/40 border border-white/[0.06] rounded-2xl p-7 hover:bg-navy-800/70 hover:border-white/10 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${bgColor} flex items-center justify-center mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
