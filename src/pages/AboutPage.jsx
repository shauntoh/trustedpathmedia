import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function AboutPage() {
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
                TrustedPathMedia is an independent digital tool review site. We research, compare, and recommend
                tools across AI, hosting, SaaS, VPN, courses, and productivity software — built for professionals
                and ambitious individuals who want to invest in the right tools without wasting time or money.
              </p>
              <p className="mt-3">
                We are not affiliated with any single platform or vendor. Our team evaluates products based on
                real-world use cases, pricing transparency, and long-term value — not on who pays the most for
                placement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
              <p>
                Help readers spend smarter. There is an enormous amount of marketing noise in the software space —
                inflated claims, paid placements disguised as reviews, and SEO content that regurgitates feature
                lists without real analysis.
              </p>
              <p className="mt-3">
                We cut through that. We only recommend tools worth paying for, and we tell you why — including the
                downsides.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Make Money</h2>
              <p>
                We earn affiliate commissions when readers purchase through our links. This is how we fund our
                research and keep the site running. We are transparent about this on every page.
              </p>
              <p className="mt-3">
                Our editorial rankings are never for sale. A product does not get a higher rating because it pays
                a higher commission. Commission rates are not a factor in our recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Our Standards</h2>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>Every recommendation is based on independent research, not vendor relationships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>We disclose affiliate relationships clearly on every review and page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>We publish honest cons alongside pros — if a tool has real weaknesses, we say so.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">—</span>
                  <span>We update reviews when products change significantly.</span>
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
