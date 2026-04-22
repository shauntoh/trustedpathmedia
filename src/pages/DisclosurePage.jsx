import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href="/#" className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Affiliate Disclosure</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Affiliate Disclosure</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Affiliate Participation</h2>
              <p>
                TrustedPathMedia participates in affiliate marketing programs. We earn commissions from qualifying
                purchases made through links on this site. These commissions come at no additional cost to you —
                you pay the same price whether or not you use our links.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Editorial Independence</h2>
              <p>
                Affiliate relationships do not affect our editorial independence. Rankings and recommendations on
                this site are based solely on research merit — factors such as product quality, pricing
                transparency, feature depth, and real-world value.
              </p>
              <p className="mt-3">
                Commission rates are not a factor in how we rank or position any product. A tool that pays us
                more does not receive a higher rating or better placement as a result.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Our Commitment to You</h2>
              <p>
                We only recommend products we have researched and believe provide genuine value. If a product does
                not meet our standards — regardless of whether an affiliate program exists — we will not
                recommend it, and we will say so clearly in our coverage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Disclose</h2>
              <p>
                Affiliate relationships are clearly disclosed on every page and review where affiliate links
                appear. You will see a disclosure notice at the top or bottom of relevant content so you always
                know when a link may earn us a commission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Questions</h2>
              <p>
                If you have questions about our affiliate relationships or any specific recommendation, please
                reach out to us at{' '}
                <a
                  href="mailto:contact@trustedpathmedia.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@trustedpathmedia.com
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
