import "./WhyChooseUsSection.css";

// ── Service-specific reasons — matching Hero Section services ──
const reasons = [
  // Full Stack Development
  {
    id: "01",
    accentColor: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <polyline
          points="16 18 22 12 16 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="14"
          y1="4"
          x2="10"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    category: "Full Stack Development",
    title: "Pixel-Perfect & Performant",
    short: "Frontend + Backend, one team",
    desc: "React, Next.js, Node.js, Supabase, Firebase, MongoDB — I handle the full stack. Blazing UIs, scalable APIs, and zero compromise on quality.",
    highlight: "End-to-End",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "MongoDB",
      "GitHub",
      "Vercel",
    ],
  },
  // Core Principle
  {
    id: "02",
    accentColor: "#00d4ff",
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
    category: "My Promise",
    title: "On-Time. Every Time.",
    short: "Zero missed deadlines",
    desc: "Agile sprints, clear milestones, daily updates. I treat your deadline as sacred — because your launch date matters as much as the product.",
    highlight: "0 Missed Deadlines",
    tags: ["Transparent", "Agile", "On-Time", "Guaranteed"],
  },
  // Mobile App Development
  {
    id: "03",
    accentColor: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="18"
          x2="13"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    category: "Mobile App Development",
    title: "Native Feel, Cross-Platform Speed",
    short: "One codebase, iOS & Android",
    desc: "React Native & Expo — I build cross-platform mobile apps backed by the same solid Node.js, Firebase, Supabase & MongoDB APIs that power the web.",
    highlight: "iOS + Android",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Firebase",
      "Supabase",
      "MongoDB",
    ],
  },
];

const bigStats = [
  { num: "150+", label: "Projects Completed", icon: "◈" },
  { num: "5+", label: "Years of Excellence", icon: "◆" },
  { num: "50+", label: "Happy Clients", icon: "◉" },
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
        <span className="wcu__label-text">Why Choose Me</span>
        <span className="wcu__label-line" />
      </div>

      {/* ── Hero Heading ── */}
      <div className="wcu__hero">
        <div className="wcu__eyebrow">
          <span className="wcu__eyebrow-dot" />
          <span>Pantrix — Full Stack Developer</span>
        </div>
        <h2 className="wcu__heading">
          <span className="wcu__heading-line">The Pantrix</span>
          <span className="wcu__heading-line wcu__heading-line--gold">
            Difference
          </span>
        </h2>
        <p className="wcu__subtext">
          Not just a developer — a dedicated partner in your product's success.
          Frontend to backend. One person. World-class execution.
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

      {/* ── Services We Offer Strip ── */}
      <div className="wcu__services-strip">
        <div className="wcu__services-strip-label">
          <span className="wcu__section-num">01</span>
          <span className="wcu__section-title">What I Do</span>
        </div>
        <div className="wcu__services-pills">
          {[
            { label: "Full Stack Dev", color: "#00d4ff" },
            { label: "Mobile Apps (React Native)", color: "#61DAFB" },
          ].map((s) => (
            <span
              key={s.label}
              className="wcu__service-pill"
              style={
                {
                  "--pill-color": s.color,
                  borderColor: `${s.color}40`,
                  color: s.color,
                } as React.CSSProperties
              }
            >
              <span
                className="wcu__service-pill-dot"
                style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Reasons Grid ── */}
      <div className="wcu__section-head">
        <span className="wcu__section-num">02</span>
        <h3 className="wcu__section-title">3 Reasons to Choose Pantrix</h3>
        <span className="wcu__section-bar" />
      </div>

      <div className="wcu__grid-cards">
        {reasons.map((r, i) => (
          <div
            key={r.id}
            className="wcu__card"
            style={
              {
                animationDelay: `${0.1 + i * 0.1}s`,
                "--card-accent": r.accentColor,
              } as React.CSSProperties
            }
          >
            <div className="wcu__card-glow" />

            <div className="wcu__card-top">
              <div
                className="wcu__card-icon-wrap"
                style={{
                  background: `${r.accentColor}12`,
                  borderColor: `${r.accentColor}30`,
                }}
              >
                <span
                  className="wcu__card-icon"
                  style={{ color: r.accentColor }}
                >
                  {r.icon}
                </span>
                <span
                  className="wcu__card-icon-ring"
                  style={{ borderColor: `${r.accentColor}20` }}
                />
              </div>
              <div className="wcu__card-top-right">
                <span className="wcu__card-id">{r.id}</span>
                <span
                  className="wcu__card-category"
                  style={{
                    color: r.accentColor,
                    borderColor: `${r.accentColor}30`,
                  }}
                >
                  {r.category}
                </span>
              </div>
            </div>

            <div className="wcu__card-body">
              <span
                className="wcu__card-short"
                style={{ color: r.accentColor }}
              >
                {r.short}
              </span>
              <h4 className="wcu__card-title">{r.title}</h4>
              <p className="wcu__card-desc">{r.desc}</p>
            </div>

            {/* Tags */}
            <div className="wcu__card-tags">
              {r.tags.map((tag) => (
                <span
                  key={tag}
                  className="wcu__card-tag"
                  style={{
                    borderColor: `${r.accentColor}25`,
                    color: `${r.accentColor}cc`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="wcu__card-badge"
              style={{
                background: `${r.accentColor}12`,
                borderColor: `${r.accentColor}30`,
                color: r.accentColor,
              }}
            >
              <span
                className="wcu__card-badge-dot"
                style={{
                  background: r.accentColor,
                  boxShadow: `0 0 6px ${r.accentColor}`,
                }}
              />
              <span>{r.highlight}</span>
            </div>

            <span
              className="wcu__card-hover-bar"
              style={{
                background: `linear-gradient(90deg, transparent, ${r.accentColor}, transparent)`,
              }}
            />
            <span
              className="wcu__card-corner wcu__card-corner--tl"
              style={{ borderColor: r.accentColor }}
            />
            <span
              className="wcu__card-corner wcu__card-corner--br"
              style={{ borderColor: r.accentColor }}
            />
          </div>
        ))}
      </div>

      {/* ── Comparison / Guarantee Strip ── */}
      <div className="wcu__guarantee-wrap">
        <div className="wcu__section-head">
          <span className="wcu__section-num">03</span>
          <h3 className="wcu__section-title">My Promise to You</h3>
          <span className="wcu__section-bar" />
        </div>

        <div className="wcu__promise-grid">
          <div className="wcu__promise-card wcu__promise-card--others">
            <div className="wcu__promise-header">
              <span className="wcu__promise-icon wcu__promise-icon--bad">
                ✕
              </span>
              <span className="wcu__promise-label">Typical Agencies</span>
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
            <span>See My Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
