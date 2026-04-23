import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description: 'TrustedPathMedia is an independent digital tool review site. No paid rankings. No vendor deals. Just honest research.',
  })

  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href="#" className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">About</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">About TrustedPathMedia</h1>

          <div className="space-y-10 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Who We Are</h2>
              <p>
                Most "review" sites are marketing departments with a byline. Rankings are auctioned, affiliate
                deals shape the editorial angle, and the top result usually belongs to whoever paid the most to
                be there.
              </p>
              <p className="mt-3">
                TrustedPathMedia exists because that model is broken for readers.
              </p>
              <p className="mt-3">
                We are an independent media site covering AI tools, hosting, SaaS, VPN, online courses, and
                productivity software — built for professionals who are buying these tools with real money and
                real deadlines. We don't accept paid placements. We don't take vendor sponsorships. No one can
                buy a position in our rankings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Review</h2>
              <p>
                We start with the product, not the pitch deck. Every review begins with independent research:
                pricing tiers read line by line, feature claims stress-tested against real workflows, user
                complaints sourced from public forums and documentation gaps we found ourselves.
              </p>
              <p className="mt-3">
                We compare within categories, not in isolation — because "good" only means something relative
                to the alternatives at that price. We publish weaknesses. If a tool has a meaningful
                limitation, it's in the review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Make Money</h2>
              <p>
                When you click a link on this site and purchase a product, we earn a commission. The price you
                pay is identical whether you use our link or go direct — the vendor pays the commission from
                their margin, not yours.
              </p>
              <p className="mt-3">
                We do not accept: sponsored posts, paid reviews, vendor-funded placements, or "partnerships"
                that give any company editorial influence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Our Standards</h2>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>Rankings are based on research merit. Commission rates do not affect them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>We disclose affiliate relationships clearly on every page where affiliate links appear.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>Pros and cons are both published. A glowing review with no downsides is not a review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>When a product changes materially — pricing, features, terms — we update the review.</span>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
