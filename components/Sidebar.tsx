"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  activeLink: string;
}

export default function Sidebar({
  isOpen,
  onClose,
  navLinks,
  activeLink,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Recalculate active from pathname (same logic as Navbar)
  const getActiveLabel = (path: string): string => {
    if (path === "/") return "Home";
    const matched = navLinks.find(
      (link) => link.href !== "/" && path.startsWith(link.href),
    );
    return matched ? matched.label : "";
  };

  const currentActive = getActiveLabel(pathname) || activeLink;

  // ✅ FIX: window.location.href — always navigates reliably
  // even after staying on a page for a long time (stale Link click issue fix)
  const navigateTo = (href: string) => {
    onClose();
    window.location.href = href;
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen, onClose]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close sidebar on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "sidebar-overlay--visible" : ""}`}
        aria-hidden="true"
      />

      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "sidebar--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="sidebar__orb sidebar__orb--1" />
        <div className="sidebar__orb sidebar__orb--2" />

        {/* Header */}
        <div className="sidebar__header">
          <a
            href="/"
            className="sidebar__logo"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
          >
            <div className="sidebar__logo-img-wrapper">
              <Image
                src="/navlogoo.png"
                alt="Pantrix"
                width={120}
                height={120}
                className="sidebar__logo-img"
                priority
              />
            </div>
          </a>

          <button
            className="sidebar__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="sidebar__close-line sidebar__close-line--1" />
            <span className="sidebar__close-line sidebar__close-line--2" />
          </button>
        </div>

        {/* Divider */}
        <div className="sidebar__divider">
          <span className="sidebar__divider-line" />
          <span className="sidebar__divider-diamond" />
          <span className="sidebar__divider-line" />
        </div>

        {/* Nav Links */}
        <nav className="sidebar__nav">
          <ul className="sidebar__links">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className="sidebar__item"
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
              >
                <a
                  href={link.href}
                  className={`sidebar__link ${
                    currentActive === link.label ? "sidebar__link--active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                >
                  <span className="sidebar__link-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sidebar__link-text">{link.label}</span>
                  <span className="sidebar__link-arrow">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="sidebar__link-bg" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="sidebar__footer">
          <a
            href="/contact"
            className="sidebar__cta"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
          >
            <span className="sidebar__cta-text">Start a Project</span>
            <span className="sidebar__cta-icon">→</span>
          </a>
          <p className="sidebar__tagline">
            Crafting digital excellence, one pixel at a time.
          </p>
        </div>
      </aside>
    </>
  );
}
