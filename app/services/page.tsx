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
            Full stack web development tailored to your unique needs — from
            pixel-perfect frontends to scalable, secure backend systems, I
            deliver complete web solutions.
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
              Full stack web development solutions for your growth
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
