"use client";

import { useState } from "react";
import "./ProjectsSection.css";

const projectsData = [
  {
    id: "01",
    title: "Luxury E-Commerce Platform",
    category: "E-Commerce",
    shortDesc: "High-end fashion store with seamless checkout experience",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    image: "/projects/project1.jpg",
    link: "/projects/luxury-ecommerce",
    color: "#00d4ff",
  },
  {
    id: "02",
    title: "FinTech Dashboard",
    category: "Web App",
    shortDesc: "Real-time financial analytics dashboard for investors",
    tags: ["React", "Firebase", "Chart.js"],
    image: "/projects/project2.jpg",
    link: "/projects/fintech-dashboard",
    color: "#0099cc",
  },
  {
    id: "03",
    title: "Creative Agency Portfolio",
    category: "Portfolio",
    shortDesc: "Modern, animated portfolio for a design agency",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    image: "/projects/project3.jpg",
    link: "/projects/agency-portfolio",
    color: "#00d4ff",
  },
  {
    id: "04",
    title: "Real Estate Platform",
    category: "Web App",
    shortDesc: "Property listing platform with advanced filters",
    tags: ["Next.js", "Supabase", "Mapbox"],
    image: "/projects/project4.jpg",
    link: "/projects/real-estate",
    color: "#0099cc",
  },
  {
    id: "05",
    title: "AI Content Generator",
    category: "SaaS",
    shortDesc: "AI-powered content creation tool for marketers",
    tags: ["React", "OpenAI API", "Tailwind"],
    image: "/projects/project5.jpg",
    link: "/projects/ai-content-generator",
    color: "#00d4ff",
  },
  {
    id: "06",
    title: "Food Delivery App",
    category: "Mobile Web",
    shortDesc: "Restaurant discovery and food ordering platform",
    tags: ["Next.js", "PWA", "Stripe"],
    image: "/projects/project6.jpg",
    link: "/projects/food-delivery",
    color: "#0099cc",
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

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="projects-section" id="projects">
      {/* Background */}
      <div className="projects__bg">
        <div className="projects__grid" />
        <div className="projects__glow projects__glow--1" />
        <div className="projects__glow projects__glow--2" />
      </div>

      {/* Section Label */}
      <div className="projects__label-row">
        <span className="projects__label-line" />
        <span className="projects__label-text">Featured Work</span>
        <span className="projects__label-line" />
      </div>

      {/* Header */}
      <div className="projects__header">
        <h2 className="projects__heading">
          <span className="projects__heading-line">Recent</span>
          <span className="projects__heading-line projects__heading-line--gold">
            Projects
          </span>
        </h2>
        <p className="projects__subtext">
          A showcase of my finest work — each project crafted with precision,
          passion, and pixel-perfect attention to detail.
        </p>
      </div>

      {/* Category Filter */}
      <div className="projects__filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`projects__filter-btn ${
              activeCategory === category ? "projects__filter-btn--active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            <span>{category}</span>
            {activeCategory === category && (
              <span className="projects__filter-active-dot" />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects__grid-cards">
        {filteredProjects.map((project, i) => (
          <div
            key={project.id}
            className="projects__card"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div className="projects__card-inner">
              {/* Image Container */}
              <div className="projects__card-image">
                <div className="projects__card-image-placeholder">
                  <div className="projects__card-image-bg" />
                  <span className="projects__card-image-icon">🎨</span>
                </div>
                <div className="projects__card-overlay">
                  <a href={project.link} className="projects__card-view">
                    <span>View Project</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
              <div className="projects__card-content">
                <div className="projects__card-top">
                  <span
                    className="projects__card-category"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="projects__card-id">{project.id}</span>
                </div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.shortDesc}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border */}
              <div
                className="projects__card-border"
                style={{ background: project.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="projects__cta-wrap">
        <a href="/projects" className="projects__btn projects__btn--primary">
          <span>View All Projects</span>
          <span className="projects__btn-shine" />
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
    </section>
  );
}
