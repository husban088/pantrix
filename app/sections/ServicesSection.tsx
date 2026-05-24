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
      "React & Next.js 14",
      "Node.js & Express APIs",
      "Supabase & Firebase",
      "TypeScript & Tailwind CSS",
      "Performance & SEO Optimized",
      "Lighthouse 95+ Score",
    ],
    inquiryText: "Let's build your dream web app",
    color: "#00d4ff",
    highlight: "Most Popular",
  },
  // ── Social Ads Management ──
  {
    id: "02",
    category: "Digital Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Social Ads Management",
    shortDesc:
      "Data-driven campaigns on Meta & Google that convert and deliver real ROI.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & PPC Campaigns",
      "Audience Targeting & Retargeting",
      "A/B Testing & Optimization",
      "Analytics & Weekly Reports",
      "Campaign Strategy & Creatives",
    ],
    inquiryText: "Let's boost your ROl",
    color: "#FF6B6B",
    highlight: "ROI Focused",
  },
  // ── Graphic Designing ──
  {
    id: "03",
    category: "Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v4M12 18v4M2 12h4M18 12h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Graphic Designing",
    shortDesc:
      "Brand identities, logos, and visual systems crafted with purpose and precision.",
    features: [
      "Logo & Brand Identity Design",
      "Brand Style Guide & System",
      "UI/UX Design & Prototyping",
      "Social Media Kit",
      "Illustration & Icon Sets",
      "Print & Digital Assets",
    ],
    inquiryText: "Let's create your brand identity",
    color: "#FFD700",
    highlight: "100% Custom",
  },
  // ── Poster Designing ──
  {
    id: "04",
    category: "Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="8.5"
          cy="8.5"
          r="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M21 15l-5-5L5 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Poster Designing",
    shortDesc:
      "Eye-catching promotional posters and marketing visuals that make your brand unforgettable.",
    features: [
      "Event & Promotional Posters",
      "Social Media Posts & Stories",
      "Banners & Billboard Designs",
      "Print-Ready Files (CMYK)",
      "Multiple Format Exports",
      "Unlimited Revisions",
    ],
    inquiryText: "Let's make your brand stand out",
    color: "#FF69B4",
    highlight: "Scroll-Stopping",
  },
  // ── Video Editing ──
  {
    id: "05",
    category: "Video Production",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <polygon
          points="23 7 16 12 23 17 23 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1"
          y="5"
          width="15"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Video Editing",
    shortDesc:
      "Professional edits, reels, motion graphics, and branded video content that drives engagement.",
    features: [
      "Short-Form Reels & TikToks",
      "YouTube Long-Form Editing",
      "Motion Graphics & Animations",
      "Color Grading & Correction",
      "Captions & Sound Design",
      "Brand Intro / Outro Sequences",
    ],
    inquiryText: "Let's bring your vision to life",
    color: "#9B59B6",
    highlight: "Pro Quality",
  },
  // ── Custom Web Applications ──
  {
    id: "06",
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
];

const categoryColors: Record<string, string> = {
  "Web Development": "#00d4ff",
  "Digital Marketing": "#FF6B6B",
  Design: "#FFD700",
  "Video Production": "#9B59B6",
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
        <span className="services__label-text">What We Offer</span>
        <span className="services__label-line" />
      </div>

      {/* ── Header ── */}
      <div className="services__header">
        <div className="services__eyebrow">
          <span className="services__eyebrow-dot" />
          <span>Pantrix — Full-Service Digital Studio</span>
        </div>
        <h2 className="services__heading">
          <span className="services__heading-line">All-In-One</span>
          <span className="services__heading-line services__heading-line--gradient">
            Digital Services
          </span>
          <span className="services__heading-line">For Your Growth</span>
        </h2>
        <p className="services__subtext">
          From blazing-fast web apps to viral social ads, stunning designs, and
          cinematic video edits — one team handles it all. No juggling
          contractors. Pure results.
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
            <span>View Our Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
