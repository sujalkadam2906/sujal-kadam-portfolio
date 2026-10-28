import React, { useState, useEffect } from 'react';
import './SignalIntro.css';

export default function SignalIntro({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if reduced motion is requested or already shown in this session
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyShown = sessionStorage.getItem('signal_intro_shown');

    if (prefersReducedMotion || alreadyShown) {
      onComplete?.();
      return;
    }

    setVisible(true);

    // Auto-resolve after 1.15 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 950);

    const endTimer = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('signal_intro_shown', 'true');
      } catch {}
      onComplete?.();
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('signal_intro_shown', 'true');
      } catch {}
      onComplete?.();
    }, 150);
  };

  if (!visible) return null;

  return (
    <div
      className={`signal-intro-overlay ${fading ? 'intro-fade-out' : ''}`}
      onClick={handleSkip}
      role="region"
      aria-label="Introductory signal trace sequence"
    >
      <div className="intro-center-box">
        <div className="intro-telemetry">
          <span className="intro-trace-tag">SIGNAL_INIT // TELEMETRY_ACTIVE</span>
          <span className="intro-status">CALIBRATING 2026</span>
        </div>

        <div className="intro-svg-wrapper">
          <svg
            viewBox="0 0 500 80"
            className="intro-waveform-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid line */}
            <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            {/* Animated Signal Red Trace */}
            <path
              d="M0,40 L160,40 L180,24 L195,58 L210,12 L225,68 L240,40 L340,40 L355,30 L370,50 L385,40 L500,40"
              stroke="#D92622"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="intro-trace-path"
            />
          </svg>
        </div>

        <div className="intro-footer-row">
          <span className="intro-monogram">SUJAL KADAM // SOFTWARE ENGINEER</span>
          <button type="button" className="intro-skip-btn" onClick={handleSkip}>
            Skip [Esc / Click]
          </button>
        </div>
      </div>
    </div>
  );
}
