"use client";

import { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNode,
  FaFire,
  FaCode,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiSass,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiExpress,
  SiJavascript,
  SiVercel,
  SiMongodb,
  SiExpo,
  SiCloudinary,
  SiAngular,
  SiVuedotjs,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const techStack = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Firebase", icon: FaFire, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#8B6CEF" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const services = [
  {
    id: "fullstack",
    icon: FaCode,
    color: "#00d4ff",
    title: "Full Stack Development",
    desc: "Modern, high-performance web applications — pixel-perfect frontends to scalable backend systems.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "React",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
      "Next.js",
      "Node.js",
      "Express.js",
      "Firebase",
      "Supabase",
      "MongoDB",
      "Cloudinary",
      "GitHub",
      "Vercel",
    ],
  },
  {
    id: "mobile",
    icon: FaMobileAlt,
    color: "#61DAFB",
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps built with React Native & Expo — powered by the same solid backends.",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Firebase",
      "Supabase",
      "MongoDB",
      "Cloudinary",
    ],
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsLoaded(true);

    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % techStack.length);
        setTimeout(() => setIsAnimating(false), 150);
      }, 300);
    }, 2800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const currentTech = techStack[currentIndex];
  const IconComponent = currentTech.icon;
  const nextIndex = (currentIndex + 1) % techStack.length;
  const nextTech = techStack[nextIndex];
  const NextIconComponent = nextTech.icon;

  return (
    <section
      className={`hero ${isLoaded ? "hero--loaded" : ""}`}
      ref={heroRef}
      style={
        {
          "--mouse-x": mousePosition.x,
          "--mouse-y": mousePosition.y,
        } as React.CSSProperties
      }
    >
      {/* Background Layer */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__glow hero__glow--3" />
        <div className="hero__gradient-overlay" />
        <div className="hero__scan-line" />
        <div className="hero__particles">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="hero__particle"
              style={{
                left: `${(i * 37 + 5) % 95}%`,
                top: `${(i * 53 + 10) % 90}%`,
                animationDelay: `${(i * 0.4) % 6}s`,
                animationDuration: `${4 + (i % 4)}s`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT WRAPPER ── */}
      <div className="hero__content">
        {/* ── LEFT SIDE ── */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-line" />
            <span className="hero__badge-text">
              ✦ AVAILABLE FOR EXCLUSIVE PROJECTS ✦
            </span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-line hero__heading-line--1">
              <span className="hero__heading-word">I Craft</span>
            </span>
            <span className="hero__heading-line hero__heading-line--2">
              <span className="hero__heading-word">Digital</span>
              <span className="hero__heading-word hero__heading-word--gradient">
                {" "}
                Excellence
              </span>
            </span>
            <span className="hero__heading-line hero__heading-line--3">
              <span className="hero__heading-word">for the Web</span>
            </span>
          </h1>

          <div className="hero__name-wrap">
            <span className="hero__name-label">Pantrix</span>
            <span className="hero__name-decoration">——</span>
            <span className="hero__name">Creative Tech Studio</span>
          </div>

          <p className="hero__desc">
            I build modern, high-performance web applications — from
            pixel-perfect frontends to scalable, secure backend systems. Full
            stack development, done right.
          </p>

          {/* ── SERVICES SECTION ── */}
          <div className="hero__services">
            <div className="hero__services-label">
              <span className="hero__services-label-line" />
              <span className="hero__services-label-text">OUR EXPERTISE</span>
              <span className="hero__services-label-line" />
            </div>

            <div className="hero__services-grid">
              {services.map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`hero__service-card ${activeService === idx ? "hero__service-card--active" : ""}`}
                    style={
                      {
                        "--service-color": service.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={() => setActiveService(idx)}
                  >
                    <div className="hero__service-icon-wrap">
                      <ServiceIcon
                        className="hero__service-icon"
                        style={{ color: service.color }}
                      />
                      <div
                        className="hero__service-icon-glow"
                        style={{
                          background: `radial-gradient(circle, ${service.color}40, transparent 70%)`,
                        }}
                      />
                    </div>
                    <div className="hero__service-body">
                      <h3 className="hero__service-title">{service.title}</h3>
                      <p className="hero__service-desc">{service.desc}</p>
                      <div className="hero__service-tags">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="hero__service-tag"
                            style={{
                              borderColor: `${service.color}40`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="hero__service-card-glow"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}08, transparent)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero__ctas">
            <a href="/projects" className="hero__btn hero__btn--primary">
              <span className="hero__btn-text">View Our Work</span>
              <span className="hero__btn-shine" />
              <span className="hero__btn-glow" />
            </a>
            <a href="/contact" className="hero__btn hero__btn--secondary">
              <span className="hero__btn-text">Let's Talk</span>
              <span className="hero__btn-arrow">→</span>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">20+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">5+</span>
              <span className="hero__stat-label">Years in Industry</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">20+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="hero__luxury-indicator">
            <div className="hero__luxury-diamond" />
            <span className="hero__luxury-text">BESPOKE SOLUTIONS</span>
            <div className="hero__luxury-diamond" />
          </div>
        </div>

        {/* ── RIGHT SIDE - TECH SHOWCASE ── */}
        <div className="hero__right">
          <div className="hero__orbit-label">
            <span className="hero__orbit-label-icon">⚡</span>
            <span className="hero__orbit-label-text">TECH STACK</span>
            <span className="hero__orbit-label-line" />
          </div>

          <div className="hero__sequential-container">
            <div
              className="hero__sequential-ambient-glow"
              style={{
                background: `radial-gradient(circle at center, ${currentTech.color}20, transparent 70%)`,
              }}
            />

            <div
              className={`hero__sequential-icon-wrapper ${isAnimating ? "hero__sequential-icon-wrapper--exit" : "hero__sequential-icon-wrapper--enter"}`}
            >
              <div className="hero__sequential-icon-circle">
                <div
                  className="hero__sequential-icon-color-glow"
                  style={{
                    background: `radial-gradient(circle, ${currentTech.color}60, transparent)`,
                  }}
                />
                <IconComponent
                  className="hero__sequential-icon"
                  style={{ color: currentTech.color }}
                />
                <div
                  className="hero__sequential-icon-pulse-ring"
                  style={{ borderColor: currentTech.color }}
                />
                <div className="hero__sequential-sparkles">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="hero__sequential-sparkle"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        backgroundColor: currentTech.color,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hero__sequential-tech-name">
              <h3
                className="hero__sequential-tech-name-text"
                style={{ color: currentTech.color }}
              >
                {currentTech.name}
              </h3>
              <div
                className="hero__sequential-tech-underline"
                style={{ background: currentTech.color }}
              />
            </div>

            <div className="hero__sequential-progress">
              <div
                className="hero__sequential-progress-bar"
                key={currentIndex}
                style={{
                  backgroundColor: currentTech.color,
                  boxShadow: `0 0 12px ${currentTech.color}`,
                }}
              />
            </div>

            <div className="hero__sequential-next-preview">
              <span className="hero__sequential-next-label">Up Next</span>
              <div className="hero__sequential-next-icon-wrapper">
                <NextIconComponent
                  className="hero__sequential-next-icon"
                  style={{ color: nextTech.color }}
                />
              </div>
              <span
                className="hero__sequential-next-name"
                style={{ color: nextTech.color }}
              >
                {nextTech.name}
              </span>
              <span className="hero__sequential-next-arrow">→</span>
            </div>

            <div className="hero__sequential-steps">
              {techStack.map((tech, idx) => (
                <div
                  key={tech.name}
                  className={`hero__sequential-step ${idx === currentIndex ? "hero__sequential-step--active" : ""} ${idx < currentIndex ? "hero__sequential-step--completed" : ""}`}
                  style={{
                    backgroundColor: idx === currentIndex ? tech.color : "",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="hero__float-ring hero__float-ring--1" />
          <div className="hero__float-ring hero__float-ring--2" />
          <div className="hero__float-ring hero__float-ring--3" />
        </div>
      </div>
    </section>
  );
}
