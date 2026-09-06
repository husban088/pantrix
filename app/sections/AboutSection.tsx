"use client";

import "./AboutSection.css";

const stats = [
  { num: "20+", label: "Projects Delivered" },
  { num: "5+", label: "Years in Industry" },
  { num: "20+", label: "Happy Clients" },
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
    badge: "01",
    badgeColor: "#00f5d4",
    title: "Frontend Development",
    desc: "Pixel-perfect UIs with React, Next.js, Angular & Vue.js, styled with Tailwind CSS",
    tags: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS"],
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
    desc: "Scalable servers & databases with Node.js, Firebase, Supabase & MongoDB, with Cloudinary for image & video storage — version-controlled on GitHub, deployed on Vercel",
    tags: [
      "Node.js",
      "Firebase",
      "Supabase",
      "MongoDB",
      "Cloudinary",
      "GitHub",
      "Vercel",
    ],
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
      "Express.js",
      "Firebase",
      "Supabase",
      "MongoDB",
      "Cloudinary",
    ],
  },
];

export default function AboutSection() {
  // Function to handle navigation to About page with full reload
  const handleAboutPageNavigation = () => {
    window.location.href = "/about";
  };

  return (
    <section className="about" id="about">
      {/* Background */}
      <div className="about__bg">
        <div className="about__grid" />
        <div className="about__glow about__glow--1" />
        <div className="about__glow about__glow--2" />
        <div className="about__glow about__glow--3" />
        <div className="about__deco-line about__deco-line--h1" />
        <div className="about__deco-line about__deco-line--h2" />
        <div className="about__deco-line about__deco-line--v1" />
      </div>

      {/* Section label */}
      <div className="about__label-row">
        <span className="about__label-line" />
        <span className="about__label-text">About Me</span>
        <span className="about__label-line" />
      </div>

      {/* INTRO BLOCK */}
      <div className="about__intro">
        <div className="about__intro-left">
          <div className="about__eyebrow">
            <span className="about__eyebrow-dot" />
            <span>Creative Tech Studio</span>
          </div>
          <h2 className="about__heading">
            <span className="about__heading-line">Building</span>
            <span className="about__heading-line about__heading-line--gradient">
              Digital Excellence
            </span>
            <span className="about__heading-line about__heading-line--thin">
              That Matters.
            </span>
          </h2>
          <div className="about__signature">
            <span className="about__signature-name">Pantrix</span>
            <span className="about__signature-dot">✦</span>
            <span className="about__signature-role">
              Full Stack Development Studio
            </span>
          </div>
        </div>

        <div className="about__intro-right">
          <p className="about__desc about__desc--1">
            I'm the developer behind <strong>Pantrix</strong> — a full stack
            developer crafting modern, high-performance web applications — from
            pixel-perfect frontends to scalable, secure backend systems.
          </p>
          <p className="about__desc about__desc--2">
            From pixel-perfect frontends in React, Next.js, Angular &amp;
            Vue.js, to robust backends powered by Node.js, Firebase, Supabase
            &amp; MongoDB, with Cloudinary handling all image &amp; video
            storage and delivery, to performance tuning and fully responsive
            design — I deliver end-to-end web solutions, version-controlled on
            GitHub and deployed on Vercel, built to last.
          </p>

          <div className="about__stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="about__stat"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="about__services-wrap">
        <div className="about__section-head">
          <span className="about__section-num">01</span>
          <h3 className="about__section-title">What We Do</h3>
          <span className="about__section-bar" />
        </div>
        <div className="about__services">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="about__service-card"
              style={
                {
                  animationDelay: `${0.08 + i * 0.07}s`,
                  "--card-color": svc.badgeColor,
                } as React.CSSProperties
              }
            >
              {/* Badge — top right */}
              <div
                className="about__service-badge"
                style={{
                  color: svc.badgeColor,
                  borderColor: `${svc.badgeColor}33`,
                  background: `${svc.badgeColor}12`,
                }}
              >
                {svc.badge}
              </div>

              {/* Icon */}
              <div className="about__service-icon-wrap">
                <span
                  className="about__service-icon"
                  style={{ color: svc.badgeColor }}
                >
                  {svc.icon}
                </span>
                <span
                  className="about__service-icon-glow"
                  style={{
                    background: `radial-gradient(circle, ${svc.badgeColor}22, transparent 70%)`,
                  }}
                />
              </div>

              <h4 className="about__service-title">{svc.title}</h4>
              <p className="about__service-desc">{svc.desc}</p>

              {/* Tags */}
              <div className="about__service-tags">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="about__service-tag"
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
                className="about__service-hover-bar"
                style={{
                  background: `linear-gradient(90deg, transparent, ${svc.badgeColor}, transparent)`,
                }}
              />
              <span
                className="about__service-corner-glow"
                style={{
                  background: `radial-gradient(circle at bottom right, ${svc.badgeColor}18, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BUTTON - Navigates to About Page with reload */}
      <div className="about__bottom-btn-wrap">
        <button
          onClick={handleAboutPageNavigation}
          className="about__btn about__btn--primary about__btn--about-page"
        >
          <span>Learn More About Pantrix</span>
          <span className="about__btn-shine" />
        </button>
      </div>
    </section>
  );
}
