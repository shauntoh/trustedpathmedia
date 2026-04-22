import Hero from '../components/Hero'
import Categories from '../components/Categories'
import EditorsPicks from '../components/EditorsPicks'
import WhyTrustUs from '../components/WhyTrustUs'
import BestOf from '../components/BestOf'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <EditorsPicks />
      <WhyTrustUs />
      <BestOf />
      <Newsletter />
    </main>
  )
}
