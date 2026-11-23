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
  title: `Attention Labs reel — ${String(i + 1).padStart(2, '0')}`,
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

// Case studies.
// - `metrics`: verified, numeric results (count-up animation). Only add real numbers.
// - `facts`: snapshot cards shown when there are no published metrics yet.
//   To publish results, replace `facts` with `metrics: [{ value: '250K+', label: 'Followers' }, …]`.
// - `cover` (cards, 4:3) / `hero` (case-study header, wide) / optional `logo`:
//   swap the paths when the final client artwork arrives.
// - `video`: optional YouTube id, shown as a playable film on the case-study page.
// - `gallery`: optional pair of extra images shown under the results.
export const caseStudies = [
  {
    slug: 'shivender-kanwar',
    client: 'Shivender Kanwar',
    title: 'Shivender Kanwar',
    subtitle: 'From zero to 100K+ subscribers: building a military content empire on YouTube.',
    category: 'Creator · YouTube',
    platforms: 'YouTube',
    headline: { value: '100K+', label: 'Subscribers' },
    services: ['Channel strategy', 'Long-form production', 'Short-form', 'Distribution'],
    hero: '/assets/img/people/shivender-field.webp',
    cover: '/assets/img/people/shivender-kanwar.webp',
    video: 'jIRnbOJONdg',
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
    slug: 'fitfinfluencer',
    client: 'Fitfinfluencer',
    title: 'Fitfinfluencer',
    subtitle: 'Growing an Instagram creator brand at the intersection of fitness and finance.',
    category: 'Creator · Instagram',
    platforms: 'Instagram',
    headline: { value: 'Fitness × Finance', label: 'on Instagram' },
    services: ['Positioning', 'Content strategy', 'Short-form production', 'Instagram growth'],
    hero: '/assets/img/covers/fitfinfluencer-wide.webp',
    cover: '/assets/img/covers/fitfinfluencer.webp',
    challenge:
      'Fitness and finance are two of the most crowded niches on Instagram. Fitfinfluencer needed a sharp, ownable position — and a content system that could ship consistently without burning out the creator.',
    strategy:
      'We positioned the brand where the two niches meet — discipline in the gym, discipline with money — and built a repeatable short-form engine around it: hook-first Reels, recurring formats and carousels engineered for saves and shares.',
    results:
      'A consistent, recognisable Instagram presence with growing reach, engagement and community — in an intersection the creator now owns.',
    facts: [
      { value: 'Instagram', label: 'Platform' },
      { value: 'Fitness × Finance', label: 'Niche' },
      { value: 'Reels & carousels', label: 'Formats' },
      { value: 'Growth engine', label: 'Engagement' },
    ],
    learnings: 'A crowded niche isn’t a problem when you own the intersection. Positioning first, volume second.',
  },
  {
    slug: 'omnibook',
    client: 'Omnibook',
    title: 'Omnibook',
    subtitle: 'Making a prediction-markets exchange easy to understand — and worth following.',
    category: 'Fintech · Prediction markets',
    platforms: 'Instagram · YouTube',
    headline: { value: 'Exchange', label: 'for prediction markets' },
    services: ['Brand content', 'Explainer videos', 'Social growth', 'Distribution'],
    hero: '/assets/img/covers/omnibook-wide.webp',
    cover: '/assets/img/covers/omnibook.webp',
    challenge:
      'Prediction markets are new to most people. Omnibook needed to explain how its exchange works, build trust in a category that sounds complex, and grow an audience across its social channels.',
    strategy:
      'We turned the product into stories: short explainers, market breakdowns and timely content around real-world events — making the exchange easy to understand and easy to share across Instagram and YouTube.',
    results:
      'A stronger, more consistent presence across Omnibook’s channels, with content that does the explaining before the first sign-up.',
    facts: [
      { value: 'Prediction markets', label: 'Sector' },
      { value: 'Instagram · YouTube', label: 'Platforms' },
      { value: 'Explainers & breakdowns', label: 'Formats' },
      { value: 'Growth engine', label: 'Engagement' },
    ],
    learnings: 'In a new category, education is distribution. If people understand it, they share it.',
  },
  {
    slug: 'ideabro',
    client: 'IdeaBro',
    title: 'IdeaBro',
    subtitle: 'Showing what an AI creative agency can do — with content that proves it.',
    category: 'AI · Creative agency',
    platforms: 'Instagram · YouTube',
    headline: { value: 'AI creative', label: 'agency growth' },
    services: ['Content strategy', 'Short-form video', 'Social growth', 'Brand storytelling'],
    hero: '/assets/img/covers/ideabro-wide.webp',
    cover: '/assets/img/covers/ideabro.webp',
    challenge:
      'AI creative is everywhere, and most of it looks the same. IdeaBro needed content that showcased its quality, set it apart from generic AI output and brought in the right clients.',
    strategy:
      'We built a showcase-driven content engine: behind-the-scenes of real AI workflows, before/after transformations and fast-turnaround trend content — packaged for Instagram and YouTube.',
    results:
      'A sharper brand presence and a growing audience across IdeaBro’s channels, with content that works as both a portfolio and a pipeline.',
    facts: [
      { value: 'AI creative', label: 'Sector' },
      { value: 'Instagram · YouTube', label: 'Platforms' },
      { value: 'Showcases & BTS', label: 'Formats' },
      { value: 'Growth engine', label: 'Engagement' },
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
    challenge:
      'Alpha Premier League by Blackrose needed a launch that cut through — something that announced the league with energy and gave people a reason to follow from day one.',
    strategy:
      'We produced a high-energy launch film with bold motion design, then cut it into a run of social assets for Instagram and YouTube to build anticipation before, during and after launch.',
    results:
      'A launch with a clear, memorable identity on screen — and a library of content that kept the league in front of its audience.',
    facts: [
      { value: 'Blackrose', label: 'Client' },
      { value: 'Launch film', label: 'Hero asset' },
      { value: 'Instagram · YouTube', label: 'Platforms' },
      { value: 'Launch campaign', label: 'Engagement' },
    ],
    learnings: 'A launch is a story, not a post. Build one hero asset, then make it travel.',
  },
];
