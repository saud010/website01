import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Lined Hospitable Jellyfish</title>
        <meta property="og:title" content="Lined Hospitable Jellyfish" />
        <link
          rel="canonical"
          href="https://lined-hospitable-jellyfish-pn7fk4.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <div className="hero-media-wrapper">
          <video
            src="https://videos.pexels.com/video-files/9161794/9161794-hd_1920_1080_24fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/9161794/pictures/preview-0.jpeg"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-top-bar">
            <div className="hero-lang-switch">
              <button data-lang="de" className="hero-lang-btn active">
                DE
              </button>
              <button data-lang="en" className="hero-lang-btn">
                EN
              </button>
            </div>
            <div className="home-thq-hero-contact-quick-elm hero-contact-quick"></div>
          </div>
          <div className="hero-content-block">
            <div className="hero-badge">
              <span className="hero-badge-text">59 € Festpreis</span>
            </div>
            <h1 className="hero-title home-hero-title">
              Locksmith Pinneberg &amp; Surroundings
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Professional door openings and security technology in the entire
              Kreis Pinneberg. Reliable, local, and transparent.
            </p>
            <div className="hero-actions">
              <a href="tel:015780914217">
                <div className="btn hero-cta-btn btn-primary btn-xl">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span>Call Now: 01578 0914217</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Expert assistance for your home security in Pinneberg.
            </p>
          </div>
          <div className="services-grid">
            <div className="services-card">
              <div className="services-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                    width="18"
                    height="11"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="services-card-title">Door Openings</h3>
              <p className="section-content">
                Professional opening of house and apartment doors.
                Non-destructive methods prioritized.
              </p>
              <a href="tel:015780914217">
                <div className="btn btn-outline btn-sm">
                  <span>Emergency Call</span>
                </div>
              </a>
            </div>
            <div className="services-card">
              <div className="services-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                </svg>
              </div>
              <h3 className="services-card-title">Lock Change</h3>
              <p className="section-content">
                Swift replacement of old or broken locks with high-quality
                security cylinders.
              </p>
              <a href="tel:015780914217">
                <div className="btn btn-outline btn-sm">
                  <span>Request Service</span>
                </div>
              </a>
            </div>
            <div className="services-card">
              <div className="services-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="services-card-title">Burglary Protection</h3>
              <p className="section-content">
                Comprehensive security checks and installation of modern
                protection systems.
              </p>
              <a href="tel:015780914217">
                <div className="btn btn-outline btn-sm">
                  <span>Free Consultation</span>
                </div>
              </a>
            </div>
            <div className="services-card">
              <div className="services-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="services-card-title">Lock Repair</h3>
              <p className="section-content">
                Restoring functionality to jammed or damaged door mechanisms
                efficiently.
              </p>
              <a href="tel:015780914217">
                <div className="btn btn-outline btn-sm">
                  <span>Get Help</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-featured">
            <div className="pricing-main-card">
              <div className="pricing-tag">
                <span>Fair &amp; Transparent</span>
              </div>
              <h2 className="section-title">59 € Fixed Price</h2>
              <p className="section-content">
                No hidden costs. No surprises. One price for any standard job
                within Kreis Pinneberg.
              </p>
              <ul className="pricing-list">
                <li className="pricing-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>Travel costs included</span>
                </li>
                <li className="pricing-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>Standard door opening</span>
                </li>
                <li className="pricing-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>Professional assessment</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-secondary">
            <div className="pricing-hours-card">
              <div className="pricing-icon-small">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="services-card-title">Opening Hours</h3>
              <p className="section-content">
                We are not a 24/7 service. Please check our availability below:
              </p>
              <div className="pricing-hours-grid">
                <span className="day">Mon - Fri:</span>
                <span className="time">08:00 - 18:00</span>
                <span className="day">Saturday:</span>
                <span className="time">09:00 - 14:00</span>
                <span className="day">Sunday:</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple steps to get you back inside.
            </p>
          </div>
          <div className="process-stepper">
            <div className="process-step">
              <div className="process-number">
                <span>01</span>
              </div>
              <h4 className="process-step-title">Call Us</h4>
              <p className="section-content">
                Dial 01578 0914217 and describe your situation.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">
                <span>02</span>
              </div>
              <h4 className="process-step-title">On-Site Visit</h4>
              <p className="section-content">
                We arrive quickly at your location in Kreis Pinneberg.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">
                <span>03</span>
              </div>
              <h4 className="process-step-title">Job Done</h4>
              <p className="section-content">
                Door opened or lock fixed for exactly 59 €.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">Why Trust PinLock?</h2>
            <p className="section-subtitle">
              Your local security partner in Pinneberg.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-item">
              <div className="about-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
              </div>
              <h4 className="services-card-title">Local Presence</h4>
              <p className="section-content">
                We only serve Kreis Pinneberg, ensuring fast response times.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="services-card-title">Licensed Pros</h4>
              <p className="section-content">
                Fully ID-verified and licensed locksmith professionals.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
              </div>
              <h4 className="services-card-title">Satisfaction</h4>
              <p className="section-content">
                100% satisfaction guarantee on all our locksmith services.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h4 className="services-card-title">Transparent</h4>
              <p className="section-content">
                Clear communication and upfront pricing for every client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Client Stories</h2>
            <p className="section-subtitle">
              What your neighbors in Pinneberg say.
            </p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Locked myself out on a Tuesday. PinLock was there within
                20 minutes. Paid exactly 59 Euro as promised. Great
                service!&quot;
              </p>
              <div className="testimonial-author">
                <strong>Thomas M.</strong>
                <span>Pinneberg Center</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="var(--color-accent)"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="var(--color-accent)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Had our locks changed after moving. Very professional and
                friendly. No hidden fees, just honest work.&quot;
              </p>
              <div className="testimonial-author">
                <strong>Sarah K.</strong>
                <span>Elmshorn</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-bar">
          <div className="contact-info-group">
            <div className="contact-item">
              <svg
                fill="none"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <a href="tel:015780914217">
                <div>
                  <span>01578 0914217</span>
                </div>
              </a>
            </div>
            <div className="contact-item">
              <svg
                fill="none"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <a href="mailto:issaxd1@gmail.com?subject=">
                <div>
                  <span>issaxd1@gmail.com</span>
                </div>
              </a>
            </div>
            <div className="contact-item">
              <svg
                fill="none"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle r="10" cx="12" cy="12"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <span>Mon-Fri 08:00-18:00</span>
            </div>
          </div>
          <div className="contact-cta-wrapper">
            <a href="tel:015780914217">
              <div className="btn btn-md btn-accent">
                <span>Call Now</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bottom-cta-section">
        <div className="bottom-cta-alert">
          <div className="bottom-cta-content">
            <div className="bottom-cta-icon">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <div className="bottom-cta-text">
              <h4 className="bottom-cta-heading">
                Locked out in Kreis Pinneberg?
              </h4>
              <p className="section-content">
                Fixed price of 59 € per job. No hidden costs.
              </p>
            </div>
          </div>
          <div className="bottom-cta-actions">
            <a href="tel:015780914217">
              <div className="btn btn-lg btn-primary">
                <span>Call Now</span>
              </div>
            </a>
            <button data-lang="de" className="btn btn-link hero-lang-btn">
              Switch to German
            </button>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="pinlock-logic">
(function(){
  const langButtons = document.querySelectorAll(".hero-lang-btn")
  const translations = {
    de: {
      heroTitle: "Schlüsseldienst Pinneberg & Umgebung",
      heroSubtitle: "Professionelle Türöffnungen und Sicherheitstechnik im gesamten Kreis Pinneberg. Zuverlässig, lokal und transparent.",
      callNow: "Jetzt anrufen: 01578 0914217",
      fixedPrice: "59 € Festpreis",
    },
    en: {
      heroTitle: "Locksmith Pinneberg & Surroundings",
      heroSubtitle: "Professional door openings and security technology in the entire Kreis Pinneberg. Reliable, local, and transparent.",
      callNow: "Call Now: 01578 0914217",
      fixedPrice: "59 € Fixed Price",
    },
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang")

      langButtons.forEach((b) => b.classList.remove("active"))
      document.querySelectorAll(\`.hero-lang-btn[data-lang="\${lang}"]\`).forEach((b) => b.classList.add("active"))

      const title = document.querySelector(".hero-title")
      const subtitle = document.querySelector(".hero-subtitle")
      const ctaText = document.querySelector(".hero-cta-btn span")
      const badge = document.querySelector(".hero-badge-text")

      if (lang === "de") {
        title.textContent = translations.de.heroTitle
        subtitle.textContent = translations.de.heroSubtitle
        ctaText.textContent = translations.de.callNow
        badge.textContent = translations.de.fixedPrice
      } else {
        title.textContent = translations.en.heroTitle
        subtitle.textContent = translations.en.heroSubtitle
        ctaText.textContent = translations.en.callNow
        badge.textContent = translations.en.fixedPrice
      }
    })
  })

  const slider = document.querySelector(".testimonials-slider")
  let isDown = false
  let startX
  let scrollLeft

  slider.addEventListener("mousedown", (e) => {
    isDown = true
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })

  slider.addEventListener("mouseleave", () => {
    isDown = false
  })

  slider.addEventListener("mouseup", () => {
    isDown = false
  })

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 2
    slider.scrollLeft = scrollLeft - walk
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon76"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text31">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
