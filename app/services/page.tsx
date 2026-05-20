"use client";

import "./Services.css";

const servicesData = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    shortDesc: "Pixel-perfect, responsive interfaces that captivate users",
    fullDesc:
      "I craft modern, responsive web applications using React, Next.js, and Tailwind CSS. Every pixel is precisely placed, every animation smooth, and every interaction intuitive. Your users will never want to leave.",
    features: [
      "React 19 / Next.js 15",
      "Tailwind CSS / Framer Motion",
      "TypeScript",
      "Responsive Design",
      "Cross-browser Compatible",
    ],
    price: "$999 - $2,499",
    timeline: "2-4 weeks",
    color: "#6c63ff",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    title: "Backend & API Development",
    shortDesc: "Scalable, secure, and blazing-fast server solutions",
    fullDesc:
      "Powerful backend systems that handle anything you throw at them. From authentication to real-time data, I build robust APIs with Firebase, Supabase, and Node.js. Your app will be ready to scale from day one.",
    features: [
      "Node.js / Express",
      "Firebase / Supabase",
      "RESTful APIs / GraphQL",
      "Authentication & Security",
      "Database Design",
    ],
    price: "$1,299 - $2,999",
    timeline: "3-5 weeks",
    color: "#00d4ff",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    shortDesc: "Lightning-fast load times, 95+ Lighthouse scores",
    fullDesc:
      "Slow websites kill conversions. I optimize your existing site or build new ones with performance-first architecture. Core Web Vitals, SEO, and accessibility — all baked in from the start, not bolted on at the end.",
    features: [
      "Lighthouse 95+",
      "Core Web Vitals",
      "SEO Optimization",
      "Image Optimization",
      "Code Splitting",
    ],
    price: "$799 - $1,499",
    timeline: "1-3 weeks",
    color: "#c9a03d",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    shortDesc: "Modern online stores that convert visitors to customers",
    fullDesc:
      "Beautiful, fast, and secure e-commerce platforms that drive sales. Whether you need Shopify, WooCommerce, or a custom solution, I build stores that are easy to manage and even easier to shop from.",
    features: [
      "Shopify / WooCommerce",
      "Stripe / PayPal Integration",
      "Product Management",
      "Cart & Checkout",
      "Inventory Systems",
    ],
    price: "$1,999 - $4,999",
    timeline: "4-8 weeks",
    color: "#ff6b6b",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    shortDesc: "Ongoing care for your digital presence",
    fullDesc:
      "Your website is never truly 'done'. I offer comprehensive maintenance plans that keep your site secure, updated, and performing at its best. 24/7 monitoring, regular backups, and priority support included.",
    features: [
      "24/7 Uptime Monitoring",
      "Security Patches",
      "Regular Backups",
      "Bug Fixes",
      "Priority Support",
    ],
    price: "$199 - $499/month",
    timeline: "Ongoing",
    color: "#a855f7",
  },
  {
    id: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
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
    shortDesc: "Tailored SaaS platforms and dashboards",
    fullDesc:
      "Need something unique? I build fully custom web applications for SaaS, internal tools, CRMs, and real-time platforms. No cookie-cutter solutions — just pure, hand-crafted code that solves your exact problems.",
    features: [
      "SaaS Platforms",
      "Admin Dashboards",
      "CRM Systems",
      "Real-time Features",
      "Third-party Integrations",
    ],
    price: "Custom Quote",
    timeline: "8+ weeks",
    color: "#f97316",
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
            Comprehensive web development solutions tailored to your unique
            needs. From stunning frontends to powerful backends — I deliver
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
            <h2 className="services-page__title">What I Offer</h2>
            <p className="services-page__subtitle">
              Choose the perfect solution for your business needs
            </p>
          </div>
          <div className="services-page__cards">
            {servicesData.map((service, i) => (
              <div
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div
                  className="service-card__glow"
                  style={{ background: `${service.color}15` }}
                />
                <div
                  className="service-card__icon"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <span className="service-card__id">{service.id}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__short">{service.shortDesc}</p>
                <p className="service-card__desc">{service.fullDesc}</p>
                <ul className="service-card__features">
                  {service.features.map((feat) => (
                    <li key={feat}>
                      <span
                        className="service-card__feature-dot"
                        style={{ background: service.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__price">
                    <span className="service-card__price-label">
                      Starting at
                    </span>
                    <span className="service-card__price-value">
                      {service.price}
                    </span>
                  </div>
                  <div className="service-card__timeline">
                    <span className="service-card__timeline-label">
                      Timeline
                    </span>
                    <span className="service-card__timeline-value">
                      {service.timeline}
                    </span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="service-card__cta"
                  style={{ borderColor: service.color }}
                >
                  <span>Request Quote</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 9h12M12 6l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div
                  className="service-card__border"
                  style={{ background: service.color }}
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
            <h2 className="services-process__title">My Process</h2>
            <p className="services-process__subtitle">
              How I bring your vision to life
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

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="services-faq__container">
          <h2 className="services-faq__title">Frequently Asked Questions</h2>
          <div className="services-faq__grid">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most projects take 2-6 weeks depending on complexity. I provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! I offer maintenance plans starting at $199/month that include updates, security patches, and priority support.",
              },
              {
                q: "What's your payment structure?",
                a: "Typically 50% upfront, 25% at milestone, and 25% upon completion. Custom plans available for larger projects.",
              },
              {
                q: "Can you work with my existing team?",
                a: "Absolutely! I collaborate seamlessly with designers, marketers, and other developers.",
              },
              {
                q: "Do you provide SEO services?",
                a: "Yes, all sites are built with SEO best practices. I also offer dedicated SEO optimization as an add-on service.",
              },
              {
                q: "What happens after launch?",
                a: "I provide 30 days of free support post-launch, plus ongoing maintenance options to keep your site running perfectly.",
              },
            ].map((faq, i) => (
              <div key={i} className="services-faq__item">
                <h3 className="services-faq__question">{faq.q}</h3>
                <p className="services-faq__answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta__container">
          <h2 className="services-cta__title">
            Ready to Build Something Great?
          </h2>
          <p className="services-cta__subtitle">
            Let's discuss your project and turn your ideas into reality.
          </p>
          <div className="services-cta__buttons">
            <a
              href="/contact"
              className="services-cta__btn services-cta__btn--primary"
            >
              <span>Start Your Project</span>
              <span className="services-cta__btn-shine" />
            </a>
            <a
              href="/projects"
              className="services-cta__btn services-cta__btn--secondary"
            >
              <span>View Portfolio</span>
            </a>
          </div>
          <p className="services-cta__note">
            Free consultation • No obligation • 24hr response
          </p>
        </div>
      </section>
    </main>
  );
}
