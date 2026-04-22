import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href="#" className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
              <p>
                We collect email addresses when you subscribe to our newsletter. We also use analytics tools to
                understand site traffic and how visitors interact with our content. Analytics data is aggregated
                and does not include personally identifiable information.
              </p>
              <p className="mt-3">
                We do not collect payment information, social security numbers, or other sensitive personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Use It</h2>
              <p>
                Newsletter email addresses are used solely to send our digest. We do not use your email address
                for any other purpose without your explicit consent.
              </p>
              <p className="mt-3">
                We do not sell, rent, or share your personal data with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
              <p>
                We use cookies for two purposes: analytics (to understand site traffic) and affiliate link
                tracking (to attribute purchases to our site when you click through to a partner). These are
                standard industry practices.
              </p>
              <p className="mt-3">
                You can disable cookies in your browser settings at any time. Note that disabling cookies may
                affect site functionality or your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third Parties</h2>
              <p>
                Affiliate links on this site redirect to third-party websites — such as software vendors or
                marketplaces — that have their own privacy policies and data practices. We are not responsible
                for the privacy practices of those sites. We encourage you to review their policies before making
                a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
              <p>
                If you have subscribed to our newsletter and wish to have your email address removed from our
                list, you can unsubscribe at any time using the link in any newsletter email, or by contacting
                us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                For privacy-related questions or requests, please contact us at{' '}
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
