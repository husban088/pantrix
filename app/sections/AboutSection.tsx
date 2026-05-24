"use client";

import "./AboutSection.css";

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "5+", label: "Years in Industry" },
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
    desc: "Scalable servers with Firebase & Supabase integration",
    tags: ["Node.js", "Firebase", "Supabase"],
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
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    badge: "05",
    badgeColor: "#FF6B6B",
    title: "Social Ads Management",
    desc: "Data-driven ad campaigns on Meta, Instagram & Google that convert",
    tags: ["Meta Ads", "Google Ads", "Analytics"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 3l2 2-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    badge: "06",
    badgeColor: "#FFD700",
    title: "Graphic Designing",
    desc: "Brand identities, logos & visual systems built with purpose",
    tags: ["Branding", "Logo", "Illustration"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12h6M9 15h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    badge: "07",
    badgeColor: "#FF69B4",
    title: "Poster Designing",
    desc: "Eye-catching promotional posters & marketing visuals that convert",
    tags: ["Print", "Event Posters", "Banners"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 9l6 3-6 3V9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    ),
    badge: "08",
    badgeColor: "#9B59B6",
    title: "Video Editing",
    desc: "Professional reels, motion graphics & branded video content",
    tags: ["Reels", "Motion Graphics", "Color Grade"],
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
        <span className="about__label-text">About Us</span>
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
              Full-Service Digital Studio
            </span>
          </div>
        </div>

        <div className="about__intro-right">
          <p className="about__desc about__desc--1">
            <strong>Pantrix</strong> is a full-service digital studio crafting
            modern web applications, scroll-stopping ad campaigns, stunning
            brand visuals, and cinematic video content — all under one roof.
          </p>
          <p className="about__desc about__desc--2">
            From pixel-perfect frontends in React &amp; Next.js, to social ads
            on Meta &amp; Google, to graphic design, posters, and video editing
            — we deliver end-to-end digital solutions that help brands stand out
            online.
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
