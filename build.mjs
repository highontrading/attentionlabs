// ---------------------------------------------------------------------------
// Attention Labs — static site generator (zero dependencies)
// Usage: node build.mjs   →  writes the finished website to ./dist
// ---------------------------------------------------------------------------
import { mkdirSync, rmSync, writeFileSync, readFileSync, cpSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import {
  site, nav, stats, clients, problemFix, audiences, services, whyUs, ownedMedia,
  guarantees, process as steps, anatomy, labReport, testimonials, faqs, work, caseStudies, reel,
} from './src/data.mjs';

const OUT = 'dist';
const hash = (f) => createHash('md5').update(readFileSync(f)).digest('hex').slice(0, 8);
const V = { css: hash('assets/css/style.css'), js: hash('assets/js/main.js') };

// ---------- helpers --------------------------------------------------------
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');
const label = (t) => `<span class="label">( ${t} )</span>`;
const arrow = `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg>`;
const arrowR = `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg>`;
const plus = `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`;
const roll = (t) => `<span class="roll"><span class="roll__in" data-text="${esc(t)}">${esc(t)}</span></span>`;

const btn = (text, href, { variant = 'dark', ext = false, icon = true, attrs = '' } = {}) =>
  `<a class="btn btn--${variant}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''} data-magnetic ${attrs}>${roll(text)}${icon ? `<span class="btn__ico">${arrow}</span>` : ''}</a>`;

// Split "100K+" → {prefix:'', num:100, suffix:'K+'} for count-up animations.
const countAttrs = (v) => {
  const m = String(v).match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return `>${esc(v)}`;
  return ` data-count="${m[2]}" data-prefix="${esc(m[1])}" data-suffix="${esc(m[3])}">${esc(v)}`;
};

const img = (src, alt = '', { cls = '', eager = false, sizes = '' } = {}) =>
  `<img src="${src}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;

// ---------- layout ---------------------------------------------------------
const header = (path) => `
<header class="hdr" data-hdr>
  <a class="hdr__logo" href="/" aria-label="${site.name} — home">${site.wordmark}<sup>®</sup></a>
  <nav class="hdr__links" aria-label="Primary">
    ${nav.slice(1, 4).map((n) => `<a href="${n.href}"${path === n.href ? ' aria-current="page"' : ''}>${roll(n.label)}</a>`).join('')}
  </nav>
  <div class="hdr__actions">
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" data-menu-toggle>
      <span class="menu-btn__icon" aria-hidden="true"><i></i><i></i></span>
      <span class="menu-btn__text"><span>Menu</span><span>Close</span></span>
    </button>
    <a class="btn btn--dark btn--sm" href="/contact/" data-magnetic>${roll("Let's talk")}</a>
  </div>
</header>

<div class="menu" id="menu" aria-hidden="true" data-menu>
  <div class="menu__inner">
    <div class="menu__preview" aria-hidden="true">
      ${nav.map((n, i) => `<img src="${n.img}" alt="" data-menu-img="${i}"${i === 0 ? ' class="is-on"' : ''} loading="lazy">`).join('')}
    </div>
    <nav class="menu__nav" aria-label="Menu">
      <ul>
        ${nav.map((n, i) => `<li style="--i:${i}"><a class="menu__link" href="${n.href}" data-menu-link="${i}"${path === n.href ? ' aria-current="page"' : ''}><span class="menu__idx">${pad(i + 1)}</span><span class="menu__txt"><span>${n.label}</span></span></a></li>`).join('')}
      </ul>
    </nav>
    <div class="menu__foot">
      <div><span class="menu__k">Say hello</span><a href="mailto:${site.email}">${site.email}</a><a href="${site.phoneHref}">${site.phone}</a></div>
      <div><span class="menu__k">Studio</span>${site.address.map((a) => `<span>${a}</span>`).join('')}</div>
      <div><span class="menu__k">Follow</span>${site.socials.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join('')}</div>
    </div>
  </div>
</div>`;

const footer = () => `
<footer class="ftr">
  <div class="ftr__cta container">
    <div class="ftr__cta-top">${label('Ready?')}<span class="status"><i></i>${site.availability}</span></div>
    <h2 class="ftr__title" data-split>Let’s build media <em>you own.</em></h2>
    <div class="ftr__cta-row">
      <p class="ftr__lead" data-reveal="fade">Book a call. We’ll tell you if we can help — and if we can’t, we’ll tell you that too.</p>
      <div class="ftr__btns" data-reveal="fade">
        ${btn('Book a call', '/contact/', { variant: 'light' })}
        ${btn(site.email, `mailto:${site.email}`, { variant: 'ghost-light', icon: false })}
      </div>
    </div>
  </div>
  <div class="ftr__grid container">
    <div class="ftr__col"><span class="ftr__k">Pages</span>${nav.map((n) => `<a href="${n.href}">${roll(n.label)}</a>`).join('')}</div>
    <div class="ftr__col"><span class="ftr__k">Socials</span>${site.socials.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${roll(s.label)}</a>`).join('')}</div>
    <div class="ftr__col"><span class="ftr__k">Contact</span><a href="mailto:${site.email}">${roll(site.email)}</a><a href="${site.phoneHref}">${roll(site.phone)}</a></div>
    <div class="ftr__col"><span class="ftr__k">Studio</span>${site.address.map((a) => `<span>${a}</span>`).join('')}<span class="ftr__clock">Gurugram <b data-clock>--:--</b> IST</span></div>
  </div>
  <div class="ftr__mark container" aria-hidden="true"><div class="fit-wrap" data-fit><span class="fit">${site.wordmark}<sup>®</sup></span></div></div>
  <div class="ftr__bar container">
    <span>© <span data-year>2026</span> ${site.name}. All rights reserved.</span>
    <span>${site.tagline}</span>
    <button type="button" class="ftr__top" data-to-top>${roll('Back to top')}<span class="btn__ico btn__ico--up">${arrow}</span></button>
  </div>
</footer>`;

const layout = ({ title, description = site.description, path = '/', body, pt = 'Home', cls = '', head = '' }) => {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — Content-Led Growth Agency`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#F1F1EF">
<link rel="canonical" href="${site.url}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}${path}">
<meta property="og:image" content="${site.url}/assets/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/inter-tight-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/style.css?v=${V.css}">
<script>document.documentElement.classList.add('js');</script>
<script type="speculationrules">{"prerender":[{"where":{"and":[{"href_matches":"/*"},{"not":{"selector_matches":"[target=_blank], [download]"}}]},"eagerness":"moderate"}]}</script>
${head}
</head>
<body class="${cls}" data-page="${esc(pt)}">
<a class="skip" href="#main">Skip to content</a>

<div class="cursor" aria-hidden="true"><span class="cursor__label" data-cursor-label></span></div>
<div class="hover-reveal" aria-hidden="true"><div class="hover-reveal__in"></div></div>

${header(path)}

<main id="main">
${body}
</main>
${footer()}

<div class="lightbox" role="dialog" aria-modal="true" aria-label="Video player" aria-hidden="true" data-lightbox>
  <div class="lightbox__bg" data-lightbox-close></div>
  <div class="lightbox__frame"><div class="lightbox__media" data-lightbox-media></div>
    <div class="lightbox__bar"><span data-lightbox-title></span><button type="button" class="lightbox__close" data-lightbox-close>${roll('Close')}<span class="btn__ico">${plus}</span></button></div>
  </div>
</div>

<script src="/assets/vendor/lenis.min.js" defer></script>
<script src="/assets/js/main.js?v=${V.js}" defer></script>
</body>
</html>`;
};

// ---------- reusable sections ---------------------------------------------
const pageHero = ({ k, title, lead, extra = '' }) => `
<section class="phero container">
  <div class="phero__top">${label(k)}<span class="status"><i></i>${site.availability}</span></div>
  <h1 class="phero__title" data-split>${title}</h1>
  <div class="phero__row">
    <span></span>
    <p class="phero__lead" data-reveal="fade">${lead}</p>
  </div>
  ${extra}
</section>`;

const statsBlock = () => `
<section class="stats container">
  ${stats.map((s, i) => `<div class="stat" data-reveal="fade" style="--d:${i * 0.1}s">
    <span class="stat__idx">${pad(i + 1)}</span>
    <span class="stat__num" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
    <span class="stat__label">${s.label}</span>
  </div>`).join('')}
</section>`;

const logoMarquee = () => {
  const row = clients.map((c) => `<li><img src="${c.src}" alt="${esc(c.name)}" loading="lazy"></li>`).join('');
  return `<div class="logos" data-reveal="fade"><span class="logos__k">Trusted by</span><div class="logos__viewport"><ul class="logos__track">${row}${row.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"')}</ul></div></div>`;
};

const caseCard = (c, i) => `
<article class="card" data-reveal="fade" style="--d:${(i % 2) * 0.12}s">
  <a href="/case-studies/${c.slug}/" data-cursor="View">
    <div class="card__media media" data-reveal="img">${img(c.cover, c.title)}</div>
    <div class="card__meta"><span class="card__name">${c.title}</span><span class="card__tag">${c.category}</span><span class="card__kind">Case study</span></div>
  </a>
</article>`;

const testimonialsBlock = () => `
<section class="quotes" data-slider>
  <div class="quotes__inner container">
    <div class="quotes__head">${label('What clients say')}<span class="quotes__count"><b data-slider-index>01</b> / ${pad(testimonials.length)}</span></div>
    <div class="quotes__stage">
      ${testimonials.map((t, i) => `<figure class="quote${i === 0 ? ' is-active' : ''}" data-slide>
        <blockquote class="quote__text" data-split-static>“${t.quote}”</blockquote>
        <figcaption class="quote__by"><img src="${t.img}" alt="${esc(t.name)}" loading="lazy"><span><b>${t.name}</b><span>${t.role}</span></span></figcaption>
      </figure>`).join('')}
    </div>
    <div class="quotes__nav">
      <div class="quotes__progress"><i data-slider-bar></i></div>
      <div class="quotes__btns">
        <button type="button" class="circ" data-slider-prev aria-label="Previous testimonial"><span class="circ__flip">${arrowR}</span></button>
        <button type="button" class="circ" data-slider-next aria-label="Next testimonial">${arrowR}</button>
      </div>
    </div>
  </div>
</section>`;

const faqBlock = () => `
<section class="faq container">
  <div class="faq__side">
    ${label('FAQs')}
    <h2 class="h2" data-split>Quick answers.</h2>
    <p class="muted" data-reveal="fade">Still curious? We’re one call away.</p>
    <div data-reveal="fade">${btn('Book a call', '/contact/')}</div>
  </div>
  <div class="acc" data-acc>
    ${faqs.map((f, i) => `<div class="acc__item" data-reveal="fade" style="--d:${i * 0.06}s">
      <button type="button" class="acc__q" aria-expanded="false" aria-controls="faq-${i}" id="faq-q-${i}"><span class="acc__idx">${pad(i + 1)}</span><span class="acc__t">${f.q}</span><span class="acc__ico">${plus}</span></button>
      <div class="acc__a" id="faq-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${f.a}</p></div></div>
    </div>`).join('')}
  </div>
</section>`;

// ---------- pages ----------------------------------------------------------
// Hero reel: silent preview loops in a moving strip. Videos load + play only
// while on screen (see main.js); click opens the full video with sound.
const reelTile = (v, i, dup) => `<li class="tile tile--video" style="--r:${v.r.toFixed(4)}">
    <button type="button" class="tile__btn" data-reel-full="${v.full}" data-video-title="${esc(v.title)}" data-cursor="Play"${dup ? ' tabindex="-1" aria-hidden="true"' : ` aria-label="Play ${esc(v.title)} with sound"`}>
      <video muted loop playsinline preload="none" poster="${v.poster}" data-reel-src="${v.src}" disablepictureinpicture></video>
      <span class="tile__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
    </button>
  </li>`;

const home = () => layout({
  path: '/',
  pt: 'Home',
  cls: 'page-home',
  head: `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url,
    email: site.email, telephone: site.phone, description: site.description,
    address: { '@type': 'PostalAddress', streetAddress: site.address[0], addressLocality: 'Gurugram', addressCountry: 'IN' },
    sameAs: site.socials.map((s) => s.href),
  })}</script>`,
  body: `
<section class="hero">
  <h1 class="hero__mark" data-fit aria-label="${site.name}"><span class="fit" data-split="chars"><span class="hero__l1">Attention</span><span class="hero__l2">Labs<sup>®</sup></span></span></h1>
  <div class="hero__meta">
    <span class="hero__est status" data-hero-fade><i></i>${site.availability}</span>
    <p class="hero__tag" data-hero-fade>Content-Led Growth Agency <span class="star" aria-hidden="true">✳</span> ${site.tagline}</p>
    <p class="hero__soc" data-hero-fade>( ${site.socials.map((s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${s.short}</a>`).join(' / ')} )</p>
  </div>
</section>

<section class="strip" aria-label="Showreel">
  <ul class="strip__track" data-reel>${reel.map((v, i) => reelTile(v, i, false)).join('')}${reel.map((v, i) => reelTile(v, i, true)).join('')}</ul>
</section>

<section class="about container" id="about">
  <div class="about__k">${label('About')}<span class="about__note" data-reveal="fade">Content-led growth for founders, funds & brands.</span></div>
  <div class="about__main">
    <p class="about__text" data-fill>We’re ${site.name}® — a content-led growth studio that turns founders, funds and brands into media you own. Content that ranks, gets shared, and generates demand while you sleep.</p>
    <div class="about__cta" data-reveal="fade">${btn('Our services', '/services/', { variant: 'dark' })}${btn('View work', '/work/', { variant: 'ghost' })}</div>
    ${logoMarquee()}
  </div>
</section>

${statsBlock()}

<section class="latest container" id="work">
  <div class="sec-head"><h2 class="h2" data-split>Latest projects</h2><a class="label link" href="/case-studies/">( Case studies )</a></div>
  <div class="cards">${caseStudies.map(caseCard).join('')}</div>
  <div class="center" data-reveal="fade">${btn('See all case studies', '/case-studies/', { variant: 'ghost' })}</div>
</section>

<section class="statement container">
  ${label('The Problem → The Fix')}
  <h2 class="statement__title" data-split>Most companies <span class="muted-ink">rent</span> attention. We build media you <em>own.</em></h2>
  <div class="pf">
    <div class="pf__col" data-reveal="fade"><span class="pf__k"><i>01</i>The Problem</span><p>${problemFix.problem}</p></div>
    <div class="pf__col" data-reveal="fade" style="--d:.12s"><span class="pf__k"><i>02</i>The Fix</span><p>${problemFix.fix}</p></div>
  </div>
</section>

<section class="who container">
  <div class="sec-head"><h2 class="h2" data-split>Who this is for</h2>${label('Fit check')}</div>
  <ol class="rows">
    ${audiences.map((a, i) => `<li class="row" data-reveal="fade" style="--d:${i * 0.08}s"><span class="row__idx">${pad(i + 1)}</span><h3 class="row__title">${a.title}</h3><p class="row__text">${a.text}</p></li>`).join('')}
  </ol>
</section>


${testimonialsBlock()}

<section class="guar container">
  <div class="sec-head"><h2 class="h2" data-split>What you get</h2>${label('Guarantees')}</div>
  <div class="guar__grid">
    ${guarantees.map((g, i) => `<div class="guar__item" data-reveal="fade" style="--d:${i * 0.1}s"><span class="guar__idx">${pad(i + 1)}</span><h3>${g.title}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

${faqBlock()}
`,
});

const workPage = () => {
  const types = ['All', ...new Set(work.map((w) => w.type))];
  return layout({
    title: 'Work',
    path: '/work/',
    pt: 'Work',
    description: 'Selected work by Attention Labs — brand films, launch films, creator channels and motion design.',
    body: `
${pageHero({
  k: 'Portfolio',
  title: `Selected <em>work</em><sup class="phero__sup">(${pad(work.length)})</sup>`,
  lead: 'Explore our work and see how we’ve helped brands capture attention and drive growth through video-led content.',
  extra: `<div class="filters" role="toolbar" aria-label="Filter work" data-reveal="fade">${types.map((t, i) => `<button type="button" class="chip${i === 0 ? ' is-on' : ''}" data-filter="${t}" aria-pressed="${i === 0}">${t}${t === 'All' ? `<sup>${work.length}</sup>` : ''}</button>`).join('')}</div>`,
})}

<section class="work container">
  ${work.map((w, i) => `<article class="witem" data-type="${w.type}" data-reveal="fade" style="--d:${(i % 2) * 0.12}s">
    <button type="button" class="witem__btn" data-video="${w.id}" data-video-title="${esc(`${w.client} — ${w.title}`)}" data-cursor="Play" aria-label="Play ${esc(w.title)}">
      <div class="witem__media media" data-reveal="img">${img(w.img, `${w.client} — ${w.title}`)}<span class="witem__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span></div>
    </button>
    <div class="card__meta"><span class="card__name">${w.title}</span><span class="card__tag">${w.client}</span><span class="card__kind">${w.type}</span></div>
  </article>`).join('')}
</section>

<section class="clients container">
  <div class="sec-head"><h2 class="h2" data-split>Brands & creators we’ve worked with</h2>${label('Clients')}</div>
  <ul class="clients__grid">${clients.map((c, i) => `<li data-reveal="fade" style="--d:${i * 0.05}s"><img src="${c.src}" alt="${esc(c.name)}" loading="lazy"><span>${c.name}</span></li>`).join('')}</ul>
</section>

${statsBlock()}

<section class="latest container">
  <div class="sec-head"><h2 class="h2" data-split>Behind the numbers</h2><a class="label link" href="/case-studies/">( Case studies )</a></div>
  <div class="cards">${caseStudies.slice(0, 2).map(caseCard).join('')}</div>
</section>
`,
  });
};

const caseIndex = () => layout({
  title: 'Case Studies',
  path: '/case-studies/',
  pt: 'Case Studies',
  description: 'Real results from real clients — how Attention Labs builds owned media that compounds.',
  body: `
${pageHero({ k: 'Case studies', title: 'Real results from <em>real clients.</em>', lead: 'See how we’ve helped founders, funds and companies grow through video-led content strategies — measured in subscribers, deal flow and revenue.' })}

<section class="cs-list container" data-hover-list>
  <div class="cs-list__head"><span>No.</span><span>Project</span><span>Sector</span><span>Headline result</span><span></span></div>
  ${caseStudies.map((c, i) => `<a class="cs-row" href="/case-studies/${c.slug}/" data-hover-img="${c.cover}" data-reveal="fade" style="--d:${i * 0.06}s">
    <span class="cs-row__idx">${pad(i + 1)}</span>
    <span class="cs-row__title"><span>${c.title}</span></span>
    <span class="cs-row__cat">${c.category}</span>
    <span class="cs-row__metric"><b>${c.metrics[0].value}</b> ${c.metrics[0].label}</span>
    <span class="cs-row__go">${arrow}</span>
    <span class="cs-row__img">${img(c.cover, c.title)}</span>
  </a>`).join('')}
</section>

<section class="latest container">
  <div class="sec-head"><h2 class="h2" data-split>In pictures</h2>${label(`${pad(caseStudies.length)} projects`)}</div>
  <div class="cards">${caseStudies.map(caseCard).join('')}</div>
</section>
`,
});

const caseDetail = (c, i) => {
  const next = caseStudies[(i + 1) % caseStudies.length];
  return layout({
    title: c.title,
    path: `/case-studies/${c.slug}/`,
    pt: c.title,
    description: `${c.title}: ${c.subtitle}`,
    body: `
<section class="cs-hero container">
  <a class="back" href="/case-studies/"><span class="back__ico">${arrowR}</span>${roll('All case studies')}</a>
  <div class="phero__top">${label(`Case study ${pad(i + 1)}`)}<span class="label">${c.category}</span></div>
  <h1 class="cs-hero__title" data-split>${c.title}</h1>
  <div class="phero__row"><span></span><p class="phero__lead" data-reveal="fade">${c.subtitle}</p></div>
  <dl class="cs-meta" data-reveal="fade">
    <div><dt>Client</dt><dd>${c.client}</dd></div>
    <div><dt>Sector</dt><dd>${c.category}</dd></div>
    <div><dt>Services</dt><dd>${c.services.join(', ')}</dd></div>
    <div><dt>Timeline</dt><dd>${c.metrics.find((m) => m.label === 'Timeline')?.value || '—'}</dd></div>
  </dl>
</section>

<div class="cs-cover container"><div class="media media--tall" data-reveal="img"><img src="${c.hero}" alt="${esc(c.title)}" fetchpriority="high" data-parallax="0.12"></div></div>

<section class="cs-metrics container">
  ${c.metrics.map((m, j) => `<div class="stat" data-reveal="fade" style="--d:${j * 0.08}s"><span class="stat__idx">${pad(j + 1)}</span><span class="stat__num"${countAttrs(m.value)}</span><span class="stat__label">${m.label}</span></div>`).join('')}
</section>

<section class="cs-body container">
  ${[['The Challenge', c.challenge], ['The Strategy', c.strategy], ['The Results', c.results]].map(([k, v], j) => `
  <div class="cs-sec">
    <div class="cs-sec__k">${label(`${pad(j + 1)} — ${k}`)}</div>
    <p class="cs-sec__text" data-reveal="fade">${v}</p>
  </div>`).join('')}
</section>

<div class="cs-gallery container">
  ${c.gallery.map((g, j) => `<div class="media" data-reveal="img" style="--d:${j * 0.12}s"><img src="${g}" alt="" loading="lazy" data-parallax="0.08"></div>`).join('')}
</div>

<section class="cs-learn container">
  ${label('Key learnings')}
  <blockquote class="cs-learn__q" data-split>“${c.learnings}”</blockquote>
</section>

<section class="cs-next container">
  <a href="/case-studies/${next.slug}/" class="cs-next__link" data-cursor="Next">
    ${label('Next case study')}
    <span class="cs-next__title"><span>${next.title}</span><span class="cs-next__ico">${arrow}</span></span>
    <span class="cs-next__img media">${img(next.cover, next.title)}</span>
  </a>
</section>
`,
  });
};

const servicesPage = () => layout({
  title: 'Services',
  path: '/services/',
  pt: 'Services',
  description: 'The Attention Labs methodology: how we turn expertise into owned media that holds attention — and the guarantees behind it.',
  body: `
${pageHero({ k: 'Methodology', title: 'We don’t guess. <em>We test.</em>', lead: 'We are not artists. We are attention engineers. Our process is built on data, not feelings.' })}

<section class="proc container">
  <div class="proc__side"><div class="proc__sticky">${label('The Protocol')}<h2 class="h2" data-split>Three steps from expertise to owned media.</h2></div></div>
  <ol class="proc__list">
    ${steps.map((s, i) => `<li class="proc__item" data-reveal="fade"><span class="proc__num">${pad(i + 1)}</span><div><h3>${s.title}</h3><p>${s.text}</p></div></li>`).join('')}
  </ol>
</section>

<section class="anat container" data-anatomy>
  <div class="sec-head"><h2 class="h2" data-split>Anatomy of a high-retention video</h2>${label('Retention science')}</div>
  <div class="anat__chart" data-reveal="draw">
    <svg viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".14"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>
      <path class="anat__area" d="M0,20 C40,22 80,60 150,78 S300,96 420,102 S650,112 760,118 S880,140 1000,150 L1000,260 L0,260 Z" fill="url(#g)"/>
      <path class="anat__line" d="M0,20 C40,22 80,60 150,78 S300,96 420,102 S650,112 760,118 S880,140 1000,150" fill="none" stroke="currentColor" stroke-width="2.5" pathLength="1"/>
    </svg>
    <div class="anat__y"><span>100%</span><span>50%</span><span>0%</span></div>
  </div>
  <div class="anat__bar" role="list">
    ${anatomy.map((a, i) => `<button type="button" class="anat__seg anat__seg--${i}${i === 0 ? ' is-on' : ''}" data-seg="${i}" role="listitem"><b>${a.key}</b><span>${a.time}</span></button>`).join('')}
  </div>
  <div class="anat__cols">
    ${anatomy.map((a, i) => `<div class="anat__col${i === 0 ? ' is-on' : ''}" data-seg-col="${i}" data-reveal="fade" style="--d:${i * 0.1}s"><span class="anat__time">${a.time}</span><h3>${a.title}</h3><p>${a.text}</p></div>`).join('')}
  </div>
</section>


<section class="why container">
  <div class="sec-head"><h2 class="h2" data-split>Why Attention Labs</h2>${label('Edge')}</div>
  <div class="why__grid">
    ${whyUs.map((w, i) => `<div class="why__item" data-reveal="fade" style="--d:${i * 0.06}s"><span class="why__idx">${pad(i + 1)}</span><h3>${w.title}</h3><p>${w.text}</p></div>`).join('')}
    <div class="why__item why__item--cta" data-reveal="fade"><p>Ready to stop renting attention?</p>${btn('Book a call', '/contact/', { variant: 'light' })}</div>
  </div>
</section>

<section class="owned">
  <div class="owned__inner container">
    <div>${label('Why owned media wins')}<p class="owned__lead" data-reveal="fade">Most companies rent attention. Ads, PR, agencies — it disappears when you stop paying. We build infrastructure that compounds:</p></div>
    <ul class="owned__list">${ownedMedia.map((o, i) => `<li data-reveal="fade" style="--d:${i * 0.06}s"><span>${pad(i + 1)}</span>${o}</li>`).join('')}</ul>
  </div>
  <div class="owned__quote container"><blockquote data-split>“We don’t buy attention. We build machines that generate it.”</blockquote></div>
</section>

<section class="lab container">
  <div class="lab__side">
    ${label('The Lab Report')}
    <h2 class="h2" data-split>Every decision is auditable.</h2>
    <p class="muted" data-reveal="fade">We don’t rely on “creative intuition.” Every edit, every thumbnail, every hook is tested against retention data. If it doesn’t perform, we kill it and iterate. We publish what we learn — no gatekeeping.</p>
  </div>
  <article class="lab__card" data-reveal="fade">
    <div class="lab__head"><span class="lab__dot"></span><b>${labReport.title}</b><span class="label">Lab report</span></div>
    <div class="lab__stats">${labReport.stats.map((s) => `<div><span>${s.label}</span><b>${s.value}</b></div>`).join('')}</div>
    <dl class="lab__rows">${labReport.rows.map((r) => `<div><dt>${r.k}</dt><dd>${r.v}</dd></div>`).join('')}</dl>
  </article>
</section>

<section class="guar container">
  <div class="sec-head"><h2 class="h2" data-split>Our guarantees</h2>${label('Zero risk')}</div>
  <div class="guar__grid">
    ${guarantees.map((g, i) => `<div class="guar__item" data-reveal="fade" style="--d:${i * 0.1}s"><span class="guar__idx">${pad(i + 1)}</span><h3>${g.title}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

${faqBlock()}
`,
});

const contactPage = () => layout({
  title: 'Book a Call',
  path: '/contact/',
  pt: 'Book a Call',
  description: 'Book a 30-minute call with Attention Labs or apply for the Sprint, the Engine or the Build.',
  body: `
${pageHero({ k: 'Book a call', title: 'Let’s <em>talk.</em>', lead: 'We operate with a capped client roster to maintain quality. We are currently accepting 2 partners for next month.' })}

<section class="contact container">
  <aside class="contact__side" data-reveal="fade">
    <div class="contact__block"><span class="ftr__k">E-mail</span><a class="contact__big" href="mailto:${site.email}">${roll(site.email)}</a></div>
    <div class="contact__block"><span class="ftr__k">Phone</span><a class="contact__big" href="${site.phoneHref}">${roll(site.phone)}</a></div>
    <div class="contact__block"><span class="ftr__k">Studio</span>${site.address.map((a) => `<span>${a}</span>`).join('')}</div>
    <div class="contact__block"><span class="ftr__k">Follow</span><div class="contact__soc">${site.socials.map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${roll(s.label)}</a>`).join('')}</div></div>
    <p class="contact__note"><span class="status"><i></i>${site.availability}</span><br>We reply within one business day.</p>
  </aside>

  <div class="contact__main">
    <div class="tabs" role="tablist" aria-label="Contact options" data-tabs>
      <button type="button" role="tab" id="tab-book" aria-controls="panel-book" aria-selected="true" class="tabs__btn is-on" data-tab="book">Book a call <sup>30 min</sup></button>
      <button type="button" role="tab" id="tab-apply" aria-controls="panel-apply" aria-selected="false" class="tabs__btn" data-tab="apply" tabindex="-1">Apply for access</button>
      <span class="tabs__ind" aria-hidden="true"></span>
    </div>

    <div class="tabpanel is-on" id="panel-book" role="tabpanel" aria-labelledby="tab-book" data-panel="book">
      <div class="cal" data-calendly="${site.calendly}?hide_gdpr_banner=1&background_color=f1f1ef&text_color=0a0a0a&primary_color=0a0a0a">
        <div class="cal__ph"><span class="cal__spin"></span><p>Loading calendar…</p><a href="${site.calendly}" target="_blank" rel="noopener" class="link-u">Open booking page ↗</a></div>
      </div>
    </div>

    <div class="tabpanel" id="panel-apply" role="tabpanel" aria-labelledby="tab-apply" data-panel="apply" hidden>
      <form class="form" name="apply" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-form novalidate>
        <input type="hidden" name="form-name" value="apply">
        <p class="hp"><label>Leave empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
        <div class="form__grid">
          <label class="field"><input name="name" required autocomplete="name" placeholder=" "><span>Name *</span></label>
          <label class="field"><input name="email" type="email" required autocomplete="email" placeholder=" "><span>E-mail *</span></label>
          <label class="field"><input name="company" type="url" inputmode="url" placeholder=" "><span>Company URL</span></label>
          <label class="field"><input name="channel" placeholder=" "><span>Current distribution channel (if any)</span></label>
        </div>
        <fieldset class="tiers">
          <legend>What are you interested in?</legend>
          ${services.map((s) => `<label class="tier"><input type="radio" name="tier" value="${s.name}" data-tier="${s.key}"><span><b>${s.name}</b><i>${s.short}</i></span></label>`).join('')}
          <label class="tier"><input type="radio" name="tier" value="Not sure yet" data-tier="unsure"><span><b>Not sure yet</b><i>Let’s talk</i></span></label>
        </fieldset>
        <label class="field field--area"><textarea name="advantage" rows="4" required placeholder=" "></textarea><span>The filter question: what is your unfair advantage? *</span></label>
        <p class="form__hint">If you have no product, we cannot help you distribute it.</p>
        <div class="form__foot">
          <button class="btn btn--dark" type="submit" data-magnetic>${roll('Submit application')}<span class="btn__ico">${arrow}</span></button>
          <p class="form__msg" role="status" aria-live="polite" data-form-msg></p>
        </div>
      </form>
      <div class="form-done" hidden data-form-done>
        <span class="form-done__ico">✳</span>
        <h3>Application received.</h3>
        <p>Thanks — we review every application by hand and reply within one business day. Want to skip the queue?</p>
        <button type="button" class="link-u" data-tab-go="book">Book a call now →</button>
      </div>
    </div>
  </div>
</section>
`,
});

const notFound = () => layout({
  title: 'Page not found',
  path: '/404.html',
  pt: '404',
  body: `
<section class="nf container">
  ${label('Error 404')}
  <h1 class="nf__title" data-split>Lost our <em>attention.</em></h1>
  <p class="phero__lead" data-reveal="fade">The page you’re looking for moved, or never existed. Let’s get you back to something worth watching.</p>
  <div class="nf__btns" data-reveal="fade">${btn('Back home', '/')}${btn('View work', '/work/', { variant: 'ghost' })}</div>
</section>`,
});

// ---------- write ----------------------------------------------------------
const write = (p, html) => {
  const f = join(OUT, p);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
  console.log('  ✓', f);
};

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });
cpSync('assets', join(OUT, 'assets'), { recursive: true });
cpSync('public', OUT, { recursive: true });

write('index.html', home());
write('work/index.html', workPage());
write('case-studies/index.html', caseIndex());
caseStudies.forEach((c, i) => write(`case-studies/${c.slug}/index.html`, caseDetail(c, i)));
write('services/index.html', servicesPage());
write('contact/index.html', contactPage());
write('404.html', notFound());

const urls = ['/', '/work/', '/case-studies/', ...caseStudies.map((c) => `/case-studies/${c.slug}/`), '/services/', '/contact/'];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log('Done.');
