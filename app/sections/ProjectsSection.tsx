
"use client";

import { useState } from "react";
import Image from "next/image";
import "./ProjectsSection.css";

/* ─────────────────────────────────────────
   PROJECTS DATA (Removed: Dog Form, Panda Form, Yokos Kitchen, Portfolio CV, Stopwatch, Todo List, Far Away, Quiz App)
───────────────────────────────────────── */
const projectsData = [
  {
    id: "01",
    title: "Blog Website",
    category: "Firebase",
    shortDesc:
      "Create, edit, and update blogs with Firebase-powered admin panel.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/blogproj.png",
    link: "https://bejewelled-jelly-b75e56.netlify.app/",
    color: "#ff6b35",
    icon: "🔥",
  },
  {
    id: "02",
    title: "Project Management",
    category: "Firebase",
    shortDesc: "Real-time project tracking with Firebase admin panel.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/projimg.png",
    link: "https://project-managment088.netlify.app/",
    color: "#ff6b35",
    icon: "🔥",
  },
  {
    id: "03",
    title: "LinkedIn Clone",
    category: "Landing Page",
    shortDesc: "Responsive LinkedIn clone with Home, Network & Profile pages.",
    tags: ["HTML", "CSS"],
    image: "/linkedin.png",
    link: "https://husban088.github.io/linkedin/",
    color: "#0077b5",
    icon: "💼",
  },
  {
    id: "04",
    title: "Facebook Clone",
    category: "Landing Page",
    shortDesc: "Responsive Facebook clone with Home, Shop & Group pages.",
    tags: ["HTML", "CSS"],
    image: "/fb.png",
    link: "https://husban088.github.io/facebook/",
    color: "#1877f2",
    icon: "📘",
  },
  {
    id: "05",
    title: "Kitab",
    category: "Landing Page",
    shortDesc: "Book website with 13 animated sections, built with Sass.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/kitab.png",
    link: "https://husban088.github.io/kitab/",
    color: "#9b59b6",
    icon: "📖",
  },
  {
    id: "06",
    title: "Natours",
    category: "Landing Page",
    shortDesc: "Nature travel website with 6 immersive animated sections.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/natours.png",
    link: "https://husban088.github.io/natours/",
    color: "#27ae60",
    icon: "🌿",
  },
  {
    id: "07",
    title: "Nexter",
    category: "Landing Page",
    shortDesc:
      "Real estate website with CSS Grid layout and 5 elegant sections.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/nexter.png",
    link: "https://husban088.github.io/nexter/",
    color: "#c0392b",
    icon: "🏡",
  },
  {
    id: "08",
    title: "Trillo",
    category: "Landing Page",
    shortDesc: "Travel booking UI with Flexbox layout and smooth animations.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/trillo.png",
    link: "https://husban088.github.io/trillo/",
    color: "#e67e22",
    icon: "✈️",
  },
  {
    id: "09",
    title: "Tindog",
    category: "Landing Page",
    shortDesc: "Dog dating app landing page with 5 sections using Bootstrap.",
    tags: ["HTML", "Bootstrap"],
    image: "/tindog.png",
    link: "https://husban088.github.io/bootrstrap4/",
    color: "#e74c3c",
    icon: "🐶",
  },
  {
    id: "10",
    title: "OLX Clone",
    category: "Frontend",
    shortDesc: "OLX clone with 5 dynamic React pages and full responsiveness.",
    tags: ["React", "Tailwind CSS"],
    image: "/olx.png",
    link: "https://olx-clone-088.netlify.app/",
    color: "#3d5a80",
    icon: "🛒",
  },
  {
    id: "11",
    title: "Power Store",
    category: "Landing Page",
    shortDesc:
      "7-page responsive shopping website with modern HTML/CSS design.",
    tags: ["HTML", "CSS"],
    image: "/power.png",
    link: "https://husban088.github.io/leggers/",
    color: "#f39c12",
    icon: "⚡",
  },
  {
    id: "12",
    title: "Stallion Market",
    category: "Supabase",
    shortDesc: "Full-stack marketplace with Supabase backend and 11 pages.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    image: "/stallion.png",
    link: "https://stallion-brand.firebaseapp.com/",
    color: "#3ecf8e",
    icon: "🗄️",
  },
  {
    id: "13",
    title: "Panthify Store",
    category: "Frontend",
    shortDesc: "E-commerce store with REST API integration and 6 pages.",
    tags: ["React", "Tailwind CSS", "REST API"],
    image: "/panthify.png",
    link: "https://fake-shop-api088.netlify.app/",
    color: "#8e44ad",
    icon: "🛍️",
  },
  {
    id: "14",
    title: "Power Tech",
    category: "Landing Page",
    shortDesc: "Tech landing page with 6 animated sections built with Sass.",
    tags: ["HTML", "Sass"],
    image: "/ptech.png",
    link: "https://husban088.github.io/powertech/",
    color: "#2980b9",
    icon: "💻",
  },
  {
    id: "15",
    title: "Power Code",
    category: "Landing Page",
    shortDesc: "Bootstrap 5 coding bootcamp landing page with 10 sections.",
    tags: ["HTML", "Bootstrap"],
    image: "/pcode.png",
    link: "https://husban088.github.io/bootstrap5/",
    color: "#7952b3",
    icon: "🔵",
  },
  {
    id: "16",
    title: "Riseministry Pakistan",
    category: "Landing Page",
    shortDesc:
      "11-page religious ministry website with Bootstrap responsive design.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/rempak.png",
    link: "https://husban088.github.io/Riseministry-pakistan/",
    color: "#16a085",
    icon: "🕌",
  },
  {
    id: "17",
    title: "Fashionista",
    category: "Functionality",
    shortDesc: "Fashion store with JS animations, dynamic cart across 7 pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/fashionista.png",
    link: "https://husban088.github.io/ecomerce-store-by-js/",
    color: "#e91e8c",
    icon: "👗",
  },
  {
    id: "18",
    title: "Eleganza",
    category: "Landing Page",
    shortDesc: "Elegant lifestyle brand with 5 Bootstrap-powered pages.",
    tags: ["HTML", "Bootstrap"],
    image: "/eleganza.png",
    link: "https://husban088.github.io/IronGear/",
    color: "#d4ac0d",
    icon: "✨",
  },
  {
    id: "19",
    title: "Eat & Split",
    category: "Frontend",
    shortDesc: "React bill-splitting app — add friends and split costs easily.",
    tags: ["React", "Tailwind CSS"],
    image: "/eatsplt.png",
    link: "https://eat-andd-split.netlify.app/",
    color: "#e74c3c",
    icon: "🍴",
  },
  {
    id: "20",
    title: "Stallion Restaurant",
    category: "Supabase",
    shortDesc: "Full restaurant app with booking, cart & Supabase backend.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    image: "/stallionresturant.png",
    link: "https://stallion-restaurant.vercel.app/",
    color: "#3ecf8e",
    icon: "🗄️",
  },
  {
    id: "21",
    title: "Aussie Tech Security",
    category: "Supabase",
    shortDesc: "Australian cybersecurity firm website with Supabase backend.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/aussie.png",
    link: "https://aussieetechsecurity.com.au",
    color: "#3ecf8e",
    icon: "🔐",
  },
  {
    id: "22",
    title: "Tech4ru",
    category: "Supabase",
    shortDesc:
      "Australian tech solutions platform with Supabase real-time data.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/tech4ru.png",
    link: "https://www.tech4ru.com/",
    color: "#3ecf8e",
    icon: "🖥️",
  },
  {
    id: "23",
    title: "Muscle Era",
    category: "Supabase",
    shortDesc:
      "Professional gym & fitness website with Supabase backend, built for an Australian client.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/muscleera.png",
    link: "https://muscle-era.vercel.app/",
    color: "#3ecf8e",
    icon: "💪",
  },
  {
    id: "24",
    title: "Chat Web App",
    category: "Mobile App",
    shortDesc:
      "Real-time chat web application with instant messaging, built on Node.js and Supabase.",
    tags: ["Node.js", "Supabase", "Real-time"],
    image: "/chat.png",
    link: "",
    color: "#3ecf8e",
    icon: "💬",
  },
  {
    id: "25",
    title: "SMC Trading Notes App",
    category: "Mobile App",
    shortDesc:
      "React Native (Expo) crypto trading app with live charts and SMC notes, powered by Firebase.",
    tags: ["React Native", "Expo", "Firebase"],
    image: "/trading.png",
    link: "",
    color: "#ff6b35",
    icon: "📈",
  },
];

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
  "Mobile App",
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
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
        <span className="projects__label-text">Our Work</span>
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
          A showcase of our finest work — each project crafted with precision,
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="projects__card-real-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {project.link && (
                  <div className="projects__card-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-view"
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
                )}
              </div>

              {/* Content */}
              <div className="projects__card-content">
                <div className="projects__card-top">
                  <span
                    className="projects__card-category"
                    style={{ color: project.color }}
                  >
                    {project.icon} {project.category}
                  </span>
                  <span className="projects__card-id">{project.id}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>

                <p className="projects__card-desc">{project.shortDesc}</p>

                <div className="projects__card-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="projects__card-tag">
                      +{project.tags.length - 3}
                    </span>
                  )}
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
=======
"use client";

import { useState } from "react";
import Image from "next/image";
import "./ProjectsSection.css";

/* ─────────────────────────────────────────
   PROJECTS DATA (Removed: Dog Form, Panda Form, Yokos Kitchen, Portfolio CV, Stopwatch, Todo List, Far Away, Quiz App)
───────────────────────────────────────── */
const projectsData = [
  {
    id: "01",
    title: "Blog Website",
    category: "Firebase",
    shortDesc:
      "Create, edit, and update blogs with Firebase-powered admin panel.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/blogproj.png",
    link: "https://bejewelled-jelly-b75e56.netlify.app/",
    color: "#ff6b35",
    icon: "🔥",
  },
  {
    id: "02",
    title: "Project Management",
    category: "Firebase",
    shortDesc: "Real-time project tracking with Firebase admin panel.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/projimg.png",
    link: "https://project-managment088.netlify.app/",
    color: "#ff6b35",
    icon: "🔥",
  },
  {
    id: "03",
    title: "LinkedIn Clone",
    category: "Landing Page",
    shortDesc: "Responsive LinkedIn clone with Home, Network & Profile pages.",
    tags: ["HTML", "CSS"],
    image: "/linkedin.png",
    link: "https://husban088.github.io/linkedin/",
    color: "#0077b5",
    icon: "💼",
  },
  {
    id: "04",
    title: "Facebook Clone",
    category: "Landing Page",
    shortDesc: "Responsive Facebook clone with Home, Shop & Group pages.",
    tags: ["HTML", "CSS"],
    image: "/fb.png",
    link: "https://husban088.github.io/facebook/",
    color: "#1877f2",
    icon: "📘",
  },
  {
    id: "05",
    title: "Kitab",
    category: "Landing Page",
    shortDesc: "Book website with 13 animated sections, built with Sass.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/kitab.png",
    link: "https://husban088.github.io/kitab/",
    color: "#9b59b6",
    icon: "📖",
  },
  {
    id: "06",
    title: "Natours",
    category: "Landing Page",
    shortDesc: "Nature travel website with 6 immersive animated sections.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/natours.png",
    link: "https://husban088.github.io/natours/",
    color: "#27ae60",
    icon: "🌿",
  },
  {
    id: "07",
    title: "Nexter",
    category: "Landing Page",
    shortDesc:
      "Real estate website with CSS Grid layout and 5 elegant sections.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/nexter.png",
    link: "https://husban088.github.io/nexter/",
    color: "#c0392b",
    icon: "🏡",
  },
  {
    id: "08",
    title: "Trillo",
    category: "Landing Page",
    shortDesc: "Travel booking UI with Flexbox layout and smooth animations.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/trillo.png",
    link: "https://husban088.github.io/trillo/",
    color: "#e67e22",
    icon: "✈️",
  },
  {
    id: "09",
    title: "Tindog",
    category: "Landing Page",
    shortDesc: "Dog dating app landing page with 5 sections using Bootstrap.",
    tags: ["HTML", "Bootstrap"],
    image: "/tindog.png",
    link: "https://husban088.github.io/bootrstrap4/",
    color: "#e74c3c",
    icon: "🐶",
  },
  {
    id: "10",
    title: "OLX Clone",
    category: "Frontend",
    shortDesc: "OLX clone with 5 dynamic React pages and full responsiveness.",
    tags: ["React", "Tailwind CSS"],
    image: "/olx.png",
    link: "https://olx-clone-088.netlify.app/",
    color: "#3d5a80",
    icon: "🛒",
  },
  {
    id: "11",
    title: "Power Store",
    category: "Landing Page",
    shortDesc:
      "7-page responsive shopping website with modern HTML/CSS design.",
    tags: ["HTML", "CSS"],
    image: "/power.png",
    link: "https://husban088.github.io/leggers/",
    color: "#f39c12",
    icon: "⚡",
  },
  {
    id: "12",
    title: "Stallion Market",
    category: "Supabase",
    shortDesc: "Full-stack marketplace with Supabase backend and 11 pages.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    image: "/stallion.png",
    link: "https://stallion-brand.firebaseapp.com/",
    color: "#3ecf8e",
    icon: "🗄️",
  },
  {
    id: "13",
    title: "Panthify Store",
    category: "Frontend",
    shortDesc: "E-commerce store with REST API integration and 6 pages.",
    tags: ["React", "Tailwind CSS", "REST API"],
    image: "/panthify.png",
    link: "https://fake-shop-api088.netlify.app/",
    color: "#8e44ad",
    icon: "🛍️",
  },
  {
    id: "14",
    title: "Power Tech",
    category: "Landing Page",
    shortDesc: "Tech landing page with 6 animated sections built with Sass.",
    tags: ["HTML", "Sass"],
    image: "/ptech.png",
    link: "https://husban088.github.io/powertech/",
    color: "#2980b9",
    icon: "💻",
  },
  {
    id: "15",
    title: "Power Code",
    category: "Landing Page",
    shortDesc: "Bootstrap 5 coding bootcamp landing page with 10 sections.",
    tags: ["HTML", "Bootstrap"],
    image: "/pcode.png",
    link: "https://husban088.github.io/bootstrap5/",
    color: "#7952b3",
    icon: "🔵",
  },
  {
    id: "16",
    title: "Riseministry Pakistan",
    category: "Landing Page",
    shortDesc:
      "11-page religious ministry website with Bootstrap responsive design.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/rempak.png",
    link: "https://husban088.github.io/Riseministry-pakistan/",
    color: "#16a085",
    icon: "🕌",
  },
  {
    id: "17",
    title: "Fashionista",
    category: "Functionality",
    shortDesc: "Fashion store with JS animations, dynamic cart across 7 pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/fashionista.png",
    link: "https://husban088.github.io/ecomerce-store-by-js/",
    color: "#e91e8c",
    icon: "👗",
  },
  {
    id: "18",
    title: "Eleganza",
    category: "Landing Page",
    shortDesc: "Elegant lifestyle brand with 5 Bootstrap-powered pages.",
    tags: ["HTML", "Bootstrap"],
    image: "/eleganza.png",
    link: "https://husban088.github.io/IronGear/",
    color: "#d4ac0d",
    icon: "✨",
  },
  {
    id: "19",
    title: "Eat & Split",
    category: "Frontend",
    shortDesc: "React bill-splitting app — add friends and split costs easily.",
    tags: ["React", "Tailwind CSS"],
    image: "/eatsplt.png",
    link: "https://eat-andd-split.netlify.app/",
    color: "#e74c3c",
    icon: "🍴",
  },
  {
    id: "20",
    title: "Stallion Restaurant",
    category: "Supabase",
    shortDesc: "Full restaurant app with booking, cart & Supabase backend.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    image: "/stallionresturant.png",
    link: "https://stallion-resturant.web.app",
    color: "#3ecf8e",
    icon: "🗄️",
  },
  {
    id: "21",
    title: "Aussie Tech Security",
    category: "Supabase",
    shortDesc: "Australian cybersecurity firm website with Supabase backend.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/aussie.png",
    link: "https://aussieetechsecurity.com.au",
    color: "#3ecf8e",
    icon: "🔐",
  },
  {
    id: "22",
    title: "Tech4ru",
    category: "Supabase",
    shortDesc:
      "Australian tech solutions platform with Supabase real-time data.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/tech4ru.png",
    link: "https://www.tech4ru.com/",
    color: "#3ecf8e",
    icon: "🖥️",
  },
  {
    id: "23",
    title: "Muscle Era",
    category: "Supabase",
    shortDesc:
      "Professional gym & fitness website with Supabase backend, built for an Australian client.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/muscleera.png",
    link: "https://muscle-era.vercel.app/",
    color: "#3ecf8e",
    icon: "💪",
  },
  {
    id: "24",
    title: "Chat Web App",
    category: "Mobile App",
    shortDesc:
      "Real-time chat web application with instant messaging, built on Node.js and Supabase.",
    tags: ["Node.js", "Supabase", "Real-time"],
    image: "/chat.png",
    link: "",
    color: "#3ecf8e",
    icon: "💬",
  },
  {
    id: "25",
    title: "SMC Trading Notes App",
    category: "Mobile App",
    shortDesc:
      "React Native (Expo) crypto trading app with live charts and SMC notes, powered by Firebase.",
    tags: ["React Native", "Expo", "Firebase"],
    image: "/trading.png",
    link: "",
    color: "#ff6b35",
    icon: "📈",
  },
];

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
  "Mobile App",
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
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
        <span className="projects__label-text">Our Work</span>
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
          A showcase of our finest work — each project crafted with precision,
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="projects__card-real-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {project.link && (
                  <div className="projects__card-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-view"
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
                )}
              </div>

              {/* Content */}
              <div className="projects__card-content">
                <div className="projects__card-top">
                  <span
                    className="projects__card-category"
                    style={{ color: project.color }}
                  >
                    {project.icon} {project.category}
                  </span>
                  <span className="projects__card-id">{project.id}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>

                <p className="projects__card-desc">{project.shortDesc}</p>

                <div className="projects__card-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="projects__card-tag">
                      +{project.tags.length - 3}
                    </span>
                  )}
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
>>>>>>> 2b5b194247ff8122141cf5a0498b5a32a35ea0b9
