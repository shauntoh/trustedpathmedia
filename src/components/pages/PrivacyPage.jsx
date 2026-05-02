import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href={url('/')} id="nav-privacy-breadcrumb-home" className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <p>
                Short version: we collect as little as possible, we don&apos;t sell anything, and you can opt out
                of everything.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">What We Collect</h2>
              <p>
                Email address — only if you subscribe to our newsletter. We use it to send the newsletter.
                That&apos;s it. Analytics data — aggregated traffic patterns only. We see &quot;200 people read this
                review,&quot; not who those people are. We have no login system, no user accounts, and no payment
                data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Data</h2>
              <p>
                The data we collect has a narrow purpose: keeping the site running well and sending you
                the newsletter if you asked for it. Analytics help us understand which content is useful
                so we can improve it. Affiliate tracking cookies help vendors attribute purchases and pay
                us commissions — that&apos;s the business model that keeps this site free. We don&apos;t use your
                data for advertising, profiling, or anything unrelated to those purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">What We Don&apos;t Do</h2>
              <p>
                We do not sell your data. We do not rent your data. We do not share your email with third
                parties for marketing purposes. We do not build advertising profiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
              <p>
                We use two types of cookies. Analytics cookies (via Google Analytics) track aggregate
                site traffic — things like page views and session duration — so we can see what content
                is resonating. Affiliate tracking cookies are set when you click a partner link; these
                let the vendor know that a purchase originated from our site, which is how commissions
                are attributed. You can disable all cookies in your browser settings at any time without
                breaking the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
              <p>
                We use Google Analytics for site performance data. We also have affiliate relationships
                with various third-party platforms and tools featured on this site. These services operate
                under their own privacy policies and may set their own cookies when you interact with
                their links or content. We encourage you to review their policies if you want to understand
                how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
              <p>
                Once you leave ToolNav, the vendor&apos;s privacy policy governs your data. We have no
                control over external sites and are not responsible for their privacy practices.
                We encourage you to review their policy before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Affiliate Disclosure</h2>
              <p>
                This site contains affiliate links. If you click one and make a purchase, we may earn
                a commission — at no extra cost to you. This is how we fund the site and keep all
                content free to read. Affiliate relationships never influence our editorial rankings
                or recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
              <p>
                We only hold onto data for as long as it&apos;s needed. Newsletter subscriber emails are
                kept until you unsubscribe. Analytics data is retained per Google Analytics&apos; default
                retention settings. If you ask us to delete your data, we&apos;ll do it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
              <p>
                You can ask us what data we hold about you, request a correction, or ask us to delete
                it entirely. Just email us and we&apos;ll take care of it. We keep things simple — no
                bureaucratic hoops.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Opt-Out</h2>
              <p>
                To unsubscribe from the newsletter: use the link in any email we send. To request data
                deletion:{' '}
                <a
                  href="mailto:trustedpathmedia@gmail.com"
                  id="nav-privacy-contact-email"
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
