"use client";

import { useState } from "react";
import Image from "next/image";
import "./Projects.css";

/* ─────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────── */
const categories = [
  "All",
  "Frontend",
  "Landing Page",
  "Functionality",
  "Firebase",
  "Supabase",
];

/* ─────────────────────────────────────────
   PROJECTS DATA (Removed: Stop Watch, Quiz App, Todo List, Dog Form, Panda Form, Far Away, Yokos Kitchen, Portfolio CV)
   Total: 22 projects
───────────────────────────────────────── */
const allProjects = [
  {
    id: "01",
    title: "Blog Website",
    category: "Firebase",
    languages: ["React", "Tailwind CSS", "Firebase"],
    fullDesc:
      "A modern blog website built with React, Tailwind CSS, and Firebase. Users can create, edit, and update blogs in real time. Includes a feedback section and an admin panel for managing content and user interactions — all powered by Firebase backend.",
    shortDesc:
      "Create, edit, and update blogs with Firebase-powered admin panel.",
    image: "/blogproj.png",
    link: "https://bejewelled-jelly-b75e56.netlify.app/",
    color: "#ff6b35",
    featured: true,
    year: "2024",
    icon: "🔥",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "02",
    title: "Project Management",
    category: "Firebase",
    languages: ["React", "Tailwind CSS", "Firebase"],
    fullDesc:
      "A full-featured project management platform built with React, Tailwind CSS, and Firebase. Users can create, assign, edit, and track projects in real time. Features an intuitive admin panel backed by Firebase for smooth team collaboration and control.",
    shortDesc: "Real-time project tracking with Firebase admin panel.",
    image: "/projimg.png",
    link: "https://project-managment088.netlify.app/",
    color: "#ff6b35",
    featured: true,
    year: "2024",
    icon: "🔥",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: "03",
    title: "LinkedIn Clone",
    category: "Landing Page",
    languages: ["HTML", "CSS"],
    fullDesc:
      "A pixel-perfect LinkedIn clone crafted with pure HTML and CSS. Features a fully responsive layout with a structured Home page, My Network section, and Profile page — capturing the professional networking feel with a clean, modern aesthetic.",
    shortDesc: "Responsive LinkedIn clone with Home, Network & Profile pages.",
    image: "/linkedin.png",
    link: "https://husban088.github.io/linkedin/",
    color: "#0077b5",
    featured: false,
    year: "2023",
    icon: "💼",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "04",
    title: "Facebook Clone",
    category: "Landing Page",
    languages: ["HTML", "CSS"],
    fullDesc:
      "A beautifully crafted Facebook clone built with HTML and CSS. Features a fully responsive design with dynamic Home, Shop, and Group pages — recreating the social media experience with a polished, modern layout.",
    shortDesc: "Responsive Facebook clone with Home, Shop & Group pages.",
    image: "/fb.png",
    link: "https://husban088.github.io/facebook/",
    color: "#1877f2",
    featured: false,
    year: "2023",
    icon: "📘",
    country: "USA",
    countryFlag: "🇺🇸",
  },
  {
    id: "05",
    title: "Kitab",
    category: "Landing Page",
    languages: ["HTML", "CSS", "Sass"],
    fullDesc:
      "A stunning book-themed landing page built with HTML, CSS, and Sass. Features 13 beautifully designed sections with smooth scroll animations and a fully responsive layout that adapts perfectly to every screen size.",
    shortDesc: "Book website with 13 animated sections, built with Sass.",
    image: "/kitab.png",
    link: "https://husban088.github.io/kitab/",
    color: "#9b59b6",
    featured: true,
    year: "2023",
    icon: "📖",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "06",
    title: "Natours",
    category: "Landing Page",
    languages: ["HTML", "CSS", "Sass"],
    fullDesc:
      "A breathtaking nature tours landing page built with HTML, CSS, and Sass. Showcases 6 immersive sections with cinematic animations, hover effects, and a fully responsive layout — designed to inspire adventure.",
    shortDesc: "Nature travel website with 6 immersive animated sections.",
    image: "/natours.png",
    link: "https://husban088.github.io/natours/",
    color: "#27ae60",
    featured: false,
    year: "2023",
    icon: "🌿",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "07",
    title: "Nexter",
    category: "Landing Page",
    languages: ["HTML", "CSS", "Sass"],
    fullDesc:
      "A sophisticated real estate landing page built with HTML, CSS, and Sass using an advanced CSS Grid layout. Features 5 elegant sections with property showcases, testimonials, and a fully responsive design for discovering dream homes.",
    shortDesc:
      "Real estate website with CSS Grid layout and 5 elegant sections.",
    image: "/nexter.png",
    link: "https://husban088.github.io/nexter/",
    color: "#c0392b",
    featured: false,
    year: "2023",
    icon: "🏡",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "08",
    title: "Trillo",
    category: "Landing Page",
    languages: ["HTML", "CSS", "Sass"],
    fullDesc:
      "A sleek travel booking interface built with HTML, CSS, and Sass using CSS Flexbox. Features 4 dynamic sections with smooth animations, hotel listings, and navigation — all fully responsive for a seamless travel planning experience.",
    shortDesc: "Travel booking UI with Flexbox layout and smooth animations.",
    image: "/trillo.png",
    link: "https://husban088.github.io/trillo/",
    color: "#e67e22",
    featured: false,
    year: "2023",
    icon: "✈️",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: "09",
    title: "Tindog",
    category: "Landing Page",
    languages: ["HTML", "Bootstrap"],
    fullDesc:
      "A fun and creative dog dating app landing page built with HTML and Bootstrap. Features 5 engaging sections with a playful design, responsive grid layout, pricing plans, and testimonials — fully optimized for all screen sizes.",
    shortDesc: "Dog dating app landing page with 5 sections using Bootstrap.",
    image: "/tindog.png",
    link: "https://husban088.github.io/bootrstrap4/",
    color: "#e74c3c",
    featured: false,
    year: "2023",
    icon: "🐶",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "10",
    title: "OLX Clone",
    category: "Frontend",
    languages: ["React", "Tailwind CSS"],
    fullDesc:
      "A feature-rich OLX clone built with React and Tailwind CSS. Includes 5 dynamic pages — Home, Listings, Post Ad, Login, and Profile — with seamless navigation, responsive design, and a polished UI for buying and selling transactions.",
    shortDesc: "OLX clone with 5 dynamic React pages and full responsiveness.",
    image: "/olx.png",
    link: "https://olx-clone-088.netlify.app/",
    color: "#3d5a80",
    featured: true,
    year: "2024",
    icon: "🛒",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "11",
    title: "Power Store",
    category: "Landing Page",
    languages: ["HTML", "CSS"],
    fullDesc:
      "A modern e-commerce landing site built with HTML and CSS. Features 7 engaging pages and 4 well-structured sections — product showcase, offers, categories, and contact — designed for a seamless shopping experience on all devices.",
    shortDesc:
      "7-page responsive shopping website with modern HTML/CSS design.",
    image: "/power.png",
    link: "https://husban088.github.io/leggers/",
    color: "#f39c12",
    featured: false,
    year: "2023",
    icon: "⚡",
    country: "USA",
    countryFlag: "🇺🇸",
  },
  {
    id: "12",
    title: "Stallion Market",
    category: "Supabase",
    languages: ["React", "Tailwind CSS", "Supabase"],
    fullDesc:
      "A powerful full-stack marketplace platform built with React, Tailwind CSS, and Supabase. Features 11 landing pages and 5 sections including product listings, user authentication, real-time database operations, and a smooth shopping experience powered by Supabase backend.",
    shortDesc: "Full-stack marketplace with Supabase backend and 11 pages.",
    image: "/stallion.png",
    link: "https://stallion-brand.firebaseapp.com/",
    color: "#3ecf8e",
    featured: true,
    year: "2024",
    icon: "🗄️",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: "13",
    title: "Panthify Store",
    category: "Frontend",
    languages: ["React", "Tailwind CSS", "REST API"],
    fullDesc:
      "A sleek full-featured e-commerce platform built with React and Tailwind CSS, integrated with a REST API for live product data. Features 6 landing pages and 5 sections — product grid, cart, filters, and checkout flow — with smooth navigation and modern design.",
    shortDesc: "E-commerce store with REST API integration and 6 pages.",
    image: "/panthify.png",
    link: "https://fake-shop-api088.netlify.app/",
    color: "#8e44ad",
    featured: true,
    year: "2024",
    icon: "🛍️",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "14",
    title: "Power Tech",
    category: "Landing Page",
    languages: ["HTML", "Sass"],
    fullDesc:
      "A polished tech company landing page built with HTML and Sass. Showcases 6 engaging sections — hero, services, features, team, pricing, and contact — with smooth CSS animations and a fully responsive layout for all devices.",
    shortDesc: "Tech landing page with 6 animated sections built with Sass.",
    image: "/ptech.png",
    link: "https://husban088.github.io/powertech/",
    color: "#2980b9",
    featured: false,
    year: "2023",
    icon: "💻",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "15",
    title: "Power Code",
    category: "Landing Page",
    languages: ["HTML", "Bootstrap"],
    fullDesc:
      "A professional coding bootcamp landing page built with HTML and Bootstrap 5. Features 10 well-structured sections including hero, courses, instructors, testimonials, pricing, and FAQ — with a fully responsive grid and modern Bootstrap components.",
    shortDesc: "Bootstrap 5 coding bootcamp landing page with 10 sections.",
    image: "/pcode.png",
    link: "https://husban088.github.io/bootstrap5/",
    color: "#7952b3",
    featured: false,
    year: "2023",
    icon: "🔵",
    country: "USA",
    countryFlag: "🇺🇸",
  },
  {
    id: "16",
    title: "Riseministry Pakistan",
    category: "Landing Page",
    languages: ["HTML", "CSS", "Bootstrap"],
    fullDesc:
      "An elegantly designed ministry and religious organization website built with HTML, CSS, and Bootstrap. Features 11 beautifully crafted landing pages and 11 sections — sermons, events, donations, gallery — with a fully responsive experience on every device.",
    shortDesc:
      "11-page religious ministry website with Bootstrap responsive design.",
    image: "/rempak.png",
    link: "https://husban088.github.io/Riseministry-pakistan/",
    color: "#16a085",
    featured: false,
    year: "2023",
    icon: "🕌",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "17",
    title: "Fashionista",
    category: "Functionality",
    languages: ["HTML", "CSS", "JavaScript"],
    fullDesc:
      "A stylish fashion e-commerce website built with HTML, CSS, and JavaScript. Features 7 stunning pages and 3 sleek sections with JS-powered product filtering, dynamic cart, and smooth animations — fully responsive across all devices.",
    shortDesc: "Fashion store with JS animations, dynamic cart across 7 pages.",
    image: "/fashionista.png",
    link: "https://husban088.github.io/ecomerce-store-by-js/",
    color: "#e91e8c",
    featured: false,
    year: "2023",
    icon: "👗",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: "18",
    title: "Eleganza",
    category: "Landing Page",
    languages: ["HTML", "Bootstrap"],
    fullDesc:
      "A beautifully crafted lifestyle brand landing page built with HTML and Bootstrap. Features 5 elegant pages and 5 well-structured sections — hero, collections, about, gallery, and contact — with a refined aesthetic and fully responsive layout.",
    shortDesc: "Elegant lifestyle brand with 5 Bootstrap-powered pages.",
    image: "/eleganza.png",
    link: "https://husban088.github.io/IronGear/",
    color: "#d4ac0d",
    featured: false,
    year: "2023",
    icon: "✨",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
  },
  {
    id: "19",
    title: "Eat & Split",
    category: "Frontend",
    languages: ["React", "Tailwind CSS"],
    fullDesc:
      "A practical React app for splitting dinner bills with friends. Add friends to your list, select who paid, enter the total bill, and the app calculates each person's share instantly. Features a clean single-page layout with dynamic state management.",
    shortDesc: "React bill-splitting app — add friends and split costs easily.",
    image: "/eatsplt.png",
    link: "https://eat-andd-split.netlify.app/",
    color: "#e74c3c",
    featured: false,
    year: "2024",
    icon: "🍴",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "20",
    title: "Stallion Restaurant",
    category: "Supabase",
    languages: ["React", "Tailwind CSS", "Supabase"],
    fullDesc:
      "A full-stack restaurant web application built with React, Tailwind CSS, and Supabase. Delivers a complete digital dining experience — About page, Chef showcase, online table booking, food cart with live updates, and secure order placement, all powered by Supabase real-time database.",
    shortDesc: "Full restaurant app with booking, cart & Supabase backend.",
    image: "/stallionresturant.png",
    link: "https://stallion-resturant.web.app",
    color: "#3ecf8e",
    featured: true,
    year: "2024",
    icon: "🗄️",
    country: "Germany",
    countryFlag: "🇩🇪",
  },
  {
    id: "21",
    title: "Aussie Tech Security",
    category: "Supabase",
    languages: ["Next.js", "Tailwind CSS", "Supabase"],
    fullDesc:
      "A professional cybersecurity services website built for an Australian client using Next.js, Tailwind CSS, and Supabase. Features a clean corporate design with services showcase, security solutions, contact forms, and real-time data management powered by Supabase — built and deployed for the Australian market.",
    shortDesc: "Australian cybersecurity firm website with Supabase backend.",
    image: "/aussie.png",
    link: "https://aussieetechsecurity.com.au",
    color: "#3ecf8e",
    featured: true,
    year: "2026",
    icon: "🔐",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
  {
    id: "22",
    title: "Tech4ru",
    category: "Supabase",
    languages: ["Next.js", "Tailwind CSS", "Supabase"],
    fullDesc:
      "A modern tech solutions platform built for an Australian client using Next.js, Tailwind CSS, and Supabase. Features a dynamic services directory, real-time listings, client dashboard, and secure authentication — delivering a seamless digital experience for Australia's tech community.",
    shortDesc:
      "Australian tech solutions platform with Supabase real-time data.",
    image: "/tech4ru.png",
    link: "https://www.tech4ru.com/",
    color: "#3ecf8e",
    featured: true,
    year: "2026",
    icon: "🖥️",
    country: "Australia",
    countryFlag: "🇦🇺",
  },
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
      project.languages.some((lang) =>
        lang.toLowerCase().includes(searchQuery.toLowerCase()),
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
        <div className="pp-hero__bg">
          <div className="pp-hero__grid" />
          <div className="pp-hero__glow pp-hero__glow--1" />
          <div className="pp-hero__glow pp-hero__glow--2" />
        </div>

        <div className="pp-hero__content">
          <div className="pp-hero__label-row">
            <span className="pp-hero__label-line" />
            <span className="pp-hero__label-text">Our Work</span>
            <span className="pp-hero__label-line" />
          </div>

          <h1 className="pp-hero__heading">
            <span className="pp-hero__heading-line">Crafted with</span>
            <span className="pp-hero__heading-line pp-hero__heading-line--gradient">
              Precision &amp; Passion
            </span>
          </h1>

          <p className="pp-hero__subtext">
            Explore a collection of our finest work — each project represents
            countless hours of dedication, creativity, and technical excellence.
          </p>

          <div className="pp-hero__stats" role="list">
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">22+</span>
              <span className="pp-hero__stat-label">Projects</span>
            </div>
            <div className="pp-hero__stat-divider" aria-hidden="true" />
            <div className="pp-hero__stat" role="listitem">
              <span className="pp-hero__stat-num">50+</span>
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
          FEATURED PROJECTS
      ══════════════════════════════════════ */}
      <section className="pp-featured">
        <div className="pp-featured__bg">
          <div className="pp-featured__grid" />
          <div className="pp-featured__glow pp-featured__glow--1" />
          <div className="pp-featured__glow pp-featured__glow--2" />
        </div>

        <div className="pp-featured__label-row">
          <span className="pp-featured__label-line" />
          <span className="pp-featured__label-text">Spotlight</span>
          <span className="pp-featured__label-line" />
        </div>

        <div className="pp-featured__header">
          <h2 className="pp-featured__heading">
            <span className="pp-featured__heading-line">Featured</span>
            &nbsp;
            <span className="pp-featured__heading-line pp-featured__heading-line--gradient">
              Projects
            </span>
          </h2>
          <p className="pp-featured__subtext">
            Hand-picked highlights — our most impactful and technically complex
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="pp-feat-card__real-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="pp-feat-card__overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-feat-card__view"
                  >
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
                    {project.icon} {project.category}
                  </span>
                  <span className="pp-feat-card__year">{project.year}</span>
                </div>

                <h3 className="pp-feat-card__title">{project.title}</h3>

                {/* Country Badge */}
                <div className="pp-feat-card__country">
                  <span className="pp-feat-card__country-flag">
                    {project.countryFlag}
                  </span>
                  <span className="pp-feat-card__country-name">
                    {project.country}
                  </span>
                </div>

                <p className="pp-feat-card__desc">{project.fullDesc}</p>

                {/* Languages / Tech Stack */}
                <div className="pp-feat-card__tags">
                  {project.languages.map((lang) => (
                    <span key={lang} className="pp-feat-card__tag">
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
          ALL PROJECTS
      ══════════════════════════════════════ */}
      <section className="pp-all">
        <div className="pp-all__bg">
          <div className="pp-all__grid" />
          <div className="pp-all__glow pp-all__glow--1" />
          <div className="pp-all__glow pp-all__glow--2" />
        </div>

        <div className="pp-all__label-row">
          <span className="pp-all__label-line" />
          <span className="pp-all__label-text">Full Portfolio</span>
          <span className="pp-all__label-line" />
        </div>

        <div className="pp-all__header">
          <h2 className="pp-all__heading">
            <span className="pp-all__heading-line">All</span>
            &nbsp;
            <span className="pp-all__heading-line pp-all__heading-line--gradient">
              Projects
            </span>
          </h2>
          <p className="pp-all__subtext">Every project tells a unique story</p>
        </div>

        {/* Search + Filter */}
        <div className="pp-all__controls">
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

        {/* Projects grid */}
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
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="pp-all__card-real-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="pp-all__card-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pp-all__card-view"
                      >
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
                        {project.icon} {project.category}
                      </span>
                      <span className="pp-all__card-id">{project.id}</span>
                    </div>
                    <h3 className="pp-all__card-title">{project.title}</h3>

                    {/* Country */}
                    <div className="pp-all__card-country">
                      <span>{project.countryFlag}</span>
                      <span className="pp-all__card-country-name">
                        {project.country}
                      </span>
                    </div>

                    <p className="pp-all__card-desc">{project.shortDesc}</p>

                    {/* Tech / Language tags */}
                    <div className="pp-all__card-tags">
                      {project.languages.slice(0, 3).map((lang) => (
                        <span key={lang} className="pp-all__card-tag">
                          {lang}
                        </span>
                      ))}
                      {project.languages.length > 3 && (
                        <span className="pp-all__card-tag">
                          +{project.languages.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

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
