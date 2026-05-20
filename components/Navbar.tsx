"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Determine active link from current URL path
  const getActiveLabel = (path: string): string => {
    if (path === "/") return "Home";
    const matched = navLinks.find(
      (link) => link.href !== "/" && path.startsWith(link.href),
    );
    return matched ? matched.label : "";
  };

  const activeLink = getActiveLabel(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__bg-lines">
          <span />
          <span />
          <span />
        </div>

        <Link href="/" className="navbar__logo">
          <div className="navbar__logo-wrapper">
            <Image
              src="/navlogoo.png"
              alt="Pantrix Logo"
              width={155}
              height={155}
              className="navbar__logo-img"
              priority
            />
            <span className="navbar__logo-glow" />
          </div>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <Link
                href={link.href}
                className={`navbar__link ${
                  activeLink === link.label ? "navbar__link--active" : ""
                }`}
              >
                <span className="navbar__link-text">{link.label}</span>
                <span className="navbar__link-line" />
                <span className="navbar__link-dot" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Let's Talk button — active state on /contact */}
        <div className="navbar__cta-wrapper">
          <Link
            href="/contact"
            className={`navbar__cta ${
              activeLink === "Contact" ? "navbar__cta--active" : ""
            }`}
          >
            <span className="navbar__cta-text">Let&apos;s Talk</span>
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${
            sidebarOpen ? "navbar__hamburger--open" : ""
          }`}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="navbar__bar navbar__bar--top" />
          <span className="navbar__bar navbar__bar--mid" />
          <span className="navbar__bar navbar__bar--bot" />
        </button>
      </nav>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navLinks={navLinks}
        activeLink={activeLink}
      />
    </>
  );
}
