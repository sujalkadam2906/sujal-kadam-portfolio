import React from 'react';
import { profile } from '../../data/profile';
import PhotoBezel from './PhotoBezel';
import HeroWaveform from './HeroWaveform';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, ArrowRight, Download } from '../ui/Icons';
import './Hero.css';

export default function Hero() {
  const [counts, setCounts] = React.useState({ stat0: 0, stat1: 0, stat2: 0 });
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({ stat0: 95, stat1: 2, stat2: 1500 });
      setHasAnimated(true);
      return;
    }

    const duration = 1000;
    const start = performance.now();

    const frame = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        stat0: Math.round(ease * 95),
        stat1: Math.round(ease * 2),
        stat2: Math.round(ease * 1500),
      });

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setHasAnimated(true);
      }
    };

    const anim = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(anim);
  }, []);

  const displayStats = [
    { value: `${counts.stat0}%+`, label: 'SVM Accuracy', detail: 'Signal feature pipeline on bearing vibration data' },
    { value: `${counts.stat1}`, label: 'Research Papers', detail: 'EPJ Web of Conferences (Published) & Springer (Selected)' },
    { value: `${counts.stat2.toLocaleString()}+`, label: 'Students Coordinated', detail: 'Chief Placement Officer across 20+ campus drives' },
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="signal-trace-bullet" aria-hidden="true" />
              <span>SOFTWARE ENGINEER // B.TECH 2026</span>
            </div>

            <h1 className="hero-name">{profile.name}</h1>

            <p className="hero-headline">{profile.headline}</p>

            <p className="hero-summary">{profile.summary}</p>

            {/* Metrics Chips with Count-Up */}
            <div className="hero-stats">
              {displayStats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>


            {/* CTAs & Socials */}
            <div className="hero-actions">
              <Button as="a" href="#projects" variant="primary" magnetic icon={ArrowRight}>
                View projects
              </Button>

              <Button
                as="a"
                href="/Sujal_Kadam_Resume.pdf"
                download="Sujal_Kadam_Resume.pdf"
                variant="secondary"
                icon={Download}
              >
                Download resume
              </Button>

              <div className="hero-social-links" aria-label="Social and contact links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="social-icon-btn"
                  aria-label="Send email to Sujal Kadam"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Instrument Bezel Framed Photo */}
          <div className="hero-photo-column">
            <PhotoBezel />
          </div>
        </div>

        {/* Live Interactive Telemetry Waveform */}
        <HeroWaveform />
      </div>
    </section>
  );
}
