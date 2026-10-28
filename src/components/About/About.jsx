import React from 'react';
import { profile } from '../../data/profile';
import { education } from '../../data/education';
import SectionHeader from '../ui/SectionHeader';
import { MapPin } from '../ui/Icons';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          number="05"
          title="Background & Education"
          description="How my engineering foundation translates into software systems: analytical problem decomposition, modular architectures, and campus leadership."
        />

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            {profile.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="about-paragraph">
                {para}
              </p>
            ))}

            <div className="about-meta-chips">
              <div className="about-meta-chip">
                <MapPin size={16} />
                <span>Kolhapur, Maharashtra, India (Open to Relocate)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="about-education-col">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card instrument-panel">
                <div className="education-card-header">
                  <span className="edu-tag">ACADEMIC CREDENTIAL //</span>
                  <span className="edu-period">{edu.period}</span>
                </div>

                <div className="education-card-body">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-school">{edu.institution}</div>

                  <div className="edu-grade-box">
                    <span className="grade-label">Academic Standing:</span>
                    <strong className="grade-val">{edu.grade}</strong>
                  </div>

                  <ul className="edu-highlights-list">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="edu-highlight-item">
                        <span className="edu-bullet" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
