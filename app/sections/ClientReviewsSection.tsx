"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ClientReviewsSection.css";

// ── Service tag colors — matching Hero/WhyChooseUs/Services ──
const serviceColors: Record<string, string> = {
  "Full Stack Dev": "#00d4ff",
};

const reviewsData = [
  // ── Full Stack Development Reviews ──
  {
    id: "01",
    name: "Tariq",
    country: "Australia",
    flag: "🇦🇺",
    review:
      "The website looks neat and clean, the color scheme is used really well, and overall it turned out great. Pantrix delivered beyond our expectations!",
    rating: 5,
    role: "Aussie Tech Security",
    avatar: "T",
    service: "Full Stack Dev",
    color: "linear-gradient(135deg, #00d4ff, #0099cc)",
  },
  {
    id: "02",
    name: "Devin Mitchell",
    country: "USA",
    flag: "🇺🇸",
    review:
      "Absolutely blown away by the attention to detail. The development process was smooth, communication was excellent, and the final product is stunning. Pantrix is a true partner.",
    rating: 5,
    role: "Tech Startup CEO",
    avatar: "D",
    service: "Full Stack Dev",
    color: "linear-gradient(135deg, #0099cc, #007fa8)",
  },
  {
    id: "03",
    name: "James Anderson",
    country: "UK",
    flag: "🇬🇧",
    review:
      "One of the best development teams we've worked with. Took our rough ideas and turned them into a beautiful, functional website. Highly recommended!",
    rating: 5,
    role: "Creative Agency Owner",
    avatar: "J",
    service: "Full Stack Dev",
    color: "linear-gradient(135deg, #0099cc, #007fa8)",
  },
];

/* Luxury quote SVG icon */
const QuoteIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
  >
    <path
      d="M8 40 C8 48.837 15.163 56 24 56 L24 48 C19.582 48 16 44.418 16 40 L16 32 L8 32 L8 40Z"
      fill="currentColor"
    />
    <path
      d="M8 20 C8 15.582 11.582 12 16 12 L24 12 L24 8 C13.507 8 5 16.507 5 27 L5 32 L8 32 L8 20Z"
      fill="currentColor"
    />
    <path
      d="M40 40 C40 48.837 47.163 56 56 56 L56 48 C51.582 48 48 44.418 48 40 L48 32 L40 32 L40 40Z"
      fill="currentColor"
    />
    <path
      d="M40 20 C40 15.582 43.582 12 48 12 L56 12 L56 8 C45.507 8 37 16.507 37 27 L37 32 L40 32 L40 20Z"
      fill="currentColor"
    />
  </svg>
);

/* Star icon */
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="reviews__star"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill={filled ? "#FFD700" : "rgba(255, 215, 0, 0.15)"}
      stroke={filled ? "#FFD700" : "rgba(255, 215, 0, 0.25)"}
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ClientReviewsSection() {
  return (
    <section className="reviews" id="reviews">
      {/* ── Background ── */}
      <div className="reviews__bg">
        <div className="reviews__grid" />
        <div className="reviews__noise" aria-hidden="true" />
        <div className="reviews__glow reviews__glow--1" />
        <div className="reviews__glow reviews__glow--2" />
        <div className="reviews__glow reviews__glow--3" />
      </div>

      {/* ── Section Label ── */}
      <div className="reviews__label-row">
        <span className="reviews__label-line" />
        <span className="reviews__label-text">Client Testimonials</span>
        <span className="reviews__label-line" />
      </div>

      {/* ── Header ── */}
      <div className="reviews__header">
        <h2 className="reviews__heading">
          <span className="reviews__heading-line">What Our</span>
          <span className="reviews__heading-line reviews__heading-line--gradient">
            Clients Say
          </span>
        </h2>
        <p className="reviews__subtext">
          Don't just take our word for it — hear from clients across 3 countries
          who've experienced the Pantrix difference in web development.
        </p>
      </div>

      {/* ── Service Filter Badges ── */}
      <div className="reviews__service-badges">
        {Object.entries(serviceColors).map(([svc, color]) => (
          <span
            key={svc}
            className="reviews__svc-badge"
            style={
              {
                "--svc-color": color,
                borderColor: `${color}35`,
                color: color,
              } as React.CSSProperties
            }
          >
            <span
              className="reviews__svc-dot"
              style={{ background: color, boxShadow: `0 0 6px ${color}` }}
            />
            {svc}
          </span>
        ))}
      </div>

      {/* ── Swiper Slider ── */}
      <div className="reviews__slider-wrapper">
        <button
          className="reviews__nav-prev"
          aria-label="Previous review"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="reviews__nav-next"
          aria-label="Next review"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={28}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".reviews__nav-prev",
            nextEl: ".reviews__nav-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="reviews__swiper"
        >
          {reviewsData.map((review) => {
            const accentColor = serviceColors[review.service] ?? "#00d4ff";
            return (
              <SwiperSlide key={review.id}>
                <div
                  className="reviews__card"
                  style={
                    { "--card-accent": accentColor } as React.CSSProperties
                  }
                >
                  {/* Service tag — top right above quote icon */}
                  <div
                    className="reviews__service-tag"
                    style={{
                      background: `${accentColor}14`,
                      borderColor: `${accentColor}35`,
                      color: accentColor,
                    }}
                  >
                    <span
                      className="reviews__service-tag-dot"
                      style={{
                        background: accentColor,
                        boxShadow: `0 0 5px ${accentColor}`,
                      }}
                    />
                    {review.service}
                  </div>

                  {/* Number Badge */}
                  <div className="reviews__number-badge" aria-hidden="true">
                    <div className="reviews__badge-inner">
                      <span className="reviews__badge-num">{review.id}</span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="reviews__quote-icon" aria-hidden="true">
                    <QuoteIcon />
                  </div>

                  {/* Avatar + Client Info */}
                  <div className="reviews__header-info">
                    <div
                      className="reviews__avatar"
                      style={{ background: review.color }}
                      aria-label={review.name}
                    >
                      <span>{review.avatar}</span>
                    </div>
                    <div className="reviews__client-info">
                      <h4 className="reviews__client-name">{review.name}</h4>
                      <p className="reviews__client-meta">
                        <span
                          className="reviews__flag"
                          role="img"
                          aria-label={review.country}
                        >
                          {review.flag}
                        </span>
                        {review.country}
                      </p>
                      <p
                        className="reviews__client-role"
                        style={{ color: accentColor }}
                      >
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="reviews__divider"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accentColor}35, transparent)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Stars */}
                  <div
                    className="reviews__stars"
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < review.rating} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="reviews__text">"{review.review}"</p>

                  {/* Bottom Accent Bar */}
                  <div
                    className="reviews__card-border"
                    style={{ background: review.color }}
                    aria-hidden="true"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ── Stats Bar ── */}
      <div className="reviews__stats" role="list">
        <div className="reviews__stat" role="listitem">
          <span className="reviews__stat-num">50+</span>
          <span className="reviews__stat-label">Happy Clients</span>
        </div>
        <div className="reviews__stat-divider" aria-hidden="true" />
        <div className="reviews__stat" role="listitem">
          <span className="reviews__stat-num">100%</span>
          <span className="reviews__stat-label">Satisfaction</span>
        </div>
        <div className="reviews__stat-divider" aria-hidden="true" />
        <div className="reviews__stat" role="listitem">
          <span className="reviews__stat-num">5 ★</span>
          <span className="reviews__stat-label">Average Rating</span>
        </div>
        <div className="reviews__stat-divider" aria-hidden="true" />
        <div className="reviews__stat" role="listitem">
          <span className="reviews__stat-num">3+</span>
          <span className="reviews__stat-label">Countries</span>
        </div>
      </div>
    </section>
  );
}
