import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">About</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">About ToolNav</h1>

          <div className="space-y-10 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Who We Are</h2>
              <p>
                Most &quot;review&quot; sites are marketing departments with a byline. Rankings are auctioned, affiliate
                deals shape the editorial angle, and the top result usually belongs to whoever paid the most to
                be there.
              </p>
              <p className="mt-3">
                ToolNav exists because that model is broken for readers.
              </p>
              <p className="mt-3">
                We are an independent media site covering AI tools, hosting, SaaS, VPN, online courses, and
                productivity software — built for professionals who are buying these tools with real money and
                real deadlines. We don&apos;t accept paid placements. We don&apos;t take vendor sponsorships. No one can
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
                We compare within categories, not in isolation — because &quot;good&quot; only means something relative
                to the alternatives at that price. We publish weaknesses. If a tool has a meaningful
                limitation, it&apos;s in the review.
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
                We do not accept: sponsored posts, paid reviews, vendor-funded placements, or &quot;partnerships&quot;
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
