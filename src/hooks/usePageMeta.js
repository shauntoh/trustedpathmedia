import { useEffect } from 'react'

export function usePageMeta({ title, description }) {
  useEffect(() => {
    // title
    document.title = title
      ? `${title} | TrustedPathMedia`
      : 'TrustedPathMedia — Trusted Digital Tools'

    // helper: find or create a meta tag and set its content
    const setMeta = (nameOrProp, content, isProp = false) => {
      const attr = isProp ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, nameOrProp)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const desc =
      description ||
      'Independent digital tool reviews — curated picks across AI, hosting, VPN, SaaS, courses and productivity.'
    const titleFull = title ? `${title} | TrustedPathMedia` : 'TrustedPathMedia'

    setMeta('description', desc)
    setMeta('og:title', titleFull, true)
    setMeta('og:description', desc, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', window.location.href, true)
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', titleFull)
    setMeta('twitter:description', desc)
  }, [title, description])
}
