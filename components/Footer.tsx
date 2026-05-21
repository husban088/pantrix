"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./Footer.css";

/* ── Navigation links (same as Navbar) ── */
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "Digital Strategy", href: "/services" },
  { label: "Brand Identity", href: "/services" },
  { label: "SEO & Growth", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "GitHub", href: "https://github.com" },
];

/* ── Inline SVG components (Turbopack-safe) ── */
function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconBehance() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.97 13h4.908c-.079-1.816-1.303-2.57-2.513-2.57-1.394 0-2.227.758-2.395 2.57zM7 12.065c1.313 0 2.5-.5 2.5-2s-1-2-2.5-2H4v4h3zm-3 5.935H3V6h5c2.5 0 4.5 1.5 4.5 4s-1.875 3.5-3.875 3.75L12 18H9L6.5 14H4v4z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.1a16 16 0 006 6l.94-.94a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ── Social icon picker ── */
function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") return <IconInstagram />;
  if (label === "LinkedIn") return <IconLinkedIn />;
  if (label === "Twitter / X") return <IconX />;
  if (label === "Behance") return <IconBehance />;
  if (label === "GitHub") return <IconGitHub />;
  return null;
}

const navigateTo = (href: string) => {
  window.location.href = href;
};

/* ════════════════════════════════════════
   FOOTER COMPONENT
════════════════════════════════════════ */
export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [currentYear] = useState(new Date().getFullYear());
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <footer
      className="footer"
      ref={footerRef}
      style={
        {
          "--mouse-x": `${mousePos.x}%`,
          "--mouse-y": `${mousePos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* ── Background Layer ── */}
      <div className="footer__grid-bg" aria-hidden="true">
        <div className="footer__grid-lines" />
        <div className="footer__radial-glow" />
        <div className="footer__mouse-glow" />
      </div>

      {/* ── Top Ornament Border ── */}
      <div className="footer__top-border" aria-hidden="true">
        <span className="footer__top-border-line" />
        <span className="footer__top-border-diamond" />
        <span className="footer__top-border-line" />
      </div>

      {/* ── CTA Strip ── */}
      <div className="footer__cta-strip">
        <div className="footer__cta-inner">
          <div className="footer__cta-text-group">
            <p className="footer__cta-eyebrow">
              Ready to build something great?
            </p>
            <h2 className="footer__cta-heading">
              Let&apos;s craft your
              <span className="footer__cta-highlight"> digital future</span>
            </h2>
          </div>
          <a
            href="/contact"
            className="footer__cta-btn"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
          >
            <span className="footer__cta-btn-text">Start a Project</span>
            <span className="footer__cta-btn-arrow">
              <IconArrow />
            </span>
            <span className="footer__cta-btn-shine" />
          </a>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div className="footer__body">
        {/* Brand Column */}
        <div className="footer__col footer__col--brand">
          <a
            href="/"
            className="footer__logo"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
          >
            <div className="footer__logo-wrapper">
              <Image
                src="/navlogoo.png"
                alt="Pantrix Logo"
                width={130}
                height={130}
                className="footer__logo-img"
              />
              <span className="footer__logo-glow" />
            </div>
          </a>

          <p className="footer__tagline">
            Building the future,
            <br />
            one pixel at a time.
          </p>

          <div className="footer__contact-block">
            <a href="mailto:pantrix@gmail.com" className="footer__contact-item">
              <span className="footer__contact-icon">
                <IconEmail />
              </span>
              <span>pantrix@gmail.com</span>
            </a>
            <a href="tel:+923001234567" className="footer__contact-item">
              <span className="footer__contact-icon">
                <IconPhone />
              </span>
              <span>+92 300 123 4567</span>
            </a>
            <div className="footer__contact-item footer__contact-item--location">
              <span className="footer__contact-icon">
                <IconLocation />
              </span>
              <span>Pakistan</span>
            </div>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer__col footer__col--nav">
          <h3 className="footer__col-title">
            <span className="footer__col-title-line" />
            Navigation
          </h3>
          <ul className="footer__links-list">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                >
                  <span className="footer__link-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="footer__link-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer__col footer__col--services">
          <h3 className="footer__col-title">
            <span className="footer__col-title-line" />
            Services
          </h3>
          <ul className="footer__links-list">
            {services.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(s.href);
                  }}
                >
                  <span className="footer__link-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="footer__link-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Column */}
        <div className="footer__col footer__col--social">
          <h3 className="footer__col-title">
            <span className="footer__col-title-line" />
            Connect
          </h3>

          <div className="footer__social-grid">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-card"
                aria-label={s.label}
              >
                <span className="footer__social-icon">
                  <SocialIcon label={s.label} />
                </span>
                <span className="footer__social-label">{s.label}</span>
                <span className="footer__social-shine" />
              </a>
            ))}
          </div>

          <div className="footer__availability">
            <span className="footer__availability-dot" />
            <span className="footer__availability-text">
              Available for new projects
            </span>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="footer__marquee" aria-hidden="true">
        <div className="footer__marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="footer__marquee-item">
              PANTRIX <span className="footer__marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {currentYear}{" "}
            <span className="footer__copyright-brand">Pantrix</span>. All rights
            reserved.
          </p>
          <div className="footer__bottom-links">
            <a
              href="/privacy"
              className="footer__bottom-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/privacy");
              }}
            >
              Privacy Policy
            </a>
            <span className="footer__bottom-sep" aria-hidden="true">
              ·
            </span>
            <a
              href="/terms"
              className="footer__bottom-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/terms");
              }}
            >
              Terms of Service
            </a>
            <span className="footer__bottom-sep" aria-hidden="true">
              ·
            </span>
            <a
              href="/sitemap"
              className="footer__bottom-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/sitemap");
              }}
            >
              Sitemap
            </a>
          </div>
          <p className="footer__made-with">
            Crafted with{" "}
            <span className="footer__heart" aria-hidden="true">
              ♥
            </span>{" "}
            in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
