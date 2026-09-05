"use client";

import "./AboutPage.css";

/* ─────────────────────────────────────────────
   DATA — 5 Services (same as About Section)
───────────────────────────────────────────── */

const stats = [
  { num: "20+", label: "Projects Delivered" },
  { num: "5+", label: "Years Experience" },
  { num: "20+", label: "Happy Clients" },
  { num: "100%", label: "Client Satisfaction" },
];

// 5 Services - EXACTLY matching About Section design
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
    badge: "01",
    badgeColor: "#00f5d4",
    title: "Frontend Development",
    desc: "Pixel-perfect UIs with React, Next.js & Tailwind CSS",
    tags: ["React", "Next.js", "Tailwind"],
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
    badge: "02",
    badgeColor: "#00bbf9",
    title: "Backend & APIs",
    desc: "Scalable servers & databases with Node.js, Firebase, Supabase & MongoDB — version-controlled on GitHub, deployed on Vercel",
    tags: ["Node.js", "Firebase", "Supabase", "MongoDB", "GitHub", "Vercel"],
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
    badge: "03",
    badgeColor: "#a855f7",
    title: "Performance & SEO",
    desc: "Fast, SEO-ready & highly optimized web applications",
    tags: ["Core Web Vitals", "SEO", "Speed"],
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
    badge: "04",
    badgeColor: "#f59e0b",
    title: "Responsive Design",
    desc: "Flawless experiences on every screen — mobile to desktop",
    tags: ["Mobile", "Tablet", "Desktop"],
  },
  {
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
    badge: "05",
    badgeColor: "#61DAFB",
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native & Expo, backed by solid Node.js APIs",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Firebase",
      "Supabase",
      "MongoDB",
    ],
  },
];

/* ── OUR APPROACH DATA ── */
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
    color: "#00f5d4",
    gradient: "linear-gradient(135deg, #00f5d4, #00bbf9)",
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
    color: "#00bbf9",
    gradient: "linear-gradient(135deg, #00bbf9, #00f5d4)",
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
    color: "#5efade",
    gradient: "linear-gradient(135deg, #5efade, #00f5d4)",
  },
];

/* ── OUR VALUES DATA ── */
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
          BACKGROUND — 3 glows + grid + deco lines
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
        <div className="ap__label-row">
          <span className="ap__label-line" />
          <span className="ap__label-text">About Us</span>
          <span className="ap__label-line" />
        </div>

        <div className="ap__intro">
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
              <span className="ap__signature-role">
                Full Stack Development Studio
              </span>
            </div>
          </div>

          <div className="ap__intro-right">
            <p className="ap__desc">
              <strong>Pantrix</strong> is a full stack development studio
              crafting modern, high-performance web applications — from
              pixel-perfect frontends to scalable, secure backend systems.
            </p>
            <p className="ap__desc">
              From pixel-perfect frontends in React &amp; Next.js, to robust
              backends powered by Node.js, Firebase, Supabase &amp; MongoDB, to
              performance tuning, fully responsive design and cross-platform
              mobile apps — we deliver end-to-end solutions, version-controlled
              on GitHub and deployed on Vercel, built to last.
            </p>

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
          01 — WHAT WE DO (5 Services Cards - Same as About Section)
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
              style={
                {
                  animationDelay: `${0.08 + i * 0.07}s`,
                  "--card-color": svc.badgeColor,
                } as React.CSSProperties
              }
            >
              {/* Badge - top right */}
              <div
                className="ap__service-badge"
                style={{
                  color: svc.badgeColor,
                  borderColor: `${svc.badgeColor}33`,
                  background: `${svc.badgeColor}12`,
                }}
              >
                {svc.badge}
              </div>

              {/* Icon */}
              <div className="ap__service-icon-wrap">
                <span
                  className="ap__service-icon"
                  style={{ color: svc.badgeColor }}
                >
                  {svc.icon}
                </span>
                <span
                  className="ap__service-icon-glow"
                  style={{
                    background: `radial-gradient(circle, ${svc.badgeColor}22, transparent 70%)`,
                  }}
                />
              </div>

              <h3 className="ap__service-title">{svc.title}</h3>
              <p className="ap__service-desc">{svc.desc}</p>

              {/* Tags */}
              <div className="ap__service-tags">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="ap__service-tag"
                    style={{
                      borderColor: `${svc.badgeColor}30`,
                      color: svc.badgeColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effects */}
              <span
                className="ap__service-hover-bar"
                style={{
                  background: `linear-gradient(90deg, transparent, ${svc.badgeColor}, transparent)`,
                }}
              />
              <span
                className="ap__service-corner-glow"
                style={{
                  background: `radial-gradient(circle at bottom right, ${svc.badgeColor}18, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 — OUR APPROACH (3-step process)
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
                <div
                  className="ap__approach-card-glow"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${step.color}20, transparent 70%)`,
                  }}
                />

                <div
                  className="ap__approach-step"
                  style={{ borderColor: step.color }}
                >
                  <span className="ap__approach-step-num">{step.id}</span>
                  <div className="ap__approach-step-ring" />
                </div>

                <div
                  className="ap__approach-icon"
                  style={{ color: step.color }}
                >
                  {step.icon}
                </div>

                <h3 className="ap__approach-title">{step.title}</h3>
                <p className="ap__approach-subtitle">{step.subtitle}</p>
                <p className="ap__approach-desc">{step.desc}</p>

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

                <div
                  className="ap__approach-hover-bar"
                  style={{ background: step.gradient }}
                />

                <div className="ap__approach-corner ap__approach-corner--tl" />
                <div className="ap__approach-corner ap__approach-corner--br" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 — OUR VALUES (REMOVED OUR JOURNEY)
      ══════════════════════════════════════ */}
      <section className="ap__section">
        <div className="ap__section-head">
          <span className="ap__section-num">03</span>
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
          CTA — KEPT (removed nothing)
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
