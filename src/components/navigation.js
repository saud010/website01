import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="index.html">
            <div className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
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
                  </g>
                </svg>
              </div>
              <span className="navigation-brand">PinLock Pinneberg</span>
            </div>
          </a>
         
             
            <div className="navigation-actions">
              <div className="navigation-lang-switcher">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                  </g>
                </svg>
                <span className="navigation-lang-label">EN</span>
              </div>
              <a href="tel:015780914217">
                <div className="btn btn-primary navigation-cta">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Call Now</span>
                </div>
              </a>
            </div>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-icon-open"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="index.html">
            <div className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
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
                  </g>
                </svg>
              </div>
              <span className="navigation-brand">PinLock</span>
            </div>
          </a>
          <button
            id="navClose"
            aria-label="Close menu"
            className="navigation-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-links">
            <a href="#services">
              <div className="navigation-mobile-link">
                <span>Our Services</span>
              </div>
            </a>
            <a href="#pricing">
              <div className="navigation-mobile-link">
                <span>Fixed Price: 59€</span>
              </div>
            </a>
            <a href="#security">
              <div className="navigation-mobile-link">
                <span>Burglary Protection</span>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-info">
            <div className="navigation-info-item">
              <span className="navigation-info-label">Service Area</span>
              <span className="navigation-info-value">
                Kreis Pinneberg Only
              </span>
            </div>
            <div className="navigation-info-item">
              <span className="navigation-info-label">Opening Hours</span>
              <span className="navigation-info-value">
                Mon - Sat: 08:00 - 20:00
              </span>
            </div>
          </div>
          <div className="navigation-mobile-footer">
            <div className="navigation-lang-switcher-mobile">
              <button className="navigation-lang-btn active">English</button>
              <button className="navigation-lang-btn">Deutsch</button>
            </div>
            <a href="tel:015780914217">
              <div className="navigation-mobile-cta btn btn-lg btn-primary">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Call 01578 0914217</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  const langButtons = document.querySelectorAll(".navigation-lang-btn")

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    document.body.style.overflow = "hidden"
    navToggle.setAttribute("aria-expanded", "true")
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    document.body.style.overflow = ""
    navToggle.setAttribute("aria-expanded", "false")
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && !mobileOverlay.classList.contains("is-active")) {
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      navWrapper.style.transform = "translateY(0)"
    }
    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
