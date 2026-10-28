import React from 'react';
import { ArrowUp } from '../ui/Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buildDate = 'October 2026';

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-left">
            <span className="footer-monogram">SK // SIGNAL</span>
            <p className="footer-desc">
              Designed with the Signal design system. Built with React 18, Vite, self-hosted fonts, and strict WCAG AA contrast.
            </p>
          </div>

          <div className="footer-center">
            <span className="footer-meta-label">PORTFOLIO BUILD TELEMETRY</span>
            <span className="footer-meta-val">Last Updated: {buildDate}</span>
            <span className="footer-meta-val">Single Source: Sujal_Kadam_Resume.pdf</span>
          </div>

          <div className="footer-right">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© 2026 Sujal Sunil Kadam. All rights reserved.</span>
          <a href="/styleguide" className="footer-styleguide-link">
            Design Tokens & Styleguide →
          </a>
        </div>
      </div>
    </footer>
  );
}
