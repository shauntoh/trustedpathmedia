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
            <a href={url('/')} id="nav-terms-breadcrumb-home" className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Terms of Use</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Informational Purpose</h2>
              <p>
                ToolNav is published for informational purposes only. The content on this site —
                including reviews, guides, and recommendations — does not constitute professional financial,
                legal, or business advice. You should consult qualified professionals before making significant
                purchasing or business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Your Responsibility</h2>
              <p>
                The decisions you make based on content here are yours. We share what we know and
                recommend what we genuinely think is useful, but results vary — especially with
                anything income-related. We cannot guarantee you&apos;ll earn money or achieve specific
                outcomes by following our recommendations. Please use your own judgment and do your
                own due diligence before spending money or changing how you run your business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Affiliate Links</h2>
              <p>
                This site contains affiliate links. When you click a link and complete a purchase, we
                may earn a commission from the vendor — at no extra cost to you. Affiliate relationships
                are clearly disclosed on every relevant page. The presence of affiliate links does not
                affect our editorial rankings or recommendations. We only recommend tools we&apos;d stand
                behind regardless of commission.
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
              <h2 className="text-xl font-semibold text-white mb-3">No Warranties</h2>
              <p>
                All content on ToolNav is provided as-is. We do our best to keep things accurate and
                useful, but we make no guarantees — about accuracy, completeness, or fitness for any
                particular purpose. Use the information here at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
              <p>
                We are not liable for any losses or damages — direct, indirect, or otherwise — that
                result from using this site or acting on information published here. This includes
                purchasing decisions, business outcomes, or anything else downstream of a recommendation
                we made.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">External Links</h2>
              <p>
                We link to a lot of third-party sites and products. Once you leave ToolNav, you&apos;re
                on their turf — their terms and policies apply. We have no control over external
                sites and are not responsible for their content, availability, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
              <p>
                All content on ToolNav — including text, reviews, guides, and editorial commentary —
                is owned by ToolNav. Reproduction, redistribution, or commercial use of our content
                without explicit written permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. When we do, the &quot;last updated&quot; date at
                the top of this page will change. Continuing to use the site after an update means
                you&apos;re okay with the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a
                  href="mailto:trustedpathmedia@gmail.com"
                  id="nav-terms-contact-email"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  trustedpathmedia@gmail.com
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
