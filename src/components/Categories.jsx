import { Brain, Server, LayoutGrid, Shield, GraduationCap, Zap } from 'lucide-react'

const categories = [
  {
    name: 'AI Tools',
    description: 'LLMs, assistants & automation',
    icon: Brain,
    label: 'Top Picks',
    color: 'text-violet-400',
    bgColor: 'bg-violet-950/50',
    hoverBorder: 'hover:border-violet-500/30',
  },
  {
    name: 'Hosting',
    description: 'Servers, cloud & infrastructure',
    icon: Server,
    label: 'Best Value',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-950/50',
    hoverBorder: 'hover:border-emerald-500/30',
  },
  {
    name: 'SaaS',
    description: 'Apps, platforms & services',
    icon: LayoutGrid,
    label: 'Editor Curated',
    color: 'text-blue-400',
    bgColor: 'bg-blue-950/50',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    name: 'VPN',
    description: 'Privacy, security & access',
    icon: Shield,
    label: 'Trusted Picks',
    color: 'text-rose-400',
    bgColor: 'bg-rose-950/50',
    hoverBorder: 'hover:border-rose-500/30',
  },
  {
    name: 'Courses',
    description: 'Skills, training & education',
    icon: GraduationCap,
    label: 'Worth Paying For',
    color: 'text-amber-400',
    bgColor: 'bg-amber-950/50',
    hoverBorder: 'hover:border-amber-500/30',
  },
  {
    name: 'Productivity',
    description: 'Focus, workflow & output',
    icon: Zap,
    label: 'Worth Paying For',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-950/50',
    hoverBorder: 'hover:border-cyan-500/30',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-navy-900 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">What We Recommend</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Six Categories. Only the Best.</h2>
          <p className="text-slate-400 max-w-xl">
            Focused on the tools that genuinely move the needle — curated to help you spend smarter.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map(({ name, description, icon: Icon, label, color, bgColor, hoverBorder }) => (
            <a
              key={name}
              href="#"
              className={`group relative bg-navy-800/50 border border-white/[0.07] rounded-2xl p-5 transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${hoverBorder}`}
            >
              <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className="font-semibold text-white text-sm mb-0.5">{name}</p>
              <p className="text-[11px] text-slate-500 leading-snug mb-2 hidden sm:block">{description}</p>
              <p className={`text-[11px] font-medium ${color}`}>{label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
