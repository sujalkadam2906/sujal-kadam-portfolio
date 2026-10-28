import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, FileText } from '../ui/Icons';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import './Projects.css';

export default function ProjectDrawer({ project, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Save previous focus
    const prevActiveElement = document.activeElement;
    drawerRef.current?.focus();

    // Lock body scroll
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      prevActiveElement?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div
        ref={drawerRef}
        className="drawer-panel"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-meta">
            <span className="drawer-number">{project.number} //</span>
            <span className="drawer-subtitle">{project.subtitle}</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="drawer-body">
          <h2 id="drawer-title" className="drawer-title">
            {project.title}
          </h2>

          <p className="drawer-tagline">{project.tagline}</p>

          {/* Screenshot if available */}
          {project.image && (
            <div className="drawer-image-box">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                className="drawer-image"
                loading="lazy"
              />
            </div>
          )}

          {/* Action Links */}
          <div className="drawer-actions">
            {project.links.live && (
              <Button
                as="a"
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={ExternalLink}
              >
                Open Live Application
              </Button>
            )}
            {project.links.github && (
              <Button
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={Github}
              >
                View GitHub Code
              </Button>
            )}
            {project.links.paper && (
              <Button
                as="a"
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={FileText}
              >
                Read Published Paper (DOI)
              </Button>
            )}
          </div>

          {/* Tech Stack */}
          <div className="drawer-section">
            <h3 className="drawer-section-heading">Technology Stack</h3>
            <div className="drawer-stack-chips">
              {project.stack.map((item, idx) => (
                <Chip key={idx}>{item}</Chip>
              ))}
            </div>
          </div>

          {/* Problem & Built */}
          <div className="drawer-section">
            <h3 className="drawer-section-heading">The Problem</h3>
            <p className="drawer-text">{project.problem}</p>
          </div>

          <div className="drawer-section">
            <h3 className="drawer-section-heading">What I Built</h3>
            <p className="drawer-text">{project.built}</p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div className="drawer-section">
              <h3 className="drawer-section-heading">Key Engineering Highlights</h3>
              <ul className="drawer-highlights-list">
                {project.highlights.map((h, i) => (
                  <li key={i} className="drawer-highlight-item">
                    <span className="drawer-bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Personal Contribution */}
          <div className="drawer-section">
            <h3 className="drawer-section-heading">My Contribution</h3>
            <p className="drawer-text">{project.myContribution}</p>
          </div>

          {/* Impact & Outcome */}
          <div className="drawer-section">
            <h3 className="drawer-section-heading">Outcome & Impact</h3>
            <p className="drawer-text">{project.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
