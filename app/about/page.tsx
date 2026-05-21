import "./AboutPage.css";

/* ─────────────────────────────────────────────
   DATA — Updated for company branding
───────────────────────────────────────────── */

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "5+", label: "Years Experience" },
  { num: "50+", label: "Happy Clients" },
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
    title: "Frontend Development",
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
    title: "Performance Optimization",
    desc: "Fast, SEO-ready & highly optimized web applications",
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
    desc: "Flawless experiences on every screen — mobile, tablet, desktop",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    desc: "Pantrix started as a vision to create exceptional web experiences.",
  },
  {
    year: "2022",
    title: "First Major Projects",
    desc: "Delivered first enterprise-level web applications to happy clients.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    desc: "Grew our expertise in Next.js, Firebase, Supabase & advanced frameworks.",
  },
  {
    year: "2024+",
    title: "Pantrix Studio",
    desc: "Established as a full-service web development studio crafting digital excellence.",
  },
];

/* ── NEW: Our Approach Data ── */
const approachSteps = [
  {
    id: "01",
    title: "Discover & Strategize",
    subtitle: "Understanding Your Vision",
    desc: "We dive deep into your goals, audience, and requirements. Through collaborative discovery sessions, we map out a strategic roadmap that aligns technology with your business objectives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4M12 16h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, #00d4ff, #0099cc)",
  },
  {
    id: "02",
    title: "Design & Develop",
    subtitle: "Crafting Excellence",
    desc: "Our team transforms concepts into pixel-perfect designs and clean, maintainable code. We build with modern frameworks, ensuring scalability, performance, and an exceptional user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
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
    color: "#5ee6ff",
    gradient: "linear-gradient(135deg, #5ee6ff, #00d4ff)",
  },
  {
    id: "03",
    title: "Launch & Evolve",
    subtitle: "Continuous Growth",
    desc: "We don't just launch and leave. We provide ongoing support, optimization, and iterative improvements — ensuring your digital presence evolves with your business needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M22 12h-4l-3 9-4-18-3 9H2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    color: "#66e7ff",
    gradient: "linear-gradient(135deg, #66e7ff, #5ee6ff)",
  },
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
    desc: "Deadlines are sacred. We ship on schedule, every time.",
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
    desc: "Your vision drives everything. We listen, adapt, and deliver.",
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
          BACKGROUND — same 3 glows + grid + deco lines
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
        {/* Section Label */}
        <div className="ap__label-row">
          <span className="ap__label-line" />
          <span className="ap__label-text">About Us</span>
          <span className="ap__label-line" />
        </div>

        {/* Intro two-column layout */}
        <div className="ap__intro">
          {/* Left — heading + eyebrow + signature */}
          <div className="ap__intro-left">
            <div className="ap__eyebrow">
              <span className="ap__eyebrow-dot" />
              <span>Creative Tech Studio</span>
            </div>

            <h1 className="ap__heading">
              <span className="ap__heading-line">Building</span>
              <span className="ap__heading-line ap__heading-line--gradient">
                Digital Excellence
              </span>
              <span className="ap__heading-line ap__heading-line--thin">
                That Matters.
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
              <strong>Pantrix</strong> is a full-service web development studio
              crafting modern, high-performance web applications that merge
              aesthetic elegance with technical precision.
            </p>
            <p className="ap__desc">
              From pixel-perfect frontends in React &amp; Next.js to robust
              backends powered by Firebase &amp; Supabase — we deliver
              end-to-end digital solutions that help brands stand out and
              succeed online.
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
          01 — WHAT WE DO (service cards)
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">01</span>
          <h2 className="ap__section-title">What We Do</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__services">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="ap__service-card"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="ap__service-icon-wrap">
                <span className="ap__service-icon">{svc.icon}</span>
                <span className="ap__service-icon-glow" />
              </div>
              <h3 className="ap__service-title">{svc.title}</h3>
              <p className="ap__service-desc">{svc.desc}</p>
              <span className="ap__service-num">0{i + 1}</span>
              <span className="ap__service-hover-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 — OUR APPROACH (NEW - replaces Skills)
          Luxury 3-step process with hover animations
      ══════════════════════════════════════ */}
      <section className="ap__section ap__approach-section">
        <div className="ap__section-head">
          <span className="ap__section-num">02</span>
          <h2 className="ap__section-title">Our Approach</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__approach-grid">
          {approachSteps.map((step, i) => (
            <div
              key={step.id}
              className="ap__approach-card"
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Connecting line between cards (except last) */}
              {i < approachSteps.length - 1 && (
                <div className="ap__approach-connector" aria-hidden="true">
                  <svg viewBox="0 0 60 24" fill="none">
                    <path
                      d="M0 12h50M50 12l-8-6M50 12l-8 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div className="ap__approach-card-inner">
                {/* Glowing background on hover */}
                <div
                  className="ap__approach-card-glow"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${step.color}20, transparent 70%)`,
                  }}
                />

                {/* Step Number Badge */}
                <div
                  className="ap__approach-step"
                  style={{ borderColor: step.color }}
                >
                  <span className="ap__approach-step-num">{step.id}</span>
                  <div className="ap__approach-step-ring" />
                </div>

                {/* Icon */}
                <div
                  className="ap__approach-icon"
                  style={{ color: step.color }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="ap__approach-title">{step.title}</h3>
                <p className="ap__approach-subtitle">{step.subtitle}</p>
                <p className="ap__approach-desc">{step.desc}</p>

                {/* Feature list */}
                <div className="ap__approach-features">
                  {i === 0 && (
                    <>
                      <span>🎯 Market Research</span>
                      <span>💡 Ideation</span>
                      <span>📋 Strategic Planning</span>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <span>🎨 UI/UX Design</span>
                      <span>⚛️ Modern Development</span>
                      <span>📱 Responsive Build</span>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <span>🚀 Deployment</span>
                      <span>🔧 Ongoing Support</span>
                      <span>📈 Iterative Growth</span>
                    </>
                  )}
                </div>

                {/* Hover bar */}
                <div
                  className="ap__approach-hover-bar"
                  style={{ background: step.gradient }}
                />

                {/* Corner accents */}
                <div className="ap__approach-corner ap__approach-corner--tl" />
                <div className="ap__approach-corner ap__approach-corner--br" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 — OUR JOURNEY (timeline)
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">03</span>
          <h2 className="ap__section-title">Our Journey</h2>
          <span className="ap__section-bar" />
        </div>

        <div className="ap__timeline">
          <div className="ap__timeline-track" />

          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="ap__timeline-item"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="ap__timeline-dot">
                <span className="ap__timeline-dot-inner" />
              </div>

              <div className="ap__timeline-card">
                <span className="ap__timeline-year">{item.year}</span>
                <h3 className="ap__timeline-title">{item.title}</h3>
                <p className="ap__timeline-desc">{item.desc}</p>
                <span className="ap__timeline-shine" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          04 — OUR VALUES (value cards)
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">04</span>
          <h2 className="ap__section-title">Our Values</h2>
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
              <span className="ap__value-hover-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — bottom section
      ══════════════════════════════════════ */}
      <section className="ap__cta-wrap">
        <p className="ap__cta-text">
          Ready to build something extraordinary together?
        </p>
        <div className="ap__cta-btns">
          <a href="/contact" className="ap__btn ap__btn--primary">
            <span>Let&apos;s Work Together</span>
            <span className="ap__btn-shine" />
          </a>
          <a href="/projects" className="ap__btn ap__btn--secondary">
            <span>View Our Work</span>
          </a>
        </div>
      </section>
    </div>
  );
}
