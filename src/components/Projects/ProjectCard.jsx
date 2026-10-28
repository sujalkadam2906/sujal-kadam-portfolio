import React from 'react';
import { ExternalLink, Github, FileText, ArrowRight } from '../ui/Icons';
import Chip from '../ui/Chip';
import './Projects.css';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card instrument-panel" onClick={() => onSelect(project)}>
      <div className="project-card-header">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className="project-meta-sep">//</span>
          <span className="project-subtitle">{project.subtitle}</span>
        </div>
        <button
          type="button"
          className="project-inspect-btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          aria-label={`Inspect ${project.title} details`}
        >
          <span>Inspect</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {project.image && (
        <div className="project-card-thumb-wrap">
          <img
            src={project.image}
            alt={`${project.title} live interface preview`}
            className="project-card-thumb"
            loading="lazy"
          />
          <div className="project-card-thumb-overlay" />
        </div>
      )}

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-tagline">{project.tagline}</p>

        <div className="project-stack">
          {project.stack.slice(0, 5).map((tech, idx) => (
            <Chip key={idx} className="project-chip">
              {tech}
            </Chip>
          ))}
          {project.stack.length > 5 && (
            <span className="project-more-chip">+{project.stack.length - 5}</span>
          )}
        </div>

        <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
          <div className="project-card-links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm-card"
                aria-label={`Open ${project.title} live demo (opens in new tab)`}
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm-card"
                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}

            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm-card"
                aria-label={`Read ${project.title} research paper DOI (opens in new tab)`}
              >
                <FileText size={14} />
                <span>Paper DOI</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="card-details-text-btn"
            onClick={() => onSelect(project)}
          >
            Details & Architecture →
          </button>
        </div>
      </div>
    </article>
  );
}
