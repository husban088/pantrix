"use client";

import "./ServicesSection.css";

const servicesData = [
  // ── Full Stack Development ──
  {
    id: "01",
    category: "Web Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
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
    title: "Full Stack Development",
    shortDesc:
      "High-performance web apps — pixel-perfect frontends to scalable backend systems.",
    features: [
      "React, Next.js 14 & TypeScript",
      "Angular & Vue.js",
      "Node.js & Express APIs",
      "Supabase, Firebase & MongoDB",
      "Cloudinary Media Storage",
      "Tailwind CSS",
      "GitHub Version Control & Vercel Deployment",
      "Performance & SEO — Lighthouse 95+",
    ],
    inquiryText: "Let's build your dream web app",
    color: "#00d4ff",
    highlight: "Most Popular",
  },
  // ── Custom Web Applications ──
  {
    id: "02",
    category: "Web Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 10.5l3-1.5 3 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Custom Web Applications",
    shortDesc:
      "Complex SaaS platforms, dashboards, and CRM systems tailored to your business.",
    features: [
      "SaaS Platform Development",
      "Admin Dashboards & Analytics",
      "CRM & ERP Systems",
      "Real-time Features (WebSockets)",
      "Third-Party API Integrations",
      "Ongoing Support & Scaling",
    ],
    inquiryText: "Let's discuss your custom project",
    color: "#00d4ff",
    highlight: "Enterprise Grade",
  },
  // ── Mobile App Development ──
  {
    id: "03",
    category: "Mobile Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
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
    title: "Mobile App Development",
    shortDesc:
      "Cross-platform mobile apps for iOS & Android, built with React Native & Expo.",
    features: [
      "React Native & Expo",
      "Cross-Platform (iOS + Android)",
      "Node.js & Express APIs",
      "Firebase, Supabase & MongoDB",
      "Cloudinary Media Storage",
      "Push Notifications & Deep Linking",
      "App Store & Play Store Deployment",
    ],
    inquiryText: "Let's build your mobile app",
    color: "#61DAFB",
    highlight: "Cross-Platform",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "#00d4ff",
  "Mobile Development": "#61DAFB",
};

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      {/* ── Background ── */}
      <div className="services__bg">
        <div className="services__grid" />
        <div className="services__glow services__glow--1" />
        <div className="services__glow services__glow--2" />
        <div className="services__glow services__glow--3" />
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="services__orb"
            style={{
              left: `${[15, 75, 40, 88][i]}%`,
              top: `${[20, 10, 65, 50][i]}%`,
              animationDelay: `${i * 1.4}s`,
              animationDuration: `${5 + i * 0.9}s`,
            }}
          />
        ))}
      </div>

      {/* ── Section Label ── */}
      <div className="services__label-row">
        <span className="services__label-line" />
        <span className="services__label-text">What I Offer</span>
        <span className="services__label-line" />
      </div>

      {/* ── Header ── */}
      <div className="services__header">
        <div className="services__eyebrow">
          <span className="services__eyebrow-dot" />
          <span>Pantrix — Full Stack Developer</span>
        </div>
        <h2 className="services__heading">
          <span className="services__heading-line">Full Stack</span>
          <span className="services__heading-line services__heading-line--gradient">
            Web Development
          </span>
          <span className="services__heading-line">For Your Growth</span>
        </h2>
        <p className="services__subtext">
          From blazing-fast web apps to complex, enterprise-grade platforms — I
          handle the entire stack, frontend to backend. No juggling contractors.
          Pure results.
        </p>
      </div>

      {/* ── Category Pills ── */}
      <div className="services__categories">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <span
            key={cat}
            className="services__cat-pill"
            style={
              {
                "--cat-color": color,
                borderColor: `${color}35`,
                color: color,
              } as React.CSSProperties
            }
          >
            <span
              className="services__cat-dot"
              style={{ background: color, boxShadow: `0 0 6px ${color}` }}
            />
            {cat}
          </span>
        ))}
      </div>

      {/* ── Services Grid ── */}
      <div className="services__grid-cards">
        {servicesData.map((service, i) => (
          <div
            key={service.id}
            className="services__card"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            {/* Highlight Badge */}
            {service.highlight && (
              <span
                className="services__card-highlight"
                style={{
                  background: `${service.color}18`,
                  borderColor: `${service.color}40`,
                  color: service.color,
                }}
              >
                <span
                  className="services__card-highlight-dot"
                  style={{ background: service.color }}
                />
                {service.highlight}
              </span>
            )}

            <div
              className="services__card-glow"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${service.color}18, transparent 70%)`,
              }}
            />

            <div
              className="services__card-inner"
              style={
                { "--service-color": service.color } as React.CSSProperties
              }
            >
              {/* Top Row */}
              <div className="services__card-top">
                <div
                  className="services__card-icon"
                  style={{
                    background: `${service.color}14`,
                    borderColor: `${service.color}30`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>
                <div className="services__card-top-right">
                  <span className="services__card-id">{service.id}</span>
                  <span
                    className="services__card-category"
                    style={{
                      color: `${service.color}bb`,
                      borderColor: `${service.color}25`,
                    }}
                  >
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-short">{service.shortDesc}</p>

              {/* Features List */}
              <ul className="services__features">
                {service.features.map((feature) => (
                  <li key={feature} className="services__feature">
                    <span
                      className="services__feature-dot"
                      style={{
                        background: service.color,
                        boxShadow: `0 0 5px ${service.color}80`,
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer - Customer friendly text on left, inquiry link on right */}
              <div
                className="services__card-footer"
                style={{ borderColor: `${service.color}20` }}
              >
                <span
                  className="services__inquiry-text"
                  style={{ color: service.color }}
                >
                  ✨ {service.inquiryText}
                </span>
                <a
                  href="/contact"
                  className="services__card-cta"
                  style={
                    { "--cta-color": service.color } as React.CSSProperties
                  }
                >
                  <span>Inquire Now →</span>
                </a>
              </div>

              {/* Hover Bottom Border */}
              <span
                className="services__card-border"
                style={{ background: service.color }}
              />

              {/* Hover Top Bar */}
              <span
                className="services__card-hover-top"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="services__cta-wrap">
        <p className="services__cta-label">Ready to work together?</p>
        <p className="services__cta-text">
          Not sure which service fits your needs? Let's talk — free
          consultation, zero pressure.
        </p>
        <div className="services__cta-btns">
          <a href="/contact" className="services__btn services__btn--primary">
            <span>Get Free Consultation</span>
            <span className="services__btn-shine" />
          </a>
          <a
            href="/projects"
            className="services__btn services__btn--secondary"
          >
            <span>View My Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
