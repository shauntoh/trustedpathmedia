import Nav from '../Nav'
import Footer from '../Footer'
import { url } from '../../lib/url'

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-navy-900 page-enter">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-10">
            <a href={url('/')} className="hover:text-slate-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Affiliate Disclosure</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Affiliate Disclosure</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">

            <section>
              <p>
                We make money when you buy something through our links. Here is exactly what that means,
                what it doesn&apos;t mean, and why it shouldn&apos;t change how you read our work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">What an Affiliate Commission Is</h2>
              <p>
                When you click a link on TrustedPathMedia and complete a purchase on the vendor&apos;s site, we
                receive a commission. This is standard in online publishing — the vendor pays it from their
                own margin. You pay the same price you would pay going directly to their site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">What It Doesn&apos;t Affect</h2>
              <p>
                Commission rates do not influence our rankings, our scores, or our editorial framing.
                Research and evaluation happen before we ever look at whether an affiliate program exists or
                what it pays. A product that pays 50% commission does not get a higher rating than one that
                pays 5%. A product with no affiliate program can still appear in our recommendations if it&apos;s
                the right answer for the reader.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Our Commitment</h2>
              <p>
                We only recommend products we believe provide genuine, defensible value to the professionals
                reading this site. Our editorial reputation is worth more to us than any individual commission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Questions</h2>
              <p>
                If you have questions about a specific affiliate relationship, contact us at{' '}
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
