const entry = {
  slug: '2026-04-07-anthropic-project-glasswing-claude-mythos',
  date: '2026-04-07',
  title: "Anthropic Launches Project Glasswing -- Claude Mythos Preview Found a 27-Year-Old OpenBSD Zero-Day",
  summary: "Anthropic unveiled Project Glasswing, a defensive cybersecurity coalition built around the unreleased Claude Mythos Preview model -- which has already found thousands of zero-day vulnerabilities, including a 27-year-old SACK bug in OpenBSD.",
  body: "Anthropic announced Project Glasswing, a defensive cybersecurity coalition built around Claude Mythos Preview, an unreleased frontier model the company says has already found thousands of zero-day vulnerabilities -- including a 27-year-old SACK bug in OpenBSD and a 17-year-old root-level RCE in FreeBSD. Founding partners include AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Microsoft, NVIDIA, Palo Alto Networks, and the Linux Foundation, with extended access for over 40 additional critical-software organizations. Anthropic is committing $100M in Mythos usage credits across participants and donating $4M to the Linux Foundation's Alpha-Omega and OpenSSF projects and the Apache Software Foundation. For independent developers and small teams the takeaway is uncomfortable: a model that can autonomously chain browser exploits is being handed to defenders first, but the same capability ships eventually to attackers. Audit your dependencies now -- especially anything pinned to older C/C++ libraries -- and assume the asymmetric advantage Mythos gives defenders is temporary. Whether Anthropic's controlled rollout actually preserves that advantage is the real test of Glasswing as a model for shipping dangerous capabilities.",
  sourceUrl: 'https://www.anthropic.com/glasswing',
  sourceLabel: 'Anthropic',
  relatedReviewSlug: 'claude-ai',
  relatedReviewName: 'Claude AI',
  tags: ['Anthropic', 'Claude', 'Cybersecurity', 'AI Safety'],
}
export default entry
