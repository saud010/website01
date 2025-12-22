import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <div className="footer-logo-wrapper">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-brand-icon"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
                <span className="footer-brand-name">PinLock Pinneberg</span>
              </div>
              <p className="footer-description section-content">
                Your reliable locksmith in Kreis Pinneberg. Transparent fixed
                prices, professional service, and local expertise for your
                security.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title">Quick Links</h2>
              <nav className="footer-nav">
                <ul className="footer-link-list">
                  <li>
                    <a href="/">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Door Openings</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Lock Repair</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Burglary Protection</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Pricing &amp; Terms</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-contact-info footer-column">
              <h2 className="footer-column-title">Contact &amp; Service</h2>
              <div className="footer-info-group">
                <div className="footer-info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer-icon-accent"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                  <span className="section-content">
                    Service Area: Kreis Pinneberg Only
                  </span>
                </div>
                <div className="footer-info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer-icon-accent"
                  >
                    <path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <a href="tel:015780914217">
                    <div className="footer-tel footer-link">
                      <span>01578 0914217</span>
                    </div>
                  </a>
                </div>
                <div className="footer-info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer-icon-accent"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <a href="mailto:issaxd1@gmail.com?subject=">
                    <div className="footer-link">
                      <span>issaxd1@gmail.com</span>
                    </div>
                  </a>
                </div>
                <div className="footer-info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer-icon-accent"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                  <span className="section-content">
                    <span>
                      {' '}
                      Mon–Fri: 08:00 – 18:00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      Sat: 09:00 – 14:00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <p className="footer-copy section-content">
                &amp;copy; 2025 PinLock Pinneberg. All rights reserved.
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-link-sm">
                    <span>Imprint</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link-sm">
                    <span>Privacy Policy</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-pricing-badge">
              <span className="footer-badge-text">Fixed Price: 59 €</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link, .footer-link-sm")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })
  })

  const socialIcons = document.querySelectorAll(".footer-social-icon")
  socialIcons.forEach((icon) => {
    icon.addEventListener("touchstart", function () {
      this.style.backgroundColor = "var(--color-primary)"
      this.style.color = "var(--color-on-primary)"
    })
    icon.addEventListener("touchend", function () {
      setTimeout(() => {
        this.style.backgroundColor = "var(--color-surface-elevated)"
        this.style.color = "var(--color-on-surface)"
      }, 200)
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
