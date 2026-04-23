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
import GuidePage from './pages/GuidePage'
import CategoryPage from './pages/CategoryPage'
import GuidesPage from './pages/GuidesPage'
import AboutPage from './pages/AboutPage'
import DisclosurePage from './pages/DisclosurePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

// Reviews
import claudeAiReview from './data/reviews/claude-ai'
import hostingerReview from './data/reviews/hostinger'
import nordvpnReview from './data/reviews/nordvpn'
import notionReview from './data/reviews/notion'

// Guides
import aiToolsSideHustlers from './data/guides/ai-tools-side-hustlers'
import webHostingBeginners from './data/guides/web-hosting-beginners'
import vpnRemoteWorkers from './data/guides/vpn-remote-workers'
import productivityApps from './data/guides/productivity-apps'
import saasSmallTeams from './data/guides/saas-small-teams'
import onlineCoursesHighIncome from './data/guides/online-courses-high-income'

const reviews = {
  'claude-ai': claudeAiReview,
  'hostinger': hostingerReview,
  'nordvpn': nordvpnReview,
  'notion': notionReview,
}

const guides = {
  'ai-tools-side-hustlers': aiToolsSideHustlers,
  'web-hosting-beginners': webHostingBeginners,
  'vpn-remote-workers': vpnRemoteWorkers,
  'productivity-apps': productivityApps,
  'saas-small-teams': saasSmallTeams,
  'online-courses-high-income': onlineCoursesHighIncome,
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [hash])

  // #/review/:slug
  const reviewMatch = hash.match(/^#\/review\/(.+)$/)
  if (reviewMatch) {
    return (
      <div key={hash} className="page-enter">
        <ReviewPage review={reviews[reviewMatch[1]]} />
      </div>
    )
  }

  // #/guide/:slug
  const guideMatch = hash.match(/^#\/guide\/(.+)$/)
  if (guideMatch) {
    return (
      <div key={hash} className="page-enter">
        <GuidePage guide={guides[guideMatch[1]]} />
      </div>
    )
  }

  // #/category/:slug
  const categoryMatch = hash.match(/^#\/category\/(.+)$/)
  if (categoryMatch) {
    const categoryMap = {
      'ai-tools': 'AI Tools',
      'hosting': 'Hosting',
      'saas': 'SaaS',
      'vpn': 'VPN',
      'courses': 'Courses',
      'productivity': 'Productivity',
    }
    return (
      <div key={hash} className="page-enter">
        <CategoryPage category={categoryMap[categoryMatch[1]] || categoryMatch[1]} />
      </div>
    )
  }

  // Guides listing
  if (hash === '#/guides') {
    return <div key={hash} className="page-enter"><GuidesPage /></div>
  }

  // Static pages
  if (hash === '#/about') {
    return <div key={hash} className="page-enter"><AboutPage /></div>
  }
  if (hash === '#/disclosure') {
    return <div key={hash} className="page-enter"><DisclosurePage /></div>
  }
  if (hash === '#/privacy') {
    return <div key={hash} className="page-enter"><PrivacyPage /></div>
  }
  if (hash === '#/terms') {
    return <div key={hash} className="page-enter"><TermsPage /></div>
  }

  // Homepage
  return (
    <div key={hash} className="min-h-screen bg-navy-900 page-enter">
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
