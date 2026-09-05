import type { Metadata } from "next";
import ClientReviewsSection from "@/app/sections/ClientReviewsSection";
import "./reviews.css";

export const metadata: Metadata = {
  title: "Client Reviews | Pantrix",
  description:
    "See what clients from around the world say about working with Pantrix. Real reviews, real results.",
};

export default function ReviewsPage() {
  return (
    <main className="reviews-page">
      {/* ── Hero Banner ── */}
      <section className="reviews-page__hero">
        <div className="reviews-page__hero-bg">
          <div className="reviews-page__hero-grid" />
          <div className="reviews-page__hero-glow reviews-page__hero-glow--1" />
          <div className="reviews-page__hero-glow reviews-page__hero-glow--2" />
        </div>

        <div className="reviews-page__hero-content">
          <div className="reviews-page__breadcrumb">
            <span className="reviews-page__breadcrumb-line" />
            <span className="reviews-page__breadcrumb-text">
              Home &nbsp;/&nbsp; Reviews
            </span>
            <span className="reviews-page__breadcrumb-line" />
          </div>

          <h1 className="reviews-page__hero-heading">
            <span className="reviews-page__hero-line">What Our</span>
            <span className="reviews-page__hero-line reviews-page__hero-line--gradient">
              Clients Say
            </span>
          </h1>

          <p className="reviews-page__hero-sub">
            Real words from real clients across 3+ countries who trusted Pantrix
            with their web development projects.
          </p>

          {/* Scroll indicator */}
          <div className="reviews-page__scroll-hint" aria-hidden="true">
            <span className="reviews-page__scroll-dot" />
          </div>
        </div>
      </section>

      {/* ── Reviews Section (reused component) ── */}
      <ClientReviewsSection />

      {/* ── CTA Strip ── */}
      <section className="reviews-page__cta">
        <div className="reviews-page__cta-bg" aria-hidden="true" />
        <div className="reviews-page__cta-inner">
          <p className="reviews-page__cta-label">Ready to work together?</p>
          <h2 className="reviews-page__cta-heading">
            Let's build something{" "}
            <span className="reviews-page__cta-gradient">extraordinary</span>
          </h2>
          <p className="reviews-page__cta-sub">
            Join 50+ happy clients who've experienced the Pantrix difference.
          </p>
          <a href="/contact" className="reviews-page__cta-btn">
            <span className="reviews-page__cta-btn-text">
              Start Your Project
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="reviews-page__cta-btn-shine" />
          </a>
        </div>
      </section>
    </main>
  );
}
