import React, { useState } from 'react';
import { certificates, certificateCategories } from '../../data/certifications';
import SectionHeader from '../ui/SectionHeader';
import Chip from '../ui/Chip';
import CertificateLightbox from './CertificateLightbox';
import { ExternalLink, Download, FileText, Award } from '../ui/Icons';
import './Certifications.css';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCertId, setSelectedCertId] = useState(null);

  const filteredCerts = certificates.filter((c) => {
    if (activeCategory === 'All') return true;
    return c.category === activeCategory;
  });

  const viewableCerts = filteredCerts.filter((c) => !c.isTextOnly && c.preview);
  const currentIndex = viewableCerts.findIndex((c) => c.id === selectedCertId);
  const activeCert = currentIndex !== -1 ? viewableCerts[currentIndex] : null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCertId(viewableCerts[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < viewableCerts.length - 1) {
      setSelectedCertId(viewableCerts[currentIndex + 1].id);
    }
  };

  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionHeader
          number="04"
          title="Certifications & Honors"
          description="Verified course completions, professional workshops, academic awards, and conference presentation credentials across software engineering, data, and design."
        />

        {/* Category Filter Chips */}
        <div className="certs-filter-bar" role="tablist" aria-label="Filter certificates by category">
          {certificateCategories.map((cat) => (
            <Chip
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
              <span className="filter-count">
                (
                {cat === 'All'
                  ? certificates.length
                  : certificates.filter((c) => c.category === cat).length}
                )
              </span>
            </Chip>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="certs-grid">
          {filteredCerts.map((cert) => {
            if (cert.isTextOnly) {
              return (
                <div key={cert.id} className="cert-card cert-card-textonly instrument-panel">
                  <div className="cert-card-header">
                    <span className="cert-category">{cert.category}</span>
                    <span className="cert-status-badge text-only-badge">Listed on resume</span>
                  </div>
                  <div className="cert-card-body">
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer-row">
                      <span>Issuer: <strong>{cert.issuer}</strong></span>
                    </div>
                    <p className="cert-detail">{cert.detail}</p>
                    <div className="cert-notice-box">
                      <span>Document verification file pending upload.</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <article
                key={cert.id}
                className="cert-card instrument-panel"
                onClick={() => setSelectedCertId(cert.id)}
              >
                <div className="cert-card-header">
                  <span className="cert-category">{cert.category}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <div className="cert-thumb-wrap">
                  <img
                    src={cert.thumb}
                    alt={`${cert.title} thumbnail`}
                    className="cert-thumb-img"
                    loading="lazy"
                  />
                  <div className="cert-thumb-hover-overlay">
                    <span className="inspect-chip">Preview Credential</span>
                  </div>
                </div>

                <div className="cert-card-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer-row">
                    <span>Issuer: <strong>{cert.issuer}</strong></span>
                  </div>
                  <p className="cert-detail">{cert.detail}</p>

                  <div className="cert-card-footer" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className="cert-action-btn view-btn"
                      onClick={() => setSelectedCertId(cert.id)}
                    >
                      Preview
                    </button>

                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        download
                        className="cert-action-btn"
                        aria-label={`Download ${cert.title} PDF`}
                      >
                        <Download size={13} />
                        <span>PDF</span>
                      </a>
                    )}

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-action-btn verify-link"
                        aria-label={`Verify ${cert.title} on issuer website (opens in new tab)`}
                      >
                        <ExternalLink size={13} />
                        <span>Verify</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lightbox Viewer */}
        {activeCert && (
          <CertificateLightbox
            certificate={activeCert}
            onClose={() => setSelectedCertId(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < viewableCerts.length - 1}
          />
        )}
      </div>
    </section>
  );
}
