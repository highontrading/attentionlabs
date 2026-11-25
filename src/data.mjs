// ---------------------------------------------------------------------------
// Attention Labs — site content
// Edit copy here, then run `npm run build` to regenerate /dist.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Attention Labs',
  wordmark: 'AttentionLabs',
  tagline: 'We engineer attention.',
  description:
    'Attention Labs is a content-led growth agency and full-stack content studio in Lucknow, India. We plan, shoot, produce and run content that builds media brands own.',
  url: 'https://www.attentionlabs.com',
  email: 'contact@attentionlabs.com',
  phone: '+91 83739 35414',
  phoneHref: 'tel:+918373935414',
  calendly: 'https://calendly.com/contact-attentionlabs/30min',
  city: 'Lucknow',
  address: ['2/572, Rashmikhand, Shardanagar', 'Lucknow, Uttar Pradesh, India'],
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
  { label: 'Who We Are', href: '/about/', img: '/assets/video/reel-01.webp' },
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

// Engagement options — shown only as choices in the contact form (no public pricing).
export const services = [
  { key: 'sprint', name: 'The Sprint', short: '30-day pilot' },
  { key: 'engine', name: 'The Engine', short: 'Monthly media team' },
  { key: 'build', name: 'The Build', short: 'Standalone media brand' },
];

// Hero reel — 12 clips. `src`/`poster` are light 10s silent preview loops
// (assets/video); `full` is the original with sound, opened on click.
const SUPA = 'https://xfyshcjptayuemcwxnpr.supabase.co/storage/v1/object/public/uploads/';
// Titles describe what is on screen — rename freely.
const REEL_META = {
  '01': { title: 'Residency Cohort Film', type: 'Brand films' },
  '02': { title: 'Founder Story', type: 'Brand films' },
  '03': { title: 'Automotive Reel', type: 'Short-form' },
  '04': { title: 'Stop the Scroll', type: 'Short-form' },
  '05': { title: 'Every Generation', type: 'Brand films' },
  '06': { title: 'Changed the World', type: 'Brand films' },
  '07': { title: 'The Class', type: 'Brand films' },
  '08': { title: 'Stand Out Online', type: 'Short-form' },
  '09': { title: 'Hello New World', type: 'Brand films' },
  '10': { title: 'How to Film Yourself', type: 'Short-form' },
  '11': { title: 'Be Noticed', type: 'Short-form' },
  '12': { title: 'Edit Workflow', type: 'Short-form' },
};
export const reel = [
  { n: '01', r: 16 / 9, full: '1795287294770-0555304c-7c6f-4448-bc79-5d062f77d295' },
  { n: '03', r: 9 / 16, full: '1795287294769-a194bedf-b339-4126-b42b-aa38ba9c1a7a' },
  { n: '02', r: 4 / 3, full: '1795287294770-4f7fd951-3560-4527-a83a-072120904844' },
  { n: '04', r: 9 / 16, full: '1795287294770-f4ad3777-6883-488d-ae4f-d3d4b6bce7c9' },
  { n: '05', r: 16 / 9, full: '1795287294770-4d417acd-8d5d-4497-8102-4cdcb19be628' },
  { n: '08', r: 9 / 16, full: '1795287294770-39fd62a0-05cb-4d23-ba16-8ce5fc95baaf' },
  { n: '06', r: 16 / 9, full: '1795287294770-dc24eaae-ae9c-4e8c-807a-038ad29530c1' },
  { n: '10', r: 9 / 16, full: '1795287294770-4e325626-854a-4c56-a5af-90fc6f4bb93e' },
  { n: '07', r: 16 / 9, full: '1795287294770-2265ebc7-89c2-45b7-9502-ff01910a5ab8' },
  { n: '11', r: 9 / 16, full: '1795287294770-1405c2f2-1ee9-4ba9-9d26-7803f0d610b5' },
  { n: '09', r: 16 / 9, full: '1795287294770-1fd70adb-9da7-4349-a43b-0ca7acf1cbf6' },
  { n: '12', r: 9 / 16, full: '1795287294770-135db706-82b8-4761-ba6b-7f71d7d958af' },
].map((v, i) => ({
  ...v,
  ...REEL_META[v.n],
  src: `/assets/video/reel-${v.n}.mp4`,
  poster: `/assets/video/reel-${v.n}.webp`,
  full: SUPA + v.full + '.mp4',
}));

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
    type: 'Brand films',
    img: '/assets/img/work/industrial-47.webp',
  },
  {
    id: 'NH51G258gTg',
    title: 'Alpha Premier League',
    client: 'Blackrose',
    type: 'Launch films',
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

// Case studies.
// - `stats`: the headline numbers. Numeric values ("600K", "+40%", "2.9X")
//   get the count-up animation; words ("Funded") show as text.
// - `growth`: optional before → after bars per platform. `max` sets the scale
//   ('shared' = one scale for all rows, otherwise each row is scaled to itself).
// - `cover` (cards, 4:3) / `hero` (page header, ~1.9:1) / `logo` / `video`
//   (YouTube id; makes the header playable).
export const caseStudies = [
  {
    slug: 'shivender-kanwar',
    client: 'Shivender Kanwar',
    title: 'Shivender Kanwar',
    subtitle: 'Taking an ex-Para SF commando from 205K to 600K Instagram followers — and growing his YouTube subscribers by 40%.',
    category: 'Creator · Instagram & YouTube',
    platforms: 'Instagram · YouTube',
    headline: { value: '600K', label: 'Instagram followers' },
    services: ['Content strategy', 'Reels & Shorts', 'Long-form YouTube', 'Channel management'],
    hero: '/assets/img/people/shivender-field.webp',
    cover: '/assets/img/people/shivender-kanwar.webp',
    video: 'jIRnbOJONdg',
    stats: [
      { value: '600K', label: 'Instagram followers' },
      { value: '+395K', label: 'New Instagram followers' },
      { value: '2.9X', label: 'Instagram audience' },
      { value: '+40%', label: 'YouTube subscribers' },
    ],
    overview:
      'Shivender Kanwar is an ex-Para Special Forces commando with stories most people never get to hear. When we started working together he already had an audience — 205K followers on Instagram — but growth had flattened, and the attention wasn’t yet turning into a lasting creator business. We rebuilt his content engine across Instagram and YouTube.',
    challenge:
      'A powerful personal story is not the same as a content system. Posting was inconsistent, formats changed from week to week, and ideas rarely travelled from one platform to the next. The audience liked him; the algorithm didn’t know what to do with him. The brief: turn real military experience into repeatable, high-retention content — and turn that reach into brand demand.',
    approach: [
      { title: 'Story extraction', text: 'Long-form interview sessions to mine his experiences — missions, training, discipline and life after the forces — into a bank of hooks, stories and episode ideas.' },
      { title: 'Instagram-first short form', text: 'Reels engineered for the first three seconds: pattern-interrupt openings, tight edits and captions built for shares and saves, with a consistent look so every post is recognisable in the feed.' },
      { title: 'Depth on YouTube', text: 'Longer storytelling and Shorts that give the audience somewhere to go deeper — turning casual followers into subscribers who stay.' },
      { title: 'Test, measure, double down', text: 'Weekly reviews of retention and engagement. Formats that worked became recurring series; formats that didn’t were cut.' },
    ],
    deliverables: ['Reels', 'YouTube Shorts', 'Long-form YouTube episodes', 'Story & interview series', 'Thumbnails & covers', 'Captions & copy', 'Channel management'],
    growth: {
      items: [
        { platform: 'Instagram', unit: 'followers', from: 205, to: 600, fromLabel: '205K', toLabel: '600K' },
        { platform: 'YouTube', unit: 'subscribers', from: 100, to: 140, fromLabel: 'Start', toLabel: '+40%' },
      ],
    },
    results:
      'Instagram grew from 205K to 600K followers — almost three times the audience, with 395K new followers — while YouTube subscribers rose by 40%. Just as important, a bigger and more engaged audience made Shivender a far more valuable partner for brands: brand collaborations have grown steadily alongside the channels.',
    outcomes: [
      'Instagram: 205K → 600K followers (2.9×)',
      'YouTube: +40% subscribers',
      'More, and more frequent, brand collaborations',
      'A recognisable content identity across platforms',
    ],
    learnings: 'An audience is only an asset if it keeps growing. Authentic stories, packaged with discipline, compound on every platform.',
  },
  {
    slug: 'fitfinfluencer',
    client: 'Fitfinfluencer',
    title: 'Fitfinfluencer',
    subtitle: 'From zero to 63K+ followers across Instagram, Facebook, X and YouTube — in six months.',
    category: 'Creator · Fitness & Finance',
    platforms: 'Instagram · Facebook · X · YouTube',
    duration: '6 months',
    headline: { value: '63K+', label: 'followers in 6 months' },
    services: ['Positioning', 'Content strategy', 'Short-form production', 'Multi-platform distribution'],
    hero: '/assets/img/covers/fitfinfluencer-wide.webp',
    cover: '/assets/img/covers/fitfinfluencer.webp',
    logo: '/assets/img/logos/fitfinfluencer.svg',
    stats: [
      { value: '~30K', label: 'Instagram followers' },
      { value: '22K', label: 'Facebook followers' },
      { value: '6K', label: 'X followers' },
      { value: '5K', label: 'YouTube subscribers' },
    ],
    overview:
      'Fitfinfluencer is a creator brand built where fitness meets finance — discipline in the gym and discipline with money. We launched it from scratch six months ago, with zero followers on any platform, and built its audience across four channels at once.',
    challenge:
      'Starting from nothing, in two of the most crowded niches online. No audience, no content library, no algorithmic history — and a position that had to be sharp enough to stand out from day one.',
    approach: [
      { title: 'Own the intersection', text: 'Instead of competing as one more fitness page or one more finance page, we positioned the brand where the two meet, with a clear point of view and a consistent voice.' },
      { title: 'Instagram as the engine', text: 'A high-frequency system of Reels and carousels: hook-first openings, recurring series and save-worthy formats designed to make following a habit.' },
      { title: 'One idea, four platforms', text: 'Every core idea was adapted natively for Facebook, X and YouTube — the right edit, caption and format for each platform, not copy-paste reposting.' },
      { title: 'Weekly optimisation', text: 'Reach, saves, shares and follower growth reviewed every week. The formats that won became series; the rest were dropped.' },
    ],
    deliverables: ['Reels', 'Carousels', 'YouTube videos & Shorts', 'X posts & threads', 'Facebook videos', 'Captions & copy', 'Content calendar'],
    growth: {
      max: 'shared',
      items: [
        { platform: 'Instagram', unit: 'followers', from: 0, to: 30, fromLabel: '0', toLabel: '~30K' },
        { platform: 'Facebook', unit: 'followers', from: 0, to: 22, fromLabel: '0', toLabel: '22K' },
        { platform: 'X', unit: 'followers', from: 0, to: 6, fromLabel: '0', toLabel: '6K' },
        { platform: 'YouTube', unit: 'subscribers', from: 0, to: 5, fromLabel: '0', toLabel: '5K' },
      ],
    },
    results:
      'In six months Fitfinfluencer went from zero to almost 30K followers on Instagram, 22K on Facebook, 6K on X and 5K subscribers on YouTube: more than 63,000 followers across four platforms, from a standing start.',
    outcomes: [
      'Instagram: 0 → ~30K followers',
      'Facebook: 0 → 22K followers',
      'X: 0 → 6K followers',
      'YouTube: 0 → 5K subscribers',
      '63K+ combined audience in 6 months',
    ],
    learnings: 'A new brand doesn’t need a head start. It needs a sharp position and a system that ships every day.',
  },
  {
    slug: 'omnibook',
    client: 'Omnibook',
    title: 'Omnibook',
    subtitle: 'Brand films and founder-led content for the world’s first agentic exchange for prediction markets — from early traction to funding.',
    category: 'Fintech · Prediction markets',
    platforms: 'Brand & founder channels',
    headline: { value: 'Funded', label: 'after we built its story' },
    services: ['Brand videos', 'Founder-led content', 'Explainers', 'Social growth'],
    hero: '/assets/img/covers/omnibook-wide.webp',
    cover: '/assets/img/covers/omnibook.webp',
    logo: '/assets/img/logos/omnibook.svg',
    stats: [
      { value: 'Funded', label: 'Raised a funding round' },
      { value: 'World’s first', label: 'Agentic exchange for prediction markets' },
      { value: 'Brand videos', label: 'Explaining the product & vision' },
      { value: 'Founder-led', label: 'Content from the team building it' },
    ],
    overview:
      'Omnibook is building the world’s first agentic exchange for prediction markets — a genuinely new idea, in a category most people are only beginning to understand. We became their content team: brand videos that explain what Omnibook is, and founder-level content that shows who is building it.',
    challenge:
      'New categories have a trust problem. Prediction markets are unfamiliar, and “agentic exchange” is a concept few people had heard of. Omnibook needed to look credible to users, partners and investors at the same time — and to build traction before it had a large marketing budget.',
    approach: [
      { title: 'Brand videos', text: 'Films that explain the product and the vision simply: what an agentic exchange is, why it matters for prediction markets, and why Omnibook is the team to build it.' },
      { title: 'Founder-level content', text: 'A steady stream of founder-led content — perspectives, product thinking and market takes — putting a credible, human face on a new category.' },
      { title: 'Explain, then amplify', text: 'Short cut-downs, explainers and timely takes around real-world events kept Omnibook in the conversation and its story easy to share.' },
      { title: 'One story, three audiences', text: 'The same narrative shaped for users, the industry and investors, so every piece worked as marketing and as credibility at once.' },
    ],
    deliverables: ['Brand videos', 'Founder-led videos', 'Product explainers', 'Short-form cut-downs', 'Social content'],
    results:
      'The content gave Omnibook a clear, credible story in a brand-new category — and growing traction to go with it. Omnibook has since raised funding, and keeps building in public with a content engine that grows alongside the company.',
    outcomes: [
      'Raised a funding round',
      'A clear, credible brand story in a brand-new category',
      'Founders established as visible voices in prediction markets',
      'Growing traction across its channels',
    ],
    learnings: 'In a new category, the story is the product’s first feature. Explain it clearly, and put the founders in front of it.',
  },
  {
    slug: 'ideabro',
    client: 'Ideabro',
    title: 'Ideabro',
    subtitle: 'Launch videos, brand films and explainers for an AI creative agency — and an Instagram grown to 16K followers.',
    category: 'AI · Creative agency',
    platforms: 'Instagram',
    headline: { value: '16K', label: 'Instagram followers' },
    services: ['Launch videos', 'Brand films', 'Explainer videos', 'Instagram growth'],
    hero: '/assets/img/covers/ideabro-wide.webp',
    cover: '/assets/img/covers/ideabro.webp',
    logo: '/assets/img/logos/ideabro.svg',
    stats: [
      { value: '16K', label: 'Instagram followers' },
      { value: 'Launch', label: 'Videos that introduced the agency' },
      { value: 'Brand films', label: 'Showing the quality of the work' },
      { value: 'Explainers', label: 'Demystifying AI creative' },
    ],
    overview:
      'Ideabro is an AI creative agency, and its content had to prove a point most agencies only claim: that AI can make creative work with real taste. We produced its launch videos, brand films and explainers, and grew its Instagram into a channel that works as both portfolio and pipeline.',
    challenge:
      'AI creative is everywhere, and most of it looks the same. Ideabro needed to stand apart from generic AI output, explain what it actually does, and reach the brands that would hire it.',
    approach: [
      { title: 'Launch videos', text: 'Launch content that introduced Ideabro with energy and clarity: what the agency does, who it is for and why it is different.' },
      { title: 'Brand films', text: 'Films that show the quality of the work instead of describing it, setting the visual bar for the whole brand.' },
      { title: 'Explainer videos', text: 'Clear explainers that make the AI creative process easy to understand — the how behind the results.' },
      { title: 'Instagram growth', text: 'A consistent rhythm of showcases, behind-the-scenes and trend-led posts, turning the feed into a living portfolio.' },
    ],
    deliverables: ['Launch videos', 'Brand films', 'Explainer videos', 'Reels', 'Showcases & BTS', 'Captions & copy'],
    growth: {
      items: [{ platform: 'Instagram', unit: 'followers', from: 0, to: 16, fromLabel: '', toLabel: '16K' }],
    },
    results:
      'Ideabro’s Instagram has grown to 16K followers, backed by a library of launch videos, brand films and explainers that show — rather than tell — what the agency can do.',
    outcomes: [
      '16K Instagram followers',
      'A launch, brand-film and explainer video library',
      'A clear, differentiated story in AI creative',
      'A feed that works as both portfolio and pipeline',
    ],
    learnings: 'When everyone can generate, taste is the differentiator. Show the process, not just the output.',
  },
  {
    slug: 'alpha-premier-league',
    client: 'Blackrose',
    title: 'Alpha Premier League',
    subtitle: 'Launching Alpha Premier League by Blackrose with a film and content built to make noise.',
    category: 'Launch · Brand film',
    platforms: 'Instagram · YouTube',
    headline: { value: 'Launch film', label: 'by Blackrose' },
    services: ['Launch film', 'Motion design', 'Social content', 'Distribution'],
    hero: '/assets/img/work/alpha-premier-league.webp',
    cover: '/assets/img/work/alpha-premier-league.webp',
    video: 'NH51G258gTg',
    stats: [
      { value: 'Blackrose', label: 'Client' },
      { value: 'Launch film', label: 'Hero asset' },
      { value: 'Motion', label: 'Design-led identity' },
      { value: 'Campaign', label: 'Before, during & after launch' },
    ],
    overview:
      'Alpha Premier League by Blackrose needed to arrive with impact. We produced the launch film and the content around it — one hero asset, cut into a campaign.',
    challenge:
      'A launch gets one first impression. The league needed an identity that announced it with energy and gave people a reason to follow from day one.',
    approach: [
      { title: 'Launch film', text: 'A high-energy hero film that introduces the league with a bold, memorable look.' },
      { title: 'Motion design', text: 'Design-led motion graphics that give the league a distinct visual identity on screen.' },
      { title: 'Social cut-downs', text: 'The film cut into teasers and short-form assets for Instagram and YouTube, so the launch could travel.' },
    ],
    deliverables: ['Launch film', 'Motion design', 'Teasers', 'Social cut-downs'],
    results:
      'A launch with a clear, memorable identity on screen — and a library of content that kept the league in front of its audience before, during and after launch.',
    outcomes: ['A launch film with a bold identity', 'Teasers and cut-downs for the full launch cycle'],
    learnings: 'A launch is a story, not a post. Build one hero asset, then make it travel.',
  },
];

// "Who we are" page.
export const about = {
  intro:
    'Attention Labs is a content-led growth agency — a full-stack content studio based in Lucknow, India. We plan, shoot, produce and run content for brands, foundations, organizations, businesses and founders, from the first strategy call to the last published post.',
  statement:
    'Most companies rent attention through ads. We help them build media they own: films, channels and social presence that keep working long after the campaign ends.',
  pillars: [
    { k: 'Think', text: 'We build the content strategy — for the brand as a whole and for each platform.' },
    { k: 'Make', text: 'We produce brand films, campaign films, shoots, podcasts and everyday social content in-house.' },
    { k: 'Run', text: 'We manage your social channels day to day, from calendars and posting to community and reporting.' },
    { k: 'Grow', text: 'We track what works, double down on it and turn content into reach, trust and demand.' },
  ],
  services: [
    {
      title: 'Production',
      text: 'End to end: concept, script, casting, shoot, edit, colour, sound and final delivery.',
      items: ['Brand films that tell who you are and why you matter', 'Campaign films built around a launch, a cause or a moment', 'Shoots: photo and video for products, people, events and places', 'Short-form content: Reels, Shorts and vertical video made for social', 'Podcasts and video series that we build and run for you'],
    },
    {
      title: 'Social media management',
      text: 'We run your social presence so you don’t have to.',
      items: ['Monthly content calendars and posting', 'Copywriting, design and editing for every post', 'Community management: comments, DMs and engagement', 'Monthly performance reports with clear next steps'],
    },
    {
      title: 'Strategy & implementation',
      text: 'Our strategy team sets the direction, and the same team puts it into action.',
      items: ['Brand and content positioning: what you stand for and how you sound', 'Audience research and competitor analysis', 'Content pillars, formats and posting rhythm', 'Separate strategies for each platform', 'Ongoing testing and optimisation based on real data'],
    },
  ],
  platforms: [
    { name: 'Instagram', does: 'Brand look, reach and community', make: 'Reels, carousels, Stories, creator collaborations' },
    { name: 'YouTube', does: 'Long-term discovery and depth', make: 'Brand films, series, podcasts, Shorts' },
    { name: 'LinkedIn', does: 'Trust, thought leadership and B2B reach', make: 'Founder and leadership posts, company stories, short videos' },
    { name: 'X', does: 'Real-time voice and industry conversation', make: 'Threads, quick takes, launch and event coverage' },
    { name: 'Facebook', does: 'Wider and local communities, paid reach', make: 'Videos, community posts, campaign and ad creatives' },
  ],
  audience:
    'We work with brands, foundations, non-profits, organizations, businesses, funds and founders. We are a strong fit for teams that have a story to tell but no in-house content engine to tell it.',
  steps: [
    { title: 'Discovery call', text: 'We learn your goals, your audience and what has or hasn’t worked so far.' },
    { title: 'Strategy', text: 'We set positioning, content pillars and a plan for each platform.' },
    { title: 'Production', text: 'We script, shoot and edit films, shoots and social content.' },
    { title: 'Publish & manage', text: 'We run your channels, post on schedule and handle the community.' },
    { title: 'Measure & improve', text: 'Monthly reports — then we sharpen what works and drop what doesn’t.' },
  ],
  sprint: 'Not sure yet? Start with The Sprint: a 30-day proof-of-concept that shows results before you commit long term.',
  why: [
    { title: 'One team, end to end', text: 'Strategy, production and social management sit under one roof, so the idea and the execution never drift apart.' },
    { title: 'Every platform, its own plan', text: 'Instagram, LinkedIn, X, YouTube and Facebook each get a strategy built for how people actually use them.' },
    { title: 'Media you own, not attention you rent', text: 'We build channels and content libraries that keep paying off after the ad spend stops.' },
    { title: 'Fast start', text: 'You give us about one interview a month. First assets go live within 2 weeks.' },
  ],
};
