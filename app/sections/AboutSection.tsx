import "./AboutSection.css";

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "3+", label: "Years Experience" },
  { num: "15+", label: "Happy Clients" },
  { num: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Frontend Dev",
    desc: "Pixel-perfect UIs with React, Next.js & Tailwind CSS",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
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
    desc: "Scalable servers with Firebase & Supabase integration",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
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
    title: "Performance",
    desc: "Optimized, fast & SEO-ready web applications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path
          d="M5 12H3l9-9 9 9h-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="9"
          y="14"
          width="6"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Responsive Design",
    desc: "Flawless on every screen — mobile, tablet, desktop",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Started the Journey",
    desc: "Fell in love with HTML & CSS. Built first static websites.",
  },
  {
    year: "2022",
    title: "JavaScript & React",
    desc: "Mastered JS fundamentals, React ecosystem & component design.",
  },
  {
    year: "2023",
    title: "Full Stack Growth",
    desc: "Expanded to Next.js, Firebase, Supabase & Tailwind CSS.",
  },
  {
    year: "2024+",
    title: "Pantrix — Born",
    desc: "Launched portfolio brand. Delivering luxury web experiences.",
  },
];

export default function AboutSection() {
  return (
    <section className="about" id="about">
      {/* Background */}
      <div className="about__bg">
        <div className="about__grid" />
        <div className="about__glow about__glow--1" />
        <div className="about__glow about__glow--2" />
        <div className="about__glow about__glow--3" />
        <div className="about__deco-line about__deco-line--h1" />
        <div className="about__deco-line about__deco-line--h2" />
        <div className="about__deco-line about__deco-line--v1" />
      </div>

      {/* TOP: Section label */}
      <div className="about__label-row">
        <span className="about__label-line" />
        <span className="about__label-text">About Me</span>
        <span className="about__label-line" />
      </div>

      {/* INTRO BLOCK */}
      <div className="about__intro">
        {/* Left — big heading */}
        <div className="about__intro-left">
          <div className="about__eyebrow">
            <span className="about__eyebrow-dot" />
            <span>Web Developer &amp; Designer</span>
          </div>
          <h2 className="about__heading">
            <span className="about__heading-line">Building</span>
            <span className="about__heading-line about__heading-line--gradient">
              Experiences
            </span>
            <span className="about__heading-line about__heading-line--thin">
              That Matter.
            </span>
          </h2>
          <div className="about__signature">
            <span className="about__signature-name">Pantrix</span>
            <span className="about__signature-dot">✦</span>
            <span className="about__signature-role">
              Web Development Studio
            </span>
          </div>
        </div>

        {/* Right — description + stats */}
        <div className="about__intro-right">
          <p className="about__desc about__desc--1">
            I&apos;m a passionate full-stack web developer operating under the
            brand <strong>Pantrix</strong> — crafting modern, high-performance
            web applications that merge aesthetic elegance with technical
            precision.
          </p>
          <p className="about__desc about__desc--2">
            From pixel-perfect frontends in React &amp; Next.js to robust
            backends powered by Firebase &amp; Supabase — I deliver end-to-end
            digital solutions that stand out.
          </p>

          {/* Stats Row */}
          <div className="about__stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="about__stat"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="about__services-wrap">
        <div className="about__section-head">
          <span className="about__section-num">01</span>
          <h3 className="about__section-title">What I Do</h3>
          <span className="about__section-bar" />
        </div>
        <div className="about__services">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="about__service-card"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="about__service-icon-wrap">
                <span className="about__service-icon">{svc.icon}</span>
                <span className="about__service-icon-glow" />
              </div>
              <h4 className="about__service-title">{svc.title}</h4>
              <p className="about__service-desc">{svc.desc}</p>
              <span className="about__service-num">0{i + 1}</span>
              <span className="about__service-hover-bar" />
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="about__timeline-wrap">
        <div className="about__section-head">
          <span className="about__section-num">02</span>
          <h3 className="about__section-title">My Journey</h3>
          <span className="about__section-bar" />
        </div>

        <div className="about__timeline">
          <div className="about__timeline-track" />
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`about__timeline-item ${
                i % 2 === 0
                  ? "about__timeline-item--left"
                  : "about__timeline-item--right"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="about__timeline-dot">
                <span className="about__timeline-dot-inner" />
              </div>
              <div className="about__timeline-card">
                <span className="about__timeline-year">{item.year}</span>
                <h4 className="about__timeline-title">{item.title}</h4>
                <p className="about__timeline-desc">{item.desc}</p>
                <span className="about__timeline-card-shine" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="about__cta-wrap">
        <p className="about__cta-text">
          Ready to build something extraordinary?
        </p>
        <div className="about__cta-btns">
          <a href="/contact" className="about__btn about__btn--primary">
            <span>Let&apos;s Work Together</span>
            <span className="about__btn-shine" />
          </a>
          <a href="/projects" className="about__btn about__btn--secondary">
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
