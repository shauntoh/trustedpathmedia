import { Search, ShieldCheck, Award, Eye } from 'lucide-react'

const pillars = [
  {
    icon: Search,
    title: 'Independently Tested',
    description:
      'We pay for and personally test every tool before recommending it. No free access in exchange for coverage, no shortcuts.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-950/40',
  },
  {
    icon: ShieldCheck,
    title: 'No Paid Rankings',
    description:
      'Our rankings are determined entirely by performance, value, and reliability. Advertisers and vendors have zero influence on our picks.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-950/40',
  },
  {
    icon: Award,
    title: 'Expert Curated',
    description:
      'Every category is reviewed by specialists with real hands-on experience. We write for practitioners, not browsers.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-950/40',
  },
  {
    icon: Eye,
    title: 'Fully Transparent',
    description:
      'We earn commissions through affiliate links to fund our work. Every relationship is clearly disclosed — no hidden arrangements, ever.',
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built on Transparency</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            In a world of sponsored "best of" lists, we do things differently. Our editorial
            independence is the product — and we guard it carefully.
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
