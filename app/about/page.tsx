import "./AboutPage.css";

/* ─────────────────────────────────────────────
   DATA — same as AboutSection.tsx (nothing removed)
───────────────────────────────────────────── */

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "3+", label: "Years Experience" },
  { num: "15+", label: "Happy Clients" },
  { num: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Frontend Dev",
    desc: "Pixel-perfect UIs with React, Next.js & Tailwind CSS",
  },
  {
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
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 8l3 3-3 3M13 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Backend & APIs",
    desc: "Scalable servers with Firebase & Supabase integration",
  },
  {
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
    title: "Performance",
    desc: "Optimized, fast & SEO-ready web applications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M5 12H3l9-9 9 9h-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="9"
          y="14"
          width="6"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Responsive Design",
    desc: "Flawless on every screen — mobile, tablet, desktop",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Started the Journey",
    desc: "Fell in love with HTML & CSS. Built first static websites.",
  },
  {
    year: "2022",
    title: "JavaScript & React",
    desc: "Mastered JS fundamentals, React ecosystem & component design.",
  },
  {
    year: "2023",
    title: "Full Stack Growth",
    desc: "Expanded to Next.js, Firebase, Supabase & Tailwind CSS.",
  },
  {
    year: "2024+",
    title: "Pantrix — Born",
    desc: "Launched portfolio brand. Delivering luxury web experiences.",
  },
];

const skills = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 88 },
  { name: "Tailwind CSS", pct: 92 },
  { name: "Firebase / Supabase", pct: 85 },
  { name: "Node.js / REST APIs", pct: 80 },
  { name: "UI / UX Design", pct: 78 },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quality First",
    desc: "Every pixel, every line of code — crafted with obsessive precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Deadlines are sacred. I ship on schedule, every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
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
    title: "Client-Centered",
    desc: "Your vision drives everything. I listen, adapt, and deliver.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <polyline
          points="22 12 18 12 15 21 9 3 6 12 2 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Always Growing",
    desc: "Constantly learning new tech to stay ahead of the curve.",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="ap">
      {/* ══════════════════════════════════════
          BACKGROUND — same 3 glows + grid + deco
          lines as AboutSection
      ══════════════════════════════════════ */}
      <div className="ap__bg">
        <div className="ap__grid" />
        <div className="ap__glow ap__glow--1" />
        <div className="ap__glow ap__glow--2" />
        <div className="ap__glow ap__glow--3" />
        <div className="ap__deco-line ap__deco-line--h1" />
        <div className="ap__deco-line ap__deco-line--h2" />
        <div className="ap__deco-line ap__deco-line--v1" />
      </div>

      {/* ══════════════════════════════════════
          HERO — label + intro left/right + stats
      ══════════════════════════════════════ */}
      <section className="ap__hero">
        {/* Section Label — same as AboutSection */}
        <div className="ap__label-row">
          <span className="ap__label-line" />
          <span className="ap__label-text">About Me</span>
          <span className="ap__label-line" />
        </div>

        {/* Intro two-column layout */}
        <div className="ap__intro">
          {/* Left — heading + eyebrow + signature */}
          <div className="ap__intro-left">
            <div className="ap__eyebrow">
              <span className="ap__eyebrow-dot" />
              <span>Web Developer &amp; Designer</span>
            </div>

            <h1 className="ap__heading">
              <span className="ap__heading-line">Building</span>
              <span className="ap__heading-line ap__heading-line--gradient">
                Experiences
              </span>
              <span className="ap__heading-line ap__heading-line--thin">
                That Matter.
              </span>
            </h1>

            <div className="ap__signature">
              <span className="ap__signature-name">Pantrix</span>
              <span className="ap__signature-dot">✦</span>
              <span className="ap__signature-role">Web Development Studio</span>
            </div>
          </div>

          {/* Right — description + stats grid */}
          <div className="ap__intro-right">
            <p className="ap__desc">
              I&apos;m a passionate full-stack web developer operating under the
              brand <strong>Pantrix</strong> — crafting modern, high-performance
              web applications that merge aesthetic elegance with technical
              precision.
            </p>
            <p className="ap__desc">
              From pixel-perfect frontends in React &amp; Next.js to robust
              backends powered by Firebase &amp; Supabase — I deliver end-to-end
              digital solutions that stand out.
            </p>

            {/* Stats 2×2 grid */}
            <div className="ap__stats">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="ap__stat"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <span className="ap__stat-num">{s.num}</span>
                  <span className="ap__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          01 — WHAT I DO  (service cards)
          Exact same cards as AboutSection
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">01</span>
          <h2 className="ap__section-title">What I Do</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__services">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="ap__service-card"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              {/* Icon with glow ring — same as AboutSection */}
              <div className="ap__service-icon-wrap">
                <span className="ap__service-icon">{svc.icon}</span>
                <span className="ap__service-icon-glow" />
              </div>
              <h3 className="ap__service-title">{svc.title}</h3>
              <p className="ap__service-desc">{svc.desc}</p>
              {/* Big ghost number in corner */}
              <span className="ap__service-num">0{i + 1}</span>
              {/* Hover bottom sweep bar */}
              <span className="ap__service-hover-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 — SKILLS & STACK  (progress bars)
          This section was in page.tsx only —
          kept fully intact with animation
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">02</span>
          <h2 className="ap__section-title">Skills &amp; Stack</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__skills">
          {skills.map((sk, i) => (
            <div
              key={sk.name}
              className="ap__skill-row"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="ap__skill-meta">
                <span className="ap__skill-name">{sk.name}</span>
                <span className="ap__skill-pct">{sk.pct}%</span>
              </div>
              <div className="ap__skill-track">
                <div
                  className="ap__skill-fill"
                  style={
                    {
                      "--target-width": `${sk.pct}%`,
                      animationDelay: `${0.3 + i * 0.12}s`,
                      width: 0,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 — MY JOURNEY  (timeline)
          Same structure as AboutSection:
          track line + dot + inner dot + card
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">03</span>
          <h2 className="ap__section-title">My Journey</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__timeline">
          {/* Vertical track line */}
          <div className="ap__timeline-track" />

          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="ap__timeline-item"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Dot with pulsing inner circle */}
              <div className="ap__timeline-dot">
                <span className="ap__timeline-dot-inner" />
              </div>

              {/* Card */}
              <div className="ap__timeline-card">
                <span className="ap__timeline-year">{item.year}</span>
                <h3 className="ap__timeline-title">{item.title}</h3>
                <p className="ap__timeline-desc">{item.desc}</p>
                {/* Shine overlay */}
                <span className="ap__timeline-shine" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          04 — MY VALUES  (value cards)
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">04</span>
          <h2 className="ap__section-title">My Values</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__values">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="ap__value-card"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="ap__value-icon">{v.icon}</span>
              <h3 className="ap__value-title">{v.title}</h3>
              <p className="ap__value-desc">{v.desc}</p>
              {/* Hover sweep bar */}
              <span className="ap__value-hover-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — same as AboutSection bottom
      ══════════════════════════════════════ */}
      <section className="ap__cta-wrap">
        <p className="ap__cta-text">Ready to build something extraordinary?</p>
        <div className="ap__cta-btns">
          <a href="/contact" className="ap__btn ap__btn--primary">
            <span>Let&apos;s Work Together</span>
            <span className="ap__btn-shine" />
          </a>
          <a href="/projects" className="ap__btn ap__btn--secondary">
            <span>View Projects</span>
          </a>
        </div>
      </section>
    </div>
  );
}
