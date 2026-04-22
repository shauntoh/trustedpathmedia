import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import EditorsPicks from './components/EditorsPicks'
import WhyTrustUs from './components/WhyTrustUs'
import BestOf from './components/BestOf'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Nav />
      <main>
        <Hero />
        <Categories />
        <EditorsPicks />
        <WhyTrustUs />
        <BestOf />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
