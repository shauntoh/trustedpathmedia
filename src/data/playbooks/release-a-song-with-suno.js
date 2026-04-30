const playbook = {
  slug: 'release-a-song-with-suno',
  title: 'Release a song to Spotify in a weekend with Suno + DistroKid + Canva',
  tagline: 'Idea to streaming platforms in an afternoon — using AI music, a $25/yr distributor, and free design tools.',
  category: 'Music',
  categoryColor: 'text-rose-400 bg-rose-950/50 border-rose-800/30',
  goal: 'Take a song from a one-line concept to a finished, distributed release on Spotify, Apple Music, and the rest of the major streamers in 2–4 hours of actual work.',
  earningPotential: 'Passive royalties · realistically $10–$8,000/mo per track depending on traction',
  difficulty: 'Beginner',
  timeRequired: '2–4 hours',
  publishedAt: '2026-04-29',
  toolsUsed: [
    {
      name: 'Suno',
      role: 'AI music generation',
      reviewSlug: 'suno',
      affiliateUrl: 'https://suno.com',
    },
    {
      name: 'DistroKid',
      role: 'Music distribution to streaming platforms',
      reviewSlug: null,
      affiliateUrl: 'https://distrokid.com',
    },
    {
      name: 'Canva',
      role: 'Cover art design',
      reviewSlug: null,
      affiliateUrl: 'https://www.canva.com',
    },
  ],
  steps: [
    {
      title: 'Shape the concept and write a tight Suno prompt',
      body: 'Before you generate anything, decide three things: **genre**, **mood**, and **a single lyrical hook**. The clearer the input, the less iteration you need later. Suno responds best to prompts that combine genre tags with descriptive texture — for example, "lo-fi indie folk, warm acoustic guitar, intimate male vocal, late-night nostalgic mood." Then write your hook: a one or two line idea that anchors the song. You don\'t need a full lyric sheet yet — Suno can generate lyrics from a theme, but giving it your own hook keeps the result feeling like *your* song.',
      tip: 'Keep a notes file with 3–5 prompt variations. You will want to A/B them.',
    },
    {
      title: 'Generate, listen, and iterate in Suno',
      body: 'Open Suno and run your prompt in **Custom mode** so you control the lyrics and style separately. Each generation gives you two takes — listen to both end-to-end, not just the first 15 seconds. The chorus is what matters most for streaming; if the hook doesn\'t land, regenerate. Plan for 5–10 generations before you find a take worth keeping. When you do, use **Extend** to lengthen the track to 2:30–3:30 (the streaming sweet spot). Save every promising version as you go — Suno\'s history is helpful but a downloaded backup is safer.',
      tip: 'Songs under 2:00 still earn royalties on Spotify but feel underbaked. Aim for 2:30+.',
    },
    {
      title: 'Download the master and (optionally) clean it up',
      body: 'Once you have a final take, download the **WAV** version (not MP3) from Suno. The output is already mixed and mastered, but if you want to nudge the loudness or clean up any AI artifacts, drop it into a free tool like Audacity or BandLab. For most beginners, the Suno master is genuinely ship-ready — don\'t over-engineer this step. Streaming platforms apply their own loudness normalization anyway, so chasing a "perfect" master is rarely worth the time.',
      tip: null,
    },
    {
      title: 'Design cover art in Canva',
      body: 'DistroKid requires a **3000x3000 px square** cover with no logos, URLs, or social handles in the image. Open Canva, search "album cover," and pick a template that matches your song\'s mood. Replace the photo with something royalty-free (Canva\'s built-in library is fine, or use Unsplash). Set your artist name and song title in a single readable typeface — resist the urge to use three different fonts. Export as PNG or JPG at full resolution.',
      tip: 'If your song is on multiple streaming services, the cover gets cropped to a circle on some apps. Keep the focal point centered.',
    },
    {
      title: 'Set up your DistroKid artist profile',
      body: 'Sign up at distrokid.com — the **$22.99/year Musician plan** is the right starting tier and lets you upload unlimited songs for a year. Choose your artist name carefully; it\'s what links Spotify, Apple Music, and your future releases together. If your artist name is already taken on Spotify, DistroKid will route the release to the existing profile by default — request a new Spotify for Artists profile via the link in DistroKid\'s release confirmation email if that happens.',
      tip: null,
    },
    {
      title: 'Upload, set metadata, and pick a release date',
      body: 'Click **Upload**, drop in your WAV, attach the cover, and fill in the metadata. Set yourself as the songwriter (you wrote the prompt and shaped the output — that counts) and tick the box confirming you have the rights to distribute the music. Suno\'s Pro and Premier plans grant commercial rights; the free tier does not, so confirm your plan before you ship. Pick a release date **at least 3 weeks out** so you qualify for editorial playlist consideration via Spotify for Artists. Submit and wait — most stores show the track within 1–7 days of the release date.',
      tip: 'Fill in the "Spotify for Artists" claim before release date so your profile shows your photo and bio at launch.',
    },
    {
      title: 'Claim your profiles and share',
      body: 'Once the track is live, claim your **Spotify for Artists** and **Apple Music for Artists** profiles. This unlocks playlist pitching, listener analytics, and the ability to update your bio and photo. Share the song with three or four friends who genuinely listen to your genre — early saves and adds to personal playlists are a real signal to the algorithm. Don\'t spam-share; it tends to do more harm than good.',
      tip: null,
    },
  ],
  faq: [
    {
      question: 'Do I have commercial rights to a Suno-generated song?',
      answer: 'On Suno\'s Pro and Premier plans, yes — you receive commercial rights to songs you generate, including the right to distribute and monetize them. The free tier does not include commercial rights, so make sure you\'re on a paid plan before generating anything you intend to release. Always confirm the latest terms on Suno\'s site before you ship.',
    },
    {
      question: 'How much does DistroKid actually cost?',
      answer: 'The Musician plan is $22.99/year for unlimited uploads on one artist name. The Musician Plus tier ($39.99/year) adds two artist names and a few extras like custom release dates and pre-saves. For a first release, the basic Musician plan is plenty.',
    },
    {
      question: 'How are royalties split when I use AI music?',
      answer: 'DistroKid pays out 100% of streaming royalties to you (they take no cut beyond the annual fee). Suno does not take a royalty share on songs you generate under a paid plan. So in practice: you keep what your track earns, minus the streaming platform\'s standard payouts (~$0.003–$0.005 per stream on Spotify).',
    },
    {
      question: 'Will Spotify accept AI-generated music?',
      answer: 'Yes — Spotify currently accepts AI-generated tracks distributed through legitimate distributors like DistroKid, as long as the content doesn\'t impersonate real artists or use unauthorized voice clones. Their stance has tightened over time around fraudulent stream farming and impersonation, but original AI compositions distributed normally are fine.',
    },
    {
      question: 'Is it realistic to earn meaningful money from one AI track?',
      answer: 'Be honest with yourself: most independent releases — AI or not — earn modest passive royalties, often under $50/month. A track that finds a playlist or niche audience can earn more, and the catalog effect compounds over time as you release more songs. Treat the first release as a learning loop, not a payday.',
    },
  ],
  verdict:
    'A weekend release used to mean a studio, a mastering engineer, and a distributor that took a cut. Suno + DistroKid + Canva collapses that into an afternoon. Don\'t expect a hit on take one — expect a clean, shippable track that teaches you the workflow. The compounding payoff comes from your second, third, and fifth release.',
}

export default playbook
