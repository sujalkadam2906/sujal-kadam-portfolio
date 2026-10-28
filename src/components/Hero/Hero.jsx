import React from 'react';
import { profile } from '../../data/profile';
import PhotoBezel from './PhotoBezel';
import HeroWaveform from './HeroWaveform';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, ArrowRight, Download } from '../ui/Icons';
import './Hero.css';

export default function Hero() {
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

            {/* Metrics Chips */}
            <div className="hero-stats">
              {profile.stats.map((stat, idx) => (
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
