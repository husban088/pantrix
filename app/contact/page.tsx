"use client";

import "./Contact.css";

/* ── Particle data generated at module level (no Math.random in render) ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37.3 + 11) % 100}%`,
  top: `${(i * 23.7 + 5) % 100}%`,
  delay: `${(i * 0.31) % 8}s`,
  duration: `${5 + (i % 6)}s`,
}));

/* ── SVG Icons ── */
const EmailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M22 7L12 13.5L2 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 7v5l3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactPage() {
  return (
    <section className="contact-page" id="contact">
      {/* ── Animated Background ── */}
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__grid" />
        <div className="contact__noise" />
        <div className="contact__glow contact__glow--1" />
        <div className="contact__glow contact__glow--2" />
        <div className="contact__glow contact__glow--3" />
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="contact__particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="contact__container">
        {/* ════ LEFT SIDE — Branding ════ */}
        <div className="contact__left">
          {/* Label */}
          <div className="contact__label-row">
            <span className="contact__label-line" />
            <span className="contact__label-text">Get in Touch</span>
            <span className="contact__label-line" />
          </div>

          {/* Heading */}
          <div className="contact__brand">
            <h1 className="contact__heading">
              <span className="contact__heading-line">Let's Create</span>
              <span className="contact__heading-line contact__heading-line--gold">
                Something Extraordinary
              </span>
            </h1>
            <div className="contact__signature">
              <span className="contact__signature-name">Pantrix</span>
              <span className="contact__signature-dot" aria-hidden="true">
                ✦
              </span>
              <span className="contact__signature-role">Web Studio</span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="contact__info-cards">
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <EmailIcon />
              </div>
              <div className="contact__info-content">
                <span className="contact__info-label">Email</span>
                <a
                  href="mailto:pantrix@gmail.com"
                  className="contact__info-value"
                >
                  pantrix@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LocationIcon />
              </div>
              <div className="contact__info-content">
                <span className="contact__info-label">Based In</span>
                <span className="contact__info-value">Global / Remote</span>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <ClockIcon />
              </div>
              <div className="contact__info-content">
                <span className="contact__info-label">Response Time</span>
                <span className="contact__info-value">Within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact__social">
            <span className="contact__social-label">Follow</span>
            <div className="contact__social-icons">
              <a href="#" className="contact__social-link" aria-label="GitHub">
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="contact__social-link"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
              </a>
              <a href="#" className="contact__social-link" aria-label="Twitter">
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* ════ RIGHT SIDE — Form ════ */}
        <div className="contact__right">
          <div className="contact__form-card">
            {/* Decorative elements */}
            <div className="contact__form-glow" aria-hidden="true" />
            <div className="contact__form-corner" aria-hidden="true" />
            <div className="contact__form-corner-bl" aria-hidden="true" />
            <div className="contact__form-radial" aria-hidden="true" />

            <h2 className="contact__form-title">Send a Message</h2>
            <p className="contact__form-sub">
              Fill out the form and I'll get back to you within 24 hours.
            </p>

            <form className="contact__form" noValidate>
              {/* Row: Name + Email */}
              <div className="contact__form-row">
                <div className="contact__input-group">
                  {/* placeholder=" " makes :not(:placeholder-shown) work */}
                  <input
                    type="text"
                    id="name"
                    className="contact__input"
                    placeholder=" "
                    required
                    autoComplete="name"
                  />
                  <label htmlFor="name" className="contact__label">
                    Your Name
                  </label>
                  <span className="contact__input-border" aria-hidden="true" />
                </div>

                <div className="contact__input-group">
                  <input
                    type="email"
                    id="email"
                    className="contact__input"
                    placeholder=" "
                    required
                    autoComplete="email"
                  />
                  <label htmlFor="email" className="contact__label">
                    Email Address
                  </label>
                  <span className="contact__input-border" aria-hidden="true" />
                </div>
              </div>

              {/* Subject */}
              <div className="contact__input-group">
                <input
                  type="text"
                  id="subject"
                  className="contact__input"
                  placeholder=" "
                  required
                />
                <label htmlFor="subject" className="contact__label">
                  Subject
                </label>
                <span className="contact__input-border" aria-hidden="true" />
              </div>

              {/* Message */}
              <div className="contact__input-group">
                <textarea
                  id="message"
                  className="contact__input contact__textarea"
                  rows={5}
                  placeholder=" "
                  required
                />
                <label htmlFor="message" className="contact__label">
                  Your Message
                </label>
                <span className="contact__input-border" aria-hidden="true" />
              </div>

              {/* Submit */}
              <button type="submit" className="contact__submit">
                <span className="contact__submit-text">Send Message</span>
                <span className="contact__submit-shine" aria-hidden="true" />
                <span className="contact__submit-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </button>
            </form>

            <p className="contact__form-note" aria-label="Privacy note">
              ✦&nbsp; I'll reply within 24 hours &nbsp;|&nbsp; No spam, ever
              &nbsp;✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
