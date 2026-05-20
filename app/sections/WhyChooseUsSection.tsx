import "./WhyChooseUsSection.css";

const reasons = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 12l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Pixel-Perfect Precision",
    short: "Every detail matters",
    desc: "From micro-animations to spacing — each element is crafted with obsessive attention to detail. No shortcuts, no templates. Pure custom work.",
    highlight: "100% Custom",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Blazing Fast Delivery",
    short: "Speed without sacrifice",
    desc: "Rapid turnaround without cutting corners. Agile workflow, clear milestones, and consistent communication keep projects on time — every time.",
    highlight: "On-Time Always",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 10h.01M12 10h.01M17 10h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Full-Stack Expertise",
    short: "End-to-end solutions",
    desc: "Frontend beauty meets backend power. React, Next.js, Firebase, Supabase — one developer, complete solution. No need to juggle multiple contractors.",
    highlight: "End-to-End",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Performance & SEO",
    short: "Built to rank & convert",
    desc: "Lighthouse scores above 95. Fast load times, clean code architecture, and SEO best practices baked in from day one — not bolted on at the end.",
    highlight: "95+ Lighthouse",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Client-First Mindset",
    short: "Your vision, our mission",
    desc: "Regular updates, transparent pricing, and zero jargon. You stay informed at every step. Your satisfaction is not just promised — it&apos;s guaranteed.",
    highlight: "100% Satisfaction",
  },
  {
    id: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Modern Tech Stack",
    short: "Future-proof from day one",
    desc: "No legacy frameworks, no outdated tools. Built with the latest — Next.js 14, TypeScript, Tailwind, and cutting-edge deployment pipelines on Vercel.",
    highlight: "Always Modern",
  },
];

const bigStats = [
  { num: "50+", label: "Projects Completed", icon: "◈" },
  { num: "3+", label: "Years of Excellence", icon: "◆" },
  { num: "15+", label: "Happy Clients", icon: "◉" },
  { num: "0", label: "Missed Deadlines", icon: "◇" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="wcu" id="why-choose-us">
      {/* ── Background ── */}
      <div className="wcu__bg">
        <div className="wcu__grid" />
        <div className="wcu__glow wcu__glow--1" />
        <div className="wcu__glow wcu__glow--2" />
        <div className="wcu__glow wcu__glow--3" />
        <div className="wcu__deco-line wcu__deco-line--h1" />
        <div className="wcu__deco-line wcu__deco-line--h2" />
        <div className="wcu__deco-line wcu__deco-line--v1" />
        <div className="wcu__deco-line wcu__deco-line--v2" />
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="wcu__orb"
            style={{
              left: `${[10, 80, 25, 70, 45, 90][i]}%`,
              top: `${[15, 20, 60, 75, 40, 55][i]}%`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${6 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* ── Section Label ── */}
      <div className="wcu__label-row">
        <span className="wcu__label-line" />
        <span className="wcu__label-text">Why Choose Us</span>
        <span className="wcu__label-line" />
      </div>

      {/* ── Hero Heading ── */}
      <div className="wcu__hero">
        <div className="wcu__eyebrow">
          <span className="wcu__eyebrow-dot" />
          <span>Pantrix — Web Development Studio</span>
        </div>
        <h2 className="wcu__heading">
          <span className="wcu__heading-line">The Pantrix</span>
          <span className="wcu__heading-line wcu__heading-line--gold">
            Difference
          </span>
        </h2>
        <p className="wcu__subtext">
          Not just a developer — a dedicated partner committed to transforming
          your vision into a world-class digital experience.
        </p>
      </div>

      {/* ── Stats Bar ── */}
      <div className="wcu__stats-bar">
        {bigStats.map((s, i) => (
          <div
            key={s.label}
            className="wcu__stat-item"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <span className="wcu__stat-icon">{s.icon}</span>
            <span className="wcu__stat-num">{s.num}</span>
            <span className="wcu__stat-label">{s.label}</span>
            {i < bigStats.length - 1 && <span className="wcu__stat-divider" />}
          </div>
        ))}
      </div>

      {/* ── Reasons Grid ── */}
      <div className="wcu__section-head">
        <span className="wcu__section-num">01</span>
        <h3 className="wcu__section-title">6 Reasons to Choose Pantrix</h3>
        <span className="wcu__section-bar" />
      </div>

      <div className="wcu__grid-cards">
        {reasons.map((r, i) => (
          <div
            key={r.id}
            className="wcu__card"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="wcu__card-glow" />

            <div className="wcu__card-top">
              <div className="wcu__card-icon-wrap">
                <span className="wcu__card-icon">{r.icon}</span>
                <span className="wcu__card-icon-ring" />
              </div>
              <span className="wcu__card-id">{r.id}</span>
            </div>

            <div className="wcu__card-body">
              <span className="wcu__card-short">{r.short}</span>
              <h4 className="wcu__card-title">{r.title}</h4>
              <p
                className="wcu__card-desc"
                dangerouslySetInnerHTML={{ __html: r.desc }}
              />
            </div>

            <div className="wcu__card-badge">
              <span className="wcu__card-badge-dot" />
              <span>{r.highlight}</span>
            </div>

            <span className="wcu__card-hover-bar" />
            <span className="wcu__card-corner wcu__card-corner--tl" />
            <span className="wcu__card-corner wcu__card-corner--br" />
          </div>
        ))}
      </div>

      {/* ── Comparison / Guarantee Strip ── */}
      <div className="wcu__guarantee-wrap">
        <div className="wcu__section-head">
          <span className="wcu__section-num">02</span>
          <h3 className="wcu__section-title">Our Promise to You</h3>
          <span className="wcu__section-bar" />
        </div>

        <div className="wcu__promise-grid">
          <div className="wcu__promise-card wcu__promise-card--others">
            <div className="wcu__promise-header">
              <span className="wcu__promise-icon wcu__promise-icon--bad">
                ✕
              </span>
              <span className="wcu__promise-label">Typical Developers</span>
            </div>
            <ul className="wcu__promise-list">
              {[
                "Generic templates & themes",
                "Missed deadlines",
                "Poor communication",
                "Slow, unoptimized code",
                "Disappear after delivery",
              ].map((item) => (
                <li
                  key={item}
                  className="wcu__promise-item wcu__promise-item--bad"
                >
                  <span className="wcu__promise-dot wcu__promise-dot--bad" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="wcu__promise-vs">
            <span className="wcu__promise-vs-text">VS</span>
            <div className="wcu__promise-vs-line" />
          </div>

          <div className="wcu__promise-card wcu__promise-card--pantrix">
            <div className="wcu__promise-header">
              <span className="wcu__promise-icon wcu__promise-icon--good">
                ✦
              </span>
              <span className="wcu__promise-label">Pantrix</span>
            </div>
            <ul className="wcu__promise-list">
              {[
                "100% custom-built from scratch",
                "On-time, every time",
                "Clear & constant communication",
                "Performance-first architecture",
                "Long-term support & partnership",
              ].map((item) => (
                <li
                  key={item}
                  className="wcu__promise-item wcu__promise-item--good"
                >
                  <span className="wcu__promise-dot wcu__promise-dot--good" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="wcu__promise-shine" />
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="wcu__cta-wrap">
        <p className="wcu__cta-text">
          Experience the Pantrix standard — where every pixel tells your story.
        </p>
        <div className="wcu__cta-btns">
          <a href="/contact" className="wcu__btn wcu__btn--primary">
            <span>Start Your Project</span>
            <span className="wcu__btn-shine" />
          </a>
          <a href="/projects" className="wcu__btn wcu__btn--secondary">
            <span>See Our Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
