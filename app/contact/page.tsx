"use client";

import { useState, useRef, useEffect } from "react";
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

const PhoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.1a16 16 0 006 6l.94-.94a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

/* ── Types ── */
type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  /* Auto-dismiss the success toast */
  useEffect(() => {
    if (status === "success") {
      setShowToast(true);
      const t = setTimeout(() => setShowToast(false), 4500);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        // Clear form after success
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section className="contact-page" id="contact">
      {/* ── Toast Notification ── */}
      {showToast && (
        <div className="contact__toast" role="status" aria-live="polite">
          <span className="contact__toast-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 12.5L9.5 18L20 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="contact__toast-text">
            <strong>Message sent successfully</strong>
            <span>We'll get back to you within 24 hours.</span>
          </div>
          <button
            className="contact__toast-close"
            onClick={() => setShowToast(false)}
            aria-label="Dismiss"
          >
            ×
          </button>
          <span className="contact__toast-bar" aria-hidden="true" />
        </div>
      )}

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
              <span className="contact__heading-line contact__heading-line--gradient">
                Something Extraordinary
              </span>
            </h1>
            <div className="contact__signature">
              <span className="contact__signature-name">Pantrix</span>
              <span className="contact__signature-dot" aria-hidden="true">
                ✦
              </span>
              <span className="contact__signature-role">
                Creative Tech Studio
              </span>
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
                  href="mailto:husbanahmad099@gmail.com"
                  className="contact__info-value"
                >
                  husbanahmad099@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <PhoneIcon />
              </div>
              <div className="contact__info-content">
                <span className="contact__info-label">Phone</span>
                <a href="tel:+923360763840" className="contact__info-value">
                  +92 336 0763840
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LocationIcon />
              </div>
              <div className="contact__info-content">
                <span className="contact__info-label">Based In</span>
                <span className="contact__info-value">
                  Faisalabad, Pakistan
                </span>
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
            <span className="contact__social-label">Follow Us</span>
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

            {/* ── SUCCESS STATE ── */}
            {status === "success" ? (
              <div className="contact__success">
                <div className="contact__success-ring">
                  <div
                    className="contact__success-ring-pulse"
                    aria-hidden="true"
                  />
                  <div className="contact__success-icon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12.5L9.5 18L20 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <span className="contact__success-eyebrow">
                  ✦&nbsp; Delivered &nbsp;✦
                </span>
                <h3 className="contact__success-title">Message Sent</h3>
                <p className="contact__success-text">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  className="contact__submit contact__success-btn"
                  onClick={() => setStatus("idle")}
                >
                  <span className="contact__submit-text">Send Another</span>
                  <span className="contact__submit-shine" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact__form-title">Send a Message</h2>
                <p className="contact__form-sub">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <form
                  ref={formRef}
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Row: Name + Email */}
                  <div className="contact__form-row">
                    <div className="contact__input-group">
                      <input
                        type="text"
                        id="name"
                        className="contact__input"
                        placeholder=" "
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === "sending"}
                      />
                      <label htmlFor="name" className="contact__label">
                        Your Name
                      </label>
                      <span
                        className="contact__input-border"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="contact__input-group">
                      <input
                        type="email"
                        id="email"
                        className="contact__input"
                        placeholder=" "
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "sending"}
                      />
                      <label htmlFor="email" className="contact__label">
                        Email Address
                      </label>
                      <span
                        className="contact__input-border"
                        aria-hidden="true"
                      />
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
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={status === "sending"}
                    />
                    <label htmlFor="subject" className="contact__label">
                      Subject
                    </label>
                    <span
                      className="contact__input-border"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Message */}
                  <div className="contact__input-group">
                    <textarea
                      id="message"
                      className="contact__input contact__textarea"
                      rows={5}
                      placeholder=" "
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === "sending"}
                    />
                    <label htmlFor="message" className="contact__label">
                      Your Message
                    </label>
                    <span
                      className="contact__input-border"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && errorMsg && (
                    <div className="contact__error-msg" role="alert">
                      <span>⚠</span> {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`contact__submit ${status === "sending" ? "contact__submit--loading" : ""}`}
                    disabled={status === "sending"}
                  >
                    <span className="contact__submit-text">
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </span>
                    <span
                      className="contact__submit-shine"
                      aria-hidden="true"
                    />
                    {status !== "sending" && (
                      <span
                        className="contact__submit-arrow"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </span>
                    )}
                  </button>
                </form>
              </>
            )}

            <p className="contact__form-note" aria-label="Privacy note">
              ✦&nbsp; We'll reply within 24 hours &nbsp;|&nbsp; No spam, ever
              &nbsp;✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
