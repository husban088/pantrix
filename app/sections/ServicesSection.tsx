"use client";

import "./ServicesSection.css";

const servicesData = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Frontend Development",
    shortDesc: "Pixel-perfect, responsive interfaces",
    features: ["React/Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    price: "From $999",
    color: "#00f5d4",
  },
  {
    id: "02",
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
    title: "Backend & APIs",
    shortDesc: "Scalable server solutions",
    features: ["Node.js", "Firebase", "Supabase", "RESTful APIs"],
    price: "From $1,299",
    color: "#00bbf9",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
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
    shortDesc: "Lightning-fast load times",
    features: [
      "Lighthouse 95+",
      "Code Splitting",
      "Image Optimization",
      "SEO Ready",
    ],
    price: "From $799",
    color: "#00f5d4",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 22V12h6v10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "E-Commerce Solutions",
    shortDesc: "Modern online stores",
    features: [
      "Shopify",
      "WooCommerce",
      "Stripe Integration",
      "Payment Gateway",
    ],
    price: "From $1,999",
    color: "#00bbf9",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Maintenance & Support",
    shortDesc: "Ongoing care for your site",
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Backup Solutions",
      "Bug Fixes",
    ],
    price: "From $199/mo",
    color: "#00f5d4",
  },
  {
    id: "06",
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
    shortDesc: "Tailored to your needs",
    features: ["SaaS Platforms", "Dashboards", "CRM Systems", "Real-time Apps"],
    price: "Custom Quote",
    color: "#00bbf9",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      {/* Background */}
      <div className="services__bg">
        <div className="services__grid" />
        <div className="services__glow services__glow--1" />
        <div className="services__glow services__glow--2" />
      </div>

      {/* Section Label */}
      <div className="services__label-row">
        <span className="services__label-line" />
        <span className="services__label-text">What We Offer</span>
        <span className="services__label-line" />
      </div>

      {/* Header */}
      <div className="services__header">
        <h2 className="services__heading">
          <span className="services__heading-line">Premium</span>
          <span className="services__heading-line services__heading-line--gradient">
            Web Development
          </span>
          <span className="services__heading-line">Services</span>
        </h2>
        <p className="services__subtext">
          End-to-end solutions crafted with precision, performance, and
          pixel-perfect design. From concept to deployment — we've got you
          covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services__grid-cards">
        {servicesData.map((service, i) => (
          <div
            key={service.id}
            className="services__card"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div
              className="services__card-glow"
              style={{ background: `${service.color}20` }}
            />
            <div className="services__card-inner">
              {/* Icon & ID */}
              <div className="services__card-top">
                <div
                  className="services__card-icon"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <span className="services__card-id">{service.id}</span>
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
                      style={{ background: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="services__card-footer">
                <span className="services__price">{service.price}</span>
                <a href="/contact" className="services__card-cta">
                  <span>Inquire</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M10 5l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover Border */}
              <span
                className="services__card-border"
                style={{ background: service.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="services__cta-wrap">
        <p className="services__cta-text">
          Not sure which service fits your needs?
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
