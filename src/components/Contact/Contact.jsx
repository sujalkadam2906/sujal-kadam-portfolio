import React, { useState } from 'react';
import { profile } from '../../data/profile';
import SectionHeader from '../ui/SectionHeader';
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink, MapPin } from '../ui/Icons';
import './Contact.css';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader
          number="07"
          title="Direct Contact & Channels"
          description="Available for entry-level software engineering, backend (Java/Spring Boot), and frontend (React/TypeScript) positions. Open to relocate."
        />

        <div className="contact-grid">
          {/* Email Target */}
          <div className="contact-target-card instrument-panel">
            <div className="target-icon-box">
              <Mail size={22} />
            </div>
            <div className="target-info">
              <span className="target-label">PRIMARY EMAIL</span>
              <a
                href={`mailto:${profile.email}?subject=Software%20Engineering%20Opportunity%20-%20Sujal%20Kadam`}
                className="target-value"
              >
                {profile.email}
              </a>
              <span className="target-hint">Click to launch mail client with prefilled subject</span>
            </div>
            <button
              type="button"
              className="copy-btn"
              onClick={() => copyToClipboard(profile.email, 'email')}
              aria-label="Copy email address"
            >
              {copiedKey === 'email' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone Target */}
          <div className="contact-target-card instrument-panel">
            <div className="target-icon-box">
              <Phone size={22} />
            </div>
            <div className="target-info">
              <span className="target-label">DIRECT PHONE / WHATSAPP</span>
              <a href={`tel:${profile.phone}`} className="target-value">
                {profile.phone}
              </a>
              <span className="target-hint">Available for recruiter calls and interviews</span>
            </div>
            <button
              type="button"
              className="copy-btn"
              onClick={() => copyToClipboard(profile.phone, 'phone')}
              aria-label="Copy phone number"
            >
              {copiedKey === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* LinkedIn Target */}
          <div className="contact-target-card instrument-panel">
            <div className="target-icon-box">
              <Linkedin size={22} />
            </div>
            <div className="target-info">
              <span className="target-label">LINKEDIN PROFILE</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="target-value"
              >
                linkedin.com/in/sujal-sunil-kadam
              </a>
              <span className="target-hint">Verified professional network profile</span>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="external-open-btn"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <ExternalLink size={16} />
              <span>Visit</span>
            </a>
          </div>

          {/* GitHub Target */}
          <div className="contact-target-card instrument-panel">
            <div className="target-icon-box">
              <Github size={22} />
            </div>
            <div className="target-info">
              <span className="target-label">GITHUB REPOSITORIES</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="target-value"
              >
                github.com/sujalkadam2906
              </a>
              <span className="target-hint">Public repositories, commits, and project code</span>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="external-open-btn"
              aria-label="Visit GitHub repositories (opens in new tab)"
            >
              <ExternalLink size={16} />
              <span>Visit</span>
            </a>
          </div>
        </div>

        {/* Location & Relocation Notice */}
        <div className="relocation-banner instrument-panel">
          <div className="relocation-left">
            <MapPin size={20} className="pin-icon" />
            <div>
              <strong>Based in Kolhapur, Maharashtra, India.</strong>
              <p className="relocation-sub">Immediately available for on-site relocation or remote software engineering roles.</p>
            </div>
          </div>
          <div className="relocation-status">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Open to Relocate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
