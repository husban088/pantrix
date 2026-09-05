"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./team.css";

const teamMembers = [
  {
    id: 1,
    name: "Husban Ahmad",
    role: "Chief Executive Officer",
    tag: "CEO & Founder",
    tagline: "Visionary behind Pantrix",
    bio: "Husban Ahmad is the driving force behind Pantrix — a visionary leader who turned a bold idea into a thriving digital powerhouse. With a sharp eye for innovation and an unwavering commitment to excellence, he leads the company's strategic direction, client relationships, and overall growth. His philosophy is simple: build things that matter, built to last.",
    skills: ["Leadership", "Strategy", "Business Development", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "husban@pantrix.com",
    },
    image: "/husban.jpeg",
    gradient: "member-gradient--gold",
    initials: "HA",
    accentClass: "accent--gold",
  },
  {
    id: 2,
    name: "Waqas Sarwar",
    role: "Head of Technology",
    tag: "Tech Lead",
    tagline: "The architect of digital excellence",
    bio: "Waqas Sarwar is the technical backbone of Pantrix — the mind that transforms complex visions into flawless digital realities. As Head of Technology, he leads the engineering culture, sets development standards, and ensures every product shipped reflects the highest standards of quality, performance, and craft. Where there's a problem, Waqas has already engineered the solution.",
    skills: [
      "Full-Stack Dev",
      "System Architecture",
      "UI/UX Engineering",
      "Performance",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "waqas@pantrix.com",
    },
    image: "/waqas.jpg",
    gradient: "member-gradient--silver",
    initials: "WS",
    accentClass: "accent--silver",
  },
];

export default function TeamPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        card.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
        card.style.setProperty(
          "--shine-x",
          `${((e.clientX - rect.left) / rect.width) * 100}%`,
        );
        card.style.setProperty(
          "--shine-y",
          `${((e.clientY - rect.top) / rect.height) * 100}%`,
        );
      };

      const handleLeave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <main className="team-page">
      {/* ── Ambient background — matches About page ── */}
      <div className="team-bg" aria-hidden="true">
        <div className="team-bg__grid" />
        <div className="team-bg__orb team-bg__orb--1" />
        <div className="team-bg__orb team-bg__orb--2" />
        <div className="team-bg__orb team-bg__orb--3" />
        {/* Deco horizontal lines — same as About */}
        <div className="team-bg__deco-line team-bg__deco-line--h1" />
        <div className="team-bg__deco-line team-bg__deco-line--h2" />
      </div>

      {/* ── Hero ── */}
      <section className="team-hero">
        <div className="team-hero__inner">
          <div className="team-hero__badge">
            <span className="team-hero__badge-dot" />
            The People Behind Pantrix
          </div>
          <h1 className="team-hero__heading">
            Meet the <span className="team-hero__heading-accent">Minds</span>
            <br />
            Shaping the Future
          </h1>
          <p className="team-hero__sub">
            Two individuals. One shared obsession — crafting digital products
            that are not just functional, but extraordinary. This is the team
            that dreams big and delivers bigger.
          </p>
          <div className="team-hero__line">
            <span className="team-hero__line-bar" />
            <span className="team-hero__line-diamond" />
            <span className="team-hero__line-bar" />
          </div>
        </div>
      </section>

      {/* ── Team Cards ── */}
      <section className="team-cards">
        <div className="team-cards__grid">
          {teamMembers.map((member, i) => (
            <div
              key={member.id}
              className={`team-card ${activeCard === member.id ? "team-card--active" : ""}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onMouseEnter={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {/* Tilt shine */}
              <div className="team-card__shine" aria-hidden="true" />

              {/* ── IMAGE SECTION ── */}
              <div className={`team-card__img-wrap ${member.accentClass}`}>
                <div className="team-card__img-frame" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 720px) 100vw, 450px"
                  className="team-card__img"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority={i === 0}
                />
                <div className="team-card__img-fade" />
                <div
                  className={`team-card__tag team-card__tag--float ${member.accentClass}`}
                >
                  {member.tag}
                </div>
                <div className="team-card__img-pulse" />
              </div>

              {/* ── BODY ── */}
              <div className="team-card__body">
                <div
                  className={`team-card__accent-bar ${member.accentClass}`}
                />
                <h2 className="team-card__name">{member.name}</h2>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__tagline">{member.tagline}</p>

                <div className="team-card__divider">
                  <span />
                  <span className="team-card__divider-dot" />
                  <span />
                </div>

                <p className="team-card__bio">{member.bio}</p>

                <div className="team-card__skills">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`team-card__skill ${member.accentClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="team-card__socials">
                  <a
                    href={member.social.linkedin}
                    className="team-card__social-btn"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="team-card__social-btn"
                    aria-label="Twitter / X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.861L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="team-card__social-btn"
                    aria-label="Email"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7L13.03 12.7a2 2 0 01-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Corner decorations */}
              <div
                className="team-card__corner team-card__corner--tl"
                aria-hidden="true"
              />
              <div
                className="team-card__corner team-card__corner--br"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="team-stats">
        <div className="team-stats__inner">
          {[
            { num: "2", label: "Core Members" },
            { num: "50+", label: "Projects Delivered" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "∞", label: "Passion for Craft" },
          ].map((stat) => (
            <div key={stat.label} className="team-stat">
              <span className="team-stat__num">{stat.num}</span>
              <span className="team-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="team-cta">
        <div className="team-cta__inner">
          <p className="team-cta__eyebrow">
            Ready to build something legendary?
          </p>
          <h2 className="team-cta__heading">Let's Create Together</h2>
          <a href="/contact" className="team-cta__btn">
            <span>Start a Project</span>
            <span className="team-cta__btn-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
