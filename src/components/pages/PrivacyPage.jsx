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
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
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
              <h2 className="text-xl font-semibold text-white mb-3">What We Don&apos;t Do</h2>
              <p>
                We do not sell your data. We do not rent your data. We do not share your email with third
                parties for marketing purposes. We do not build advertising profiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
              <p>
                Analytics cookies track aggregate site traffic. Affiliate tracking cookies are set when you
                click a partner link — this is how vendors attribute purchases and pay us commissions.
                Standard in affiliate publishing. You can disable all cookies in your browser without
                breaking the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
              <p>
                Once you leave TrustedPathMedia, the vendor&apos;s privacy policy governs your data. We encourage
                you to review it before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Opt-Out</h2>
              <p>
                To unsubscribe from the newsletter: use the link in any email we send. To request data
                deletion:{' '}
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
