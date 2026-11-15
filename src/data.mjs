// ---------------------------------------------------------------------------
// Attention Labs — site content
// Edit copy here, then run `npm run build` to regenerate /dist.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Attention Labs',
  wordmark: 'AttentionLabs',
  tagline: 'We engineer attention.',
  description:
    'Attention Labs is a content-led growth agency. We build owned media for founders, funds and brands — content that ranks, gets shared and generates demand while you sleep.',
  url: 'https://www.attentionlabs.com',
  email: 'contact@attentionlabs.com',
  phone: '+91 98710 65446',
  phoneHref: 'tel:+919871065446',
  calendly: 'https://calendly.com/contact-attentionlabs/30min',
  address: ['811, Tower C, Unitech Business Zone', 'Sector 50, Gurugram, India'],
  availability: 'Accepting clients for Q1 2027',
  socials: [
    { label: 'Instagram', short: 'IG', href: 'https://www.instagram.com/attention.labs/' },
    { label: 'YouTube', short: 'YT', href: 'https://www.youtube.com/@AttentionLabs-br' },
    { label: 'LinkedIn', short: 'LI', href: 'https://www.linkedin.com/company/attentionlabscom/' },
  ],
};

export const nav = [
  { label: 'Home', href: '/', img: '/assets/img/work/industrial-47.webp' },
  { label: 'Work', href: '/work/', img: '/assets/img/work/alpha-premier-league.webp' },
  { label: 'Case Studies', href: '/case-studies/', img: '/assets/img/people/shivender-field.webp' },
  { label: 'Services', href: '/services/', img: '/assets/img/work/motion-reel.webp' },
  { label: 'Book a Call', href: '/contact/', img: '/assets/img/people/shivender-kanwar.webp' },
];

export const stats = [
  { value: 1000, suffix: '+', label: 'Videos created' },
  { value: 200, suffix: '+', label: 'Clients served' },
  { value: 80, suffix: 'M+', label: 'Views generated' },
];

export const clients = [
  { name: 'Hyundai', src: '/assets/img/clients/hyundai.webp' },
  { name: 'Samsung', src: '/assets/img/clients/samsung.webp' },
  { name: 'OPPO', src: '/assets/img/clients/oppo.webp' },
  { name: 'Decathlon', src: '/assets/img/clients/decathlon.webp' },
  { name: 'WTFund', src: '/assets/img/clients/wtfund.webp' },
  { name: 'Shivender Kanwar', src: '/assets/img/clients/shivender.webp' },
];

export const problemFix = {
  problem:
    "You're renting attention from platforms that charge more every year for the same audience. Every dollar spent on ads is gone the moment the campaign ends. That's not an asset. That's a leak.",
  fix:
    'We build owned media infrastructure — content that ranks, gets shared, and generates demand while you sleep. Channels that appreciate. Libraries that compound. Distribution you control.',
};

export const audiences = [
  {
    title: 'Founders with no distribution',
    text: 'You built something real but nobody knows it exists. We turn your expertise into a media engine that fills your pipeline.',
  },
  {
    title: 'Firms that need trust at scale',
    text: 'You have capital, credentials, or clients — but no public presence. We build the content arm that makes strangers trust you before the first call.',
  },
  {
    title: 'Companies done with agency jargon',
    text: "You've burned budget on retainers that produced nothing. You want output, velocity, and results you can actually measure.",
  },
];

export const services = [
  {
    key: 'sprint',
    name: 'The Sprint',
    alias: 'The Protocol Sprint',
    tag: 'The Wedge',
    text: 'For skeptics and data-seekers. 30 days. 4 long-form videos. 10 short-form assets. A full audit of where you stand and what’s possible — proof before commitment.',
    includes: [
      'Strategy workshop (the audit)',
      '4 long-form video assets',
      '10 short-form vertical assets',
      'The Lab Report — a forensic analysis of your market position',
    ],
    price: '$3,000',
    note: 'One-time',
    cta: 'Start the Sprint',
  },
  {
    key: 'engine',
    name: 'The Engine',
    alias: 'The Founder OS',
    tag: 'Most popular',
    text: 'We become your external media team — your outsourced Chief Media Officer. One monthly interview with you, 30+ assets out the door. Community handled.',
    includes: [
      'Full channel management (YouTube, LinkedIn, X)',
      'Monthly “extraction” interview',
      '30+ assets per month (video, text, newsletter)',
      'Community management & response',
    ],
    price: '$6,000',
    note: 'Per month',
    cta: 'Start the Engine',
    featured: true,
  },
  {
    key: 'build',
    name: 'The Build',
    alias: 'Enterprise Media Build',
    tag: 'The Asset',
    text: 'For companies ready to launch a standalone media brand. Full concept, production, distribution and monetization — priced on scope with performance alignment.',
    includes: [
      'Concept & casting',
      'Full production',
      'Distribution strategy',
      'Monetization strategy',
    ],
    price: 'Custom',
    note: 'Scope + performance',
    cta: 'Discuss the Build',
  },
];

export const whyUs = [
  { title: 'Technical fluency', text: 'We go deep on AI, fintech and infra — not just fluff.' },
  { title: 'Capital + consumer native', text: 'We understand VC signaling and retail trust.' },
  { title: 'Founder-operator background', text: "We've built and scaled companies, not just advised them." },
  { title: 'Output, not overhead', text: 'We run it. You get results.' },
  { title: 'Full-stack', text: 'From founder brand to media property to launch.' },
];

export const ownedMedia = [
  'Founder brands that become cults',
  'Content engines that run without you',
  'Media properties you own, not rent',
  'Launches that break through the noise',
  'Distribution that compounds while you sleep',
];

export const guarantees = [
  { title: 'Speed', text: 'Measurable traction in 30 days or we double output at no cost.' },
  { title: 'Guarantee', text: "90 days in, if results don't match our case studies — full refund. No questions." },
  { title: 'Reliability', text: 'Deliverables ship on time. If we miss, next month is free.' },
];

export const process = [
  {
    title: 'The Signal Extraction',
    text: 'We don’t need your time; we need your brain. We use 60-minute “Extraction Protocols” to download your expertise.',
  },
  {
    title: 'The AI Arbitrage',
    text: 'A proprietary stack of AI tools slices, transcribes and repackages your IP 10x faster than traditional agencies.',
  },
  {
    title: 'The Retention Science',
    text: 'Every frame is analyzed. We track drop-off points, hook efficacy and algorithmic triggers. If it doesn’t hold attention, it dies in the lab.',
  },
];

export const anatomy = [
  { key: 'Hook', time: '0–3 sec', title: 'The Hook', text: 'Pattern interrupt. Visual contrast. Immediate value proposition.' },
  { key: 'Payoff', time: 'Middle', title: 'The Payoff', text: 'Deliver on the promise. Maintain pacing. Strategic loops.' },
  { key: 'CTA', time: 'End', title: 'The CTA', text: 'Clear next step. Algorithmic signal. Retention anchor.' },
];

export const labReport = {
  title: 'Why this video flopped',
  stats: [
    { value: '1:24', label: 'Avg. view duration' },
    { value: '23%', label: 'Retention rate' },
    { value: '2.1%', label: 'CTR' },
  ],
  rows: [
    { k: 'The problem', v: 'We bored the audience at 0:05. The hook was too slow — 8 seconds of talking head before delivering value.' },
    { k: 'The fix', v: 'Next iteration we cut the intro entirely and opened on a pattern interrupt (visual + audio spike). Retention jumped to 58%.' },
    { k: 'The lesson', v: 'Your audience doesn’t owe you their attention. Earn it in the first frame, or lose them forever.' },
  ],
};

export const testimonials = [
  {
    quote: 'These people are the real commandos of content.',
    name: 'Shivender Kanwar',
    role: 'Ex Para SF',
    img: '/assets/img/people/shivender-kanwar.webp',
  },
  {
    quote: 'You are the real MVP.',
    name: 'Rahul Seth',
    role: 'Director — Antler | Industrial 47',
    img: '/assets/img/people/rahul-seth.webp',
  },
  {
    quote: 'Everyone in the office loved it. Great job!',
    name: 'Arushi Nayak',
    role: 'Social Media Manager, WTFund',
    img: '/assets/img/people/arushi-nayak.webp',
  },
  {
    quote: 'You guys are the wizards.',
    name: 'Ariana Koyel',
    role: 'Social Media Influencer',
    img: '/assets/img/people/ariana-koyel.webp',
  },
];

export const faqs = [
  { q: 'What do I have to do?', a: 'Show up for one interview per month. We handle everything else.' },
  {
    q: 'What kind of companies do you work with?',
    a: 'Founders, startups, funds (institutional and retail), and businesses building owned media. We go deep on AI, fintech, B2B SaaS and technical products.',
  },
  {
    q: 'Do you build podcasts and newsletters?',
    a: 'Yes. Media properties are core to what we do — we build and run podcasts, newsletters and YouTube channels.',
  },
  { q: 'How fast do you move?', a: 'First assets ship in 2 weeks. The Sprint delivers a full proof-of-concept in 30 days.' },
  { q: "What if it doesn't work?", a: "90-day guarantee. If results don't match our case studies, full refund." },
];

// Portfolio — real Attention Labs productions (YouTube).
export const work = [
  {
    id: '3lNyXEgfiPM',
    title: 'Fund Launch Film',
    client: 'Industrial 47',
    type: 'Brand Film',
    img: '/assets/img/work/industrial-47.webp',
  },
  {
    id: 'NH51G258gTg',
    title: 'Alpha Premier League',
    client: 'Blackrose',
    type: 'Launch Film',
    img: '/assets/img/work/alpha-premier-league.webp',
  },
  {
    id: 'jIRnbOJONdg',
    title: 'Channel Intro',
    client: 'Shivender Kanwar',
    type: 'Creator',
    img: '/assets/img/work/shivender-intro.webp',
  },
  {
    id: 'CvcsiQEtd-Q',
    title: 'Motion Graphics Reel',
    client: 'Attention Labs',
    type: 'Motion',
    img: '/assets/img/work/motion-reel.webp',
  },
];

export const caseStudies = [
  {
    slug: 'shivender-kanwar',
    client: 'Shivender Kanwar',
    title: 'Shivender Kanwar',
    short: 'Ex Para SF → 100K Subscribers',
    subtitle: 'From zero to 100K+ subscribers: building a military content empire.',
    category: 'Creator · YouTube',
    services: ['Channel strategy', 'Long-form production', 'Short-form', 'Distribution'],
    hero: '/assets/img/people/shivender-field.webp',
    cover: '/assets/img/people/shivender-kanwar.webp',
    gallery: ['/assets/img/work/shivender-intro.webp', '/assets/img/people/shivender-kanwar.webp'],
    challenge:
      'Shivender Kanwar, an ex-Para SF commando, had incredible stories and expertise but zero digital presence. The challenge was to translate military experience into engaging content that could build trust and authority in the crowded YouTube space.',
    strategy:
      'A three-phase approach. First, deep extraction interviews to capture authentic military stories. Second, content engineered for maximum retention using our proprietary analysis system. Third, distribution optimized across YouTube and social platforms with data-driven insights.',
    results:
      'Within 12 months: 100K+ subscribers, 10M+ total views, and Shivender established as a leading voice in military content. Average retention exceeded 60%, and the channel became a sustainable media asset generating consistent revenue.',
    metrics: [
      { value: '100K+', label: 'Subscribers' },
      { value: '10M+', label: 'Total views' },
      { value: '60%', label: 'Avg. retention' },
      { value: '12mo', label: 'Timeline' },
    ],
    learnings:
      'Authentic expertise + attention engineering = owned media assets. The success came from treating content as a data problem, not a creative one.',
  },
  {
    slug: 'tech-founder-series',
    client: 'Tech Founder',
    title: 'Tech Founder Series',
    short: 'Tech Founder → 100K Subscribers',
    subtitle: 'Scaling technical thought leadership from engineering blogs to video.',
    category: 'B2B · Thought leadership',
    services: ['Building in public', 'Long-form video', 'Talent brand'],
    hero: '/assets/img/stock/engineers.webp',
    cover: '/assets/img/stock/engineers.webp',
    gallery: ['/assets/img/stock/desk-top.webp', '/assets/img/stock/strategy-wall.webp'],
    challenge:
      'A technical founder needed to transition from engineering blogs to video content to reach a broader audience and attract top talent.',
    strategy:
      "We focused on 'Building in Public' — documenting the engineering challenges and solutions in high-fidelity video formats.",
    results:
      'Achieved 100K subscribers in the niche tech sector, resulting in a 40% increase in inbound engineering applications.',
    metrics: [
      { value: '100K', label: 'Subscribers' },
      { value: '40%', label: 'Hiring lift' },
      { value: '500K+', label: 'Dev reach' },
      { value: '6mo', label: 'Timeline' },
    ],
    learnings:
      'Technical audiences value density and authenticity. High production value combined with deep technical content is a winning formula.',
  },
  {
    slug: 'vc-firm-media-arm',
    client: 'VC Firm',
    title: 'VC Firm Media Arm',
    short: 'VC Firm → 50M+ Views',
    subtitle: '50M+ views for an investment thesis — media as leverage for capital.',
    category: 'Venture capital · Media arm',
    services: ['Media brand', 'Founder stories', 'Thesis deep-dives'],
    hero: '/assets/img/stock/towers.webp',
    cover: '/assets/img/stock/pitch-talk.webp',
    gallery: ['/assets/img/stock/analytics-laptop.webp', '/assets/img/stock/open-office.webp'],
    challenge:
      'A leading VC firm wanted to build a media moat to attract better deal flow and support portfolio companies.',
    strategy:
      'Created an educational media arm focusing on market trends, founder stories and investment-thesis deep-dives.',
    results: 'Generated 50M+ views across platforms, becoming a primary source of deal flow.',
    metrics: [
      { value: '50M+', label: 'Views' },
      { value: '3X', label: 'Deal flow' },
      { value: '15', label: 'PortCo features' },
      { value: '18mo', label: 'Timeline' },
    ],
    learnings: 'Media is the new leverage for capital. Educational content builds long-term trust with founders.',
  },
  {
    slug: 'enterprise-revenue-engine',
    client: 'Enterprise SaaS',
    title: 'Enterprise Revenue Engine',
    short: 'Enterprise → $2M ARR from Content',
    subtitle: '$2M ARR attributed directly to organic content.',
    category: 'Enterprise SaaS · Demand',
    services: ['Media brand', 'Decision-maker content', 'Organic acquisition'],
    hero: '/assets/img/stock/loft-office.webp',
    cover: '/assets/img/stock/boardroom.webp',
    gallery: ['/assets/img/stock/team-laptop.webp', '/assets/img/stock/boardroom.webp'],
    challenge:
      'An enterprise SaaS company wanted to reduce reliance on paid ads and build organic acquisition channels.',
    strategy:
      'Launched a media brand targeting decision-makers with high-value industry insights and problem-solving content.',
    results: 'Attributed $2M in ARR directly to organic content leads within the first year.',
    metrics: [
      { value: '$2M', label: 'ARR generated' },
      { value: '-60%', label: 'CAC reduction' },
      { value: '500+', label: 'Qualified leads' },
      { value: '12mo', label: 'Timeline' },
    ],
    learnings: "B2B content doesn't have to be boring. High-quality production and storytelling convert enterprise buyers.",
  },
];
