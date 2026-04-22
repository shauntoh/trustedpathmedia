import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import EditorsPicks from './components/EditorsPicks'
import WhyTrustUs from './components/WhyTrustUs'
import BestOf from './components/BestOf'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ReviewPage from './pages/ReviewPage'

import claudeAiReview from './data/reviews/claude-ai'
import hostingerReview from './data/reviews/hostinger'
import nordvpnReview from './data/reviews/nordvpn'
import notionReview from './data/reviews/notion'

const reviews = {
  'claude-ai': claudeAiReview,
  'hostinger': hostingerReview,
  'nordvpn': nordvpnReview,
  'notion': notionReview,
}

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const handler = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const reviewMatch = hash.match(/^#\/review\/(.+)$/)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [hash])

  if (reviewMatch) {
    const slug = reviewMatch[1]
    return <ReviewPage review={reviews[slug]} />
  }

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
