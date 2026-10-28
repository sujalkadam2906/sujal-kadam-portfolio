import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink, FileText } from '../ui/Icons';
import './Certifications.css';

export default function CertificateLightbox({
  certificate,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!certificate) return;

    const prevActive = document.activeElement;
    modalRef.current?.focus();

    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      prevActive?.focus?.();
    };
  }, [certificate, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!certificate) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        ref={modalRef}
        className="lightbox-panel"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Top Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-meta">
            <span className="lightbox-category">{certificate.category} //</span>
            <span id="lightbox-title" className="lightbox-title">
              {certificate.title}
            </span>
          </div>

          <div className="lightbox-actions">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm-card"
                aria-label="Verify credential on issuer website (opens in new tab)"
              >
                <ExternalLink size={14} />
                <span>Verify Credential</span>
              </a>
            )}

            {certificate.pdf && (
              <a
                href={certificate.pdf}
                download
                className="btn btn-primary btn-sm-card"
                aria-label={`Download ${certificate.title} certificate document`}
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            )}

            {certificate.originalFile && (
              <a
                href={certificate.originalFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm-card"
                aria-label={`Open original ${certificate.title} file in browser (opens in new tab)`}
              >
                <FileText size={14} />
                <span>Open Original</span>
              </a>
            )}

            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Lightbox Image Preview */}
        <div className="lightbox-stage">
          {hasPrev && (
            <button
              type="button"
              className="lightbox-nav-btn nav-prev"
              onClick={onPrev}
              aria-label="Previous certificate"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="lightbox-image-wrap">
            <img
              src={certificate.preview}
              alt={`${certificate.title} issued by ${certificate.issuer}`}
              className="lightbox-image"
            />
          </div>

          {hasNext && (
            <button
              type="button"
              className="lightbox-nav-btn nav-next"
              onClick={onNext}
              aria-label="Next certificate"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Lightbox Footer Details */}
        <div className="lightbox-footer">
          <div className="lightbox-issuer-row">
            <span className="lightbox-issuer">Issuer: <strong>{certificate.issuer}</strong></span>
            <span className="lightbox-sep">•</span>
            <span className="lightbox-date">Issued: <strong>{certificate.date}</strong></span>
          </div>
          <p className="lightbox-detail-text">{certificate.detail}</p>
        </div>
      </div>
    </div>
  );
}
