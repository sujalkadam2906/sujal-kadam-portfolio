import React from 'react';
import { profile } from '../../data/profile';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { Download, ExternalLink, FileText, Check } from '../ui/Icons';
import './ResumeCTA.css';

export default function ResumeCTA() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <SectionHeader
          number="06"
          title="Curriculum Vitae / Resume"
          description="A complete single-page record of software projects, technical skill proficiencies, research publications, and academic milestones."
        />

        <div className="resume-panel instrument-panel">
          <div className="resume-panel-header">
            <div className="resume-meta">
              <span className="file-name">Sujal_Kadam_Resume.pdf</span>
              <span className="file-size">• 326 KB • Single-Page Document</span>
            </div>
            <span className="verified-badge">
              <Check size={12} />
              <span>Single Source of Truth</span>
            </span>
          </div>

          <div className="resume-panel-body">
            <div className="resume-summary-col">
              <h3 className="resume-headline">{profile.headline}</h3>
              <p className="resume-summary-text">{profile.summary}</p>

              <div className="resume-key-points">
                <div className="point-item">
                  <span className="point-bullet" />
                  <span><strong>Full-Stack:</strong> React 18, TypeScript, Java 8, Spring Boot, MySQL, PostgreSQL.</span>
                </div>
                <div className="point-item">
                  <span className="point-bullet" />
                  <span><strong>Research & ML:</strong> 95%+ SVM vibration diagnosis, 2 peer-reviewed papers.</span>
                </div>
                <div className="point-item">
                  <span className="point-bullet" />
                  <span><strong>Leadership:</strong> Chief Student TPO managing 20+ drives for 1,500+ students.</span>
                </div>
              </div>

              <div className="resume-actions">
                <Button
                  as="a"
                  href="/Sujal_Kadam_Resume.pdf"
                  download="Sujal_Kadam_Resume.pdf"
                  variant="primary"
                  icon={Download}
                >
                  Download PDF Resume
                </Button>

                <Button
                  as="a"
                  href="/Sujal_Kadam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={ExternalLink}
                >
                  Open in New Tab
                </Button>
              </div>
            </div>

            {/* Document Telemetry Visual Card */}
            <div className="resume-doc-card">
              <div className="doc-icon-wrap">
                <FileText size={48} />
              </div>
              <div className="doc-meta-info">
                <span className="doc-type">PDF DOCUMENT</span>
                <span className="doc-pages">1 PAGE // A4 FORMAT</span>
                <span className="doc-status">UPDATED OCTOBER 2026</span>
              </div>
              <a
                href="/Sujal_Kadam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-preview-link"
              >
                Inspect Document →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
