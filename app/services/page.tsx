"use client";

import "./Services.css";

const servicesData = [
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
    fullDesc:
      "I craft modern, high-performance web applications using React, Next.js, and Node.js. Every pixel is precisely placed, every animation smooth, and every interaction intuitive. Your users will never want to leave.",
    features: [
      "React & Next.js 14",
      "Node.js & Express APIs",
      "Supabase & Firebase",
      "TypeScript & Tailwind CSS",
      "Performance & SEO Optimized",
      "Lighthouse 95+ Score",
    ],
    inquiryText: "Let's build your dream web app",
    color: "#00f5d4",
    highlight: "Most Popular",
  },
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
    fullDesc:
      "I create data-driven ad campaigns on Meta and Google that actually convert. From audience targeting to A/B testing and analytics, I maximize your ROI with proven strategies and weekly performance reports.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & PPC Campaigns",
      "Audience Targeting & Retargeting",
      "A/B Testing & Optimization",
      "Analytics & Weekly Reports",
      "Campaign Strategy & Creatives",
    ],
    inquiryText: "Let's boost your ROI",
    color: "#FF6B6B",
    highlight: "ROI Focused",
  },
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
    fullDesc:
      "I design stunning brand identities, logos, and complete visual systems that make your business unforgettable. Every color, font, and element is chosen with purpose to tell your unique story.",
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
    fullDesc:
      "I create eye-catching promotional posters and marketing visuals that stop the scroll. From event posters to social media graphics, your brand will stand out and get noticed.",
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
    fullDesc:
      "I produce professional video edits, engaging reels, and stunning motion graphics that drive engagement. Your brand story comes to life through cinematic visuals and expert storytelling.",
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
    fullDesc:
      "Need something unique? I build fully custom web applications for SaaS platforms, internal tools, CRMs, and real-time systems. No cookie-cutter solutions — just pure, hand-crafted code.",
    features: [
      "SaaS Platform Development",
      "Admin Dashboards & Analytics",
      "CRM & ERP Systems",
      "Real-time Features (WebSockets)",
      "Third-Party API Integrations",
      "Ongoing Support & Scaling",
    ],
    inquiryText: "Let's discuss your custom project",
    color: "#00f5d4",
    highlight: "Enterprise Grade",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We discuss your vision, goals, and requirements.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "I create a roadmap, timeline, and technical spec.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Wireframes and high-fidelity mockups for approval.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Clean, efficient code with regular updates.",
  },
  {
    num: "05",
    title: "Testing",
    desc: "Rigorous QA across devices and browsers.",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Deployment and post-launch support included.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <div className="services-hero__glow" />
          <div className="services-hero__particles">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="services-hero__particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="services-hero__container">
          <div className="services-hero__label">
            <span className="services-hero__label-line" />
            <span>Our Services</span>
            <span className="services-hero__label-line" />
          </div>
          <h1 className="services-hero__title">
            <span>Crafting Digital</span>
            <span className="services-hero__title-gold">Excellence</span>
          </h1>
          <p className="services-hero__subtitle">
            Comprehensive digital solutions tailored to your unique needs. From
            stunning designs to powerful web apps and ad campaigns — I deliver
            complete digital experiences.
          </p>
          <div className="services-hero__stats">
            <div className="services-hero__stat">
              <span className="services-hero__stat-num">50+</span>
              <span>Projects Delivered</span>
            </div>
            <div className="services-hero__stat">
              <span className="services-hero__stat-num">100%</span>
              <span>Satisfaction</span>
            </div>
            <div className="services-hero__stat">
              <span className="services-hero__stat-num">24/7</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__grid">
        <div className="services-page__container">
          <div className="services-page__header">
            <h2 className="services-page__title">What We Do</h2>
            <p className="services-page__subtitle">
              Comprehensive digital solutions for your growth
            </p>
          </div>
          <div className="services-page__cards">
            {servicesData.map((service, i) => (
              <div
                key={service.id}
                className="service-card"
                style={
                  {
                    animationDelay: `${0.1 + i * 0.08}s`,
                    "--card-color": service.color,
                  } as React.CSSProperties
                }
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <span
                    className="service-card__highlight"
                    style={{
                      background: `${service.color}18`,
                      borderColor: `${service.color}40`,
                      color: service.color,
                    }}
                  >
                    <span
                      className="service-card__highlight-dot"
                      style={{ background: service.color }}
                    />
                    {service.highlight}
                  </span>
                )}

                <div
                  className="service-card__glow"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${service.color}18, transparent 70%)`,
                  }}
                />

                {/* Top Row */}
                <div className="service-card__top">
                  <div
                    className="service-card__icon"
                    style={{
                      background: `${service.color}14`,
                      borderColor: `${service.color}30`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div className="service-card__top-right">
                    <span className="service-card__id">{service.id}</span>
                    <span
                      className="service-card__category"
                      style={{
                        color: `${service.color}bb`,
                        borderColor: `${service.color}25`,
                      }}
                    >
                      {service.category}
                    </span>
                  </div>
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__short">{service.shortDesc}</p>
                <p className="service-card__desc">{service.fullDesc}</p>

                {/* Features List */}
                <ul className="service-card__features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span
                        className="service-card__feature-dot"
                        style={{
                          background: service.color,
                          boxShadow: `0 0 5px ${service.color}80`,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer - Customer friendly inquiry text */}
                <div
                  className="service-card__footer"
                  style={{ borderColor: `${service.color}20` }}
                >
                  <span
                    className="service-card__inquiry-text"
                    style={{ color: service.color }}
                  >
                    ✨ {service.inquiryText}
                  </span>
                  <a
                    href="/contact"
                    className="service-card__cta"
                    style={
                      { "--cta-color": service.color } as React.CSSProperties
                    }
                  >
                    <span>Inquire Now →</span>
                  </a>
                </div>

                {/* Hover Border */}
                <div
                  className="service-card__border"
                  style={{ background: service.color }}
                />

                {/* Top Hover Bar */}
                <span
                  className="service-card__hover-top"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="services-process__container">
          <div className="services-process__header">
            <h2 className="services-process__title">Our Process</h2>
            <p className="services-process__subtitle">
              How we bring your vision to life
            </p>
          </div>
          <div className="services-process__steps">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="process-step"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="process-step__num">{step.num}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="process-step__line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta__bg" aria-hidden="true" />
        <div className="services-cta__separator" aria-hidden="true" />

        <div className="services-cta__inner">
          <p className="services-cta__label">Ready to work together?</p>
          <h2 className="services-cta__heading">
            Let's Build Something{" "}
            <span className="services-cta__heading-gradient">
              Extraordinary
            </span>
          </h2>
          <p className="services-cta__sub">
            Not sure which service fits your needs? Let's talk — free
            consultation, zero pressure.
          </p>

          <div className="services-cta__buttons">
            <a
              href="/contact"
              className="services-cta__btn services-cta__btn--primary"
            >
              <span>Get Free Consultation</span>
              <span className="services-cta__btn-shine" />
            </a>
            <a
              href="/projects"
              className="services-cta__btn services-cta__btn--secondary"
            >
              <span>View Our Portfolio</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
