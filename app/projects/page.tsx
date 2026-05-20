"use client";

import { useState } from "react";
import "./Projects.css";

/* ─────────────────────────────────────────
   DATA  (same structure as ProjectsSection)
───────────────────────────────────────── */
const allProjects = [
  {
    id: "01",
    title: "Luxury E-Commerce Platform",
    category: "E-Commerce",
    fullDesc:
      "A high-end fashion e-commerce platform featuring seamless checkout, product recommendations, and an immersive shopping experience. Built with performance and conversion in mind.",
    shortDesc: "High-end fashion store with seamless checkout experience",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript"],
    image: "/projects/project1.jpg",
    link: "/projects/luxury-ecommerce",
    color: "#00d4ff",
    featured: true,
    year: "2024",
    icon: "🛍️",
  },
  {
    id: "02",
    title: "FinTech Dashboard",
    category: "Web App",
    fullDesc:
      "Real-time financial analytics dashboard for investors with live data streaming, interactive charts, and portfolio management tools.",
    shortDesc: "Real-time financial analytics dashboard for investors",
    tags: ["React", "Firebase", "Chart.js", "Recharts"],
    image: "/projects/project2.jpg",
    link: "/projects/fintech-dashboard",
    color: "#0099cc",
    featured: true,
    year: "2024",
    icon: "📊",
  },
  {
    id: "03",
    title: "Creative Agency Portfolio",
    category: "Portfolio",
    fullDesc:
      "Modern, animated portfolio for a design agency showcasing their work with stunning transitions and immersive storytelling.",
    shortDesc: "Modern, animated portfolio for a design agency",
    tags: ["Next.js", "Framer Motion", "GSAP", "Three.js"],
    image: "/projects/project3.jpg",
    link: "/projects/agency-portfolio",
    color: "#00d4ff",
    featured: false,
    year: "2023",
    icon: "🎨",
  },
  {
    id: "04",
    title: "Real Estate Platform",
    category: "Web App",
    fullDesc:
      "Property listing platform with advanced filters, interactive maps, and virtual tour integrations for real estate agencies.",
    shortDesc: "Property listing platform with advanced filters",
    tags: ["Next.js", "Supabase", "Mapbox", "Tailwind"],
    image: "/projects/project4.jpg",
    link: "/projects/real-estate",
    color: "#0099cc",
    featured: true,
    year: "2024",
    icon: "🏠",
  },
  {
    id: "05",
    title: "AI Content Generator",
    category: "SaaS",
    fullDesc:
      "AI-powered content creation tool for marketers to generate blog posts, social media content, and ad copy in seconds.",
    shortDesc: "AI-powered content creation tool for marketers",
    tags: ["React", "OpenAI API", "Tailwind", "Vercel"],
    image: "/projects/project5.jpg",
    link: "/projects/ai-content-generator",
    color: "#00d4ff",
    featured: false,
    year: "2024",
    icon: "🤖",
  },
  {
    id: "06",
    title: "Food Delivery App",
    category: "Mobile Web",
    fullDesc:
      "Restaurant discovery and food ordering platform with real-time order tracking and payment integration.",
    shortDesc: "Restaurant discovery and food ordering platform",
    tags: ["Next.js", "PWA", "Stripe", "Tailwind"],
    image: "/projects/project6.jpg",
    link: "/projects/food-delivery",
    color: "#0099cc",
    featured: true,
    year: "2023",
    icon: "🍔",
  },
  {
    id: "07",
    title: "Healthcare Portal",
    category: "Web App",
    fullDesc:
      "Patient management system with appointment scheduling, medical records, and telemedicine integration.",
    shortDesc: "Patient management system for healthcare providers",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/projects/project7.jpg",
    link: "/projects/healthcare-portal",
    color: "#00d4ff",
    featured: false,
    year: "2023",
    icon: "🏥",
  },
  {
    id: "08",
    title: "NFT Marketplace",
    category: "E-Commerce",
    fullDesc:
      "Blockchain-based NFT marketplace with wallet integration, minting capabilities, and auction system.",
    shortDesc: "Blockchain-based NFT marketplace",
    tags: ["Next.js", "Web3", "Ethereum", "IPFS"],
    image: "/projects/project8.jpg",
    link: "/projects/nft-marketplace",
    color: "#0099cc",
    featured: false,
    year: "2024",
    icon: "🖼️",
  },
  {
    id: "09",
    title: "Learning Management System",
    category: "SaaS",
    fullDesc:
      "Complete LMS platform with course creation, video lessons, quizzes, and certification system.",
    shortDesc: "Complete LMS platform for online education",
    tags: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    image: "/projects/project9.jpg",
    link: "/projects/lms",
    color: "#00d4ff",
    featured: false,
    year: "2023",
    icon: "📚",
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Web App",
  "Portfolio",
  "SaaS",
  "Mobile Web",
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = allProjects.filter((p) => p.featured);

  return (
    <main className="projects-page">
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="pp-hero">
        {/* Background — identical to ProjectsSection */}
        <div className="pp-hero__bg">
          <div className="pp-hero__grid" />
          <div className="pp-hero__glow pp-hero__glow--1" />
          <div className="pp-hero__glow pp-hero__glow--2" />
        </div>

        <div className="pp-hero__content">
          {/* Label row */}
          <div className="pp-hero__label-row">
            <span className="pp-hero__label-line" />
            <span className="pp-hero__label-text">Featured Work</span>
            <span className="pp-hero__label-line" />
          </div>

          {/* Heading */}
          <h1 className="pp-hero__heading">
            <span className="pp-hero__heading-line">Crafted with</span>
            <span className="pp-hero__heading-line pp-hero__heading-line--gradient">
              Precision &amp; Passion
            </span>
          </h1>

          <p className="pp-hero__subtext">
            Explore a collection of my finest work — each project represents
            countless hours of dedication, creativity, and technical excellence.
          </p>

          {/* Stats bar — same style as ProjectsSection bottom stats */}
          <div className="pp-hero__stats" role="list">
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">50+</span>
              <span className="pp-hero__stat-label">Projects</span>
            </div>
            <div className="pp-hero__stat-divider" aria-hidden="true" />
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">15+</span>
              <span className="pp-hero__stat-label">Happy Clients</span>
            </div>
            <div className="pp-hero__stat-divider" aria-hidden="true" />
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">100%</span>
              <span className="pp-hero__stat-label">Delivery Rate</span>
            </div>
            <div className="pp-hero__stat-divider" aria-hidden="true" />
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">6+</span>
              <span className="pp-hero__stat-label">Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PROJECTS  (horizontal split cards)
      ══════════════════════════════════════ */}
      <section className="pp-featured">
        <div className="pp-featured__bg">
          <div className="pp-featured__grid" />
          <div className="pp-featured__glow pp-featured__glow--1" />
          <div className="pp-featured__glow pp-featured__glow--2" />
        </div>

        {/* Section label */}
        <div className="pp-featured__label-row">
          <span className="pp-featured__label-line" />
          <span className="pp-featured__label-text">Spotlight</span>
          <span className="pp-featured__label-line" />
        </div>

        <div className="pp-featured__header">
          <h2 className="pp-featured__heading">
            <span className="pp-featured__heading-line">Featured</span>
            <span className="pp-featured__heading-line pp-featured__heading-line--gradient">
              Projects
            </span>
          </h2>
          <p className="pp-featured__subtext">
            Hand-picked highlights — my most impactful and technically complex
            work.
          </p>
        </div>

        <div className="pp-featured__grid-cards">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className="pp-feat-card"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Image side */}
              <div className="pp-feat-card__image">
                <div className="pp-feat-card__image-placeholder">
                  <div className="pp-feat-card__image-bg" />
                  <span className="pp-feat-card__image-icon">
                    {project.icon}
                  </span>
                </div>
                <div className="pp-feat-card__overlay">
                  <a href={project.link} className="pp-feat-card__view">
                    <span>View Case Study</span>
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
                </div>
              </div>

              {/* Content side */}
              <div className="pp-feat-card__content">
                {/* Number badge — same as ProjectsSection card */}
                <div className="pp-feat-card__badge" aria-hidden="true">
                  <div className="pp-feat-card__badge-inner">
                    <span className="pp-feat-card__badge-num">
                      {project.id}
                    </span>
                  </div>
                </div>

                <div className="pp-feat-card__top">
                  <span
                    className="pp-feat-card__category"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="pp-feat-card__year">{project.year}</span>
                </div>

                <h3 className="pp-feat-card__title">{project.title}</h3>
                <p className="pp-feat-card__desc">{project.fullDesc}</p>

                <div className="pp-feat-card__tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="pp-feat-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="pp-feat-card__link"
                  style={{ color: project.color }}
                >
                  <span>Explore Project</span>
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

                {/* Bottom accent bar */}
                <div
                  className="pp-feat-card__border"
                  style={{ background: project.color }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ALL PROJECTS  (same grid as ProjectsSection)
      ══════════════════════════════════════ */}
      <section className="pp-all">
        <div className="pp-all__bg">
          <div className="pp-all__grid" />
          <div className="pp-all__glow pp-all__glow--1" />
          <div className="pp-all__glow pp-all__glow--2" />
        </div>

        {/* Section label */}
        <div className="pp-all__label-row">
          <span className="pp-all__label-line" />
          <span className="pp-all__label-text">Full Portfolio</span>
          <span className="pp-all__label-line" />
        </div>

        <div className="pp-all__header">
          <h2 className="pp-all__heading">
            <span className="pp-all__heading-line">All</span>
            <span className="pp-all__heading-line pp-all__heading-line--gradient">
              Projects
            </span>
          </h2>
          <p className="pp-all__subtext">Every project tells a unique story</p>
        </div>

        {/* Search + Filter — same pill style */}
        <div className="pp-all__controls">
          {/* Search */}
          <div className="pp-all__search-wrap">
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              className="pp-all__search-icon"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 12l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by title or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pp-all__search-input"
            />
          </div>

          {/* Category filter — same as ProjectsSection */}
          <div className="pp-all__filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`pp-all__filter-btn ${
                  activeCategory === category
                    ? "pp-all__filter-btn--active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                {activeCategory === category && (
                  <span className="pp-all__filter-dot" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid — same card design as ProjectsSection */}
        {filteredProjects.length > 0 ? (
          <div className="pp-all__grid-cards">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="pp-all__card"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="pp-all__card-inner">
                  {/* Image */}
                  <div className="pp-all__card-image">
                    <div className="pp-all__card-image-placeholder">
                      <div className="pp-all__card-image-bg" />
                      <span className="pp-all__card-image-icon">
                        {project.icon}
                      </span>
                    </div>
                    <div className="pp-all__card-overlay">
                      <a href={project.link} className="pp-all__card-view">
                        <span>View Project</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4 10h12M12 6l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pp-all__card-content">
                    <div className="pp-all__card-top">
                      <span
                        className="pp-all__card-category"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <span className="pp-all__card-id">{project.id}</span>
                    </div>
                    <h3 className="pp-all__card-title">{project.title}</h3>
                    <p className="pp-all__card-desc">{project.shortDesc}</p>
                    <div className="pp-all__card-tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="pp-all__card-tag">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="pp-all__card-tag">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="pp-all__card-border"
                    style={{ background: project.color }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pp-all__empty">
            <span className="pp-all__empty-icon">🔍</span>
            <h3 className="pp-all__empty-title">No projects found</h3>
            <p className="pp-all__empty-sub">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="pp-cta">
        <div className="pp-cta__bg" aria-hidden="true" />

        {/* separator */}
        <div className="pp-cta__separator" aria-hidden="true" />

        <div className="pp-cta__inner">
          <p className="pp-cta__label">Have a Project in Mind?</p>
          <h2 className="pp-cta__heading">
            Let's Build Something{" "}
            <span className="pp-cta__heading-gradient">Extraordinary</span>
          </h2>
          <p className="pp-cta__sub">
            Let's bring your vision to life with the same level of dedication
            and technical excellence.
          </p>

          <div className="pp-cta__buttons">
            <a href="/contact" className="pp-cta__btn pp-cta__btn--primary">
              <span>Start Your Project</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="pp-cta__btn-shine" />
            </a>
            <a href="/services" className="pp-cta__btn pp-cta__btn--secondary">
              <span>View Services</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
