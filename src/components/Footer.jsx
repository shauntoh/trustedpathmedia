import { url } from '../lib/url'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: 'mailto:contact@trustedpathmedia.com' },
    { label: 'Affiliate Disclosure', href: '/disclosure' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  Categories: [
    { label: 'AI Tools', href: '/category/ai-tools' },
    { label: 'Hosting', href: '/category/hosting' },
    { label: 'SaaS', href: '/category/saas' },
    { label: 'VPN', href: '/category/vpn' },
    { label: 'Courses', href: '/category/courses' },
    { label: 'Productivity', href: '/category/productivity' },
  ],
  Guides: [
    { label: 'Best AI Tools', href: '/guide/ai-tools-side-hustlers' },
    { label: 'Best Hosting', href: '/guide/web-hosting-beginners' },
    { label: 'Best VPNs', href: '/guide/vpn-remote-workers' },
    { label: 'Best for Side Hustlers', href: '/guide/ai-tools-side-hustlers' },
    { label: 'Best SaaS for Teams', href: '/guide/saas-small-teams' },
  ],
}

// mailto links should not get the base prefix
function resolveHref(href) {
  if (href.startsWith('mailto:')) return href
  return url(href)
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-[15px] tracking-tight">
                TrustedPath<span className="text-blue-400">Media</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              No paid rankings. No sponsored placements. Just independent reviews
              of digital tools that are worth your money.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed">
              © {new Date().getFullYear()} TrustedPathMedia.<br />All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-slate-300 font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={resolveHref(href)}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
            <span className="text-slate-500 font-medium">Affiliate Disclosure:</span> TrustedPathMedia earns commissions
            from qualifying purchases made through links on this site. This does not affect our editorial rankings or recommendations.
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <a href={url('/privacy')} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy</a>
            <a href={url('/terms')} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms</a>
            <a href="mailto:contact@trustedpathmedia.com" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
