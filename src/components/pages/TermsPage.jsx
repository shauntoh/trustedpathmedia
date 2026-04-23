import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Terms of Use</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Informational Purpose</h2>
              <p>
                TrustedPathMedia is published for informational purposes only. The content on this site —
                including reviews, guides, and recommendations — does not constitute professional financial,
                legal, or business advice. You should consult qualified professionals before making significant
                purchasing or business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Affiliate Links</h2>
              <p>
                This site contains affiliate links. When you click a link and complete a purchase, we may
                earn a commission from the vendor. Affiliate relationships are clearly disclosed on every
                relevant page. The presence of affiliate links does not affect our editorial rankings or
                recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Content Accuracy</h2>
              <p>
                We update our reviews and guides regularly to reflect current pricing, features, and product
                changes. However, we cannot guarantee real-time accuracy. Pricing, terms, and features for
                third-party products may change without notice. Always verify current details directly with
                the vendor before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
              <p>
                All content on TrustedPathMedia — including text, reviews, guides, and editorial commentary —
                is owned by TrustedPathMedia. Reproduction, redistribution, or commercial use of our content
                without explicit written permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
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
