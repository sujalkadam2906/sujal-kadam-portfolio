import React from 'react';
import { publications } from '../../data/research';
import { achievements } from '../../data/achievements';
import SectionHeader from '../ui/SectionHeader';
import Chip from '../ui/Chip';
import Button from '../ui/Button';
import { ExternalLink, Download, Award } from '../ui/Icons';
import './Research.css';

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <SectionHeader
          number="03"
          title="Research & Academic Honors"
          description="Co-authored peer-reviewed publications and competitive academic recognitions in rolling element bearing fault diagnosis, signal processing, and institutional leadership."
        />

        {/* Publications Grid */}
        <div className="publications-grid">
          {publications.map((pub) => (
            <article key={pub.id} className="publication-card instrument-panel">
              <div className="publication-header">
                <div className="pub-meta-left">
                  <span className="pub-number">{pub.number} //</span>
                  <span className="pub-venue">{pub.venue}</span>
                </div>
                <div className="pub-status-badge">
                  <span className={`status-dot ${pub.statusTone}`} />
                  <span>{pub.status}</span>
                </div>
              </div>

              <div className="publication-body">
                <h3 className="publication-title">{pub.title}</h3>

                <div className="publication-authors">
                  <strong>Authors: </strong>
                  {pub.authors.map((author, aIdx) => (
                    <span
                      key={aIdx}
                      className={author.includes('Kadam') ? 'author-highlight' : ''}
                    >
                      {author}
                      {aIdx < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  <span className="author-rank"> (3rd Author, ML Pipeline)</span>
                </div>

                <p className="publication-summary">{pub.summary}</p>

                <div className="publication-keywords">
                  {pub.keywords.map((kw, kIdx) => (
                    <Chip key={kIdx} className="keyword-chip">
                      {kw}
                    </Chip>
                  ))}
                </div>

                <div className="publication-actions">
                  {pub.doiUrl && (
                    <Button
                      as="a"
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      icon={ExternalLink}
                    >
                      Read on EPJ (DOI)
                    </Button>
                  )}

                  {pub.hasPublicPdf && pub.pdfUrl && (
                    <Button
                      as="a"
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={Download}
                    >
                      Download Open-Access PDF
                    </Button>
                  )}

                  {!pub.hasPublicPdf && (
                    <div className="manuscript-note">
                      <span>Springer publication in production (manuscript withheld pending publisher copyright).</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Awards & Leadership Subgrid */}
        <div className="awards-subgrid">
          {achievements.map((item) => (
            <div key={item.id} className="award-item-card instrument-panel">
              <div className="award-icon-box">
                <Award size={20} />
              </div>
              <div className="award-content">
                <div className="award-meta-row">
                  <span className="award-org">{item.organization}</span>
                  {item.date && <span className="award-date">{item.date}</span>}
                </div>
                <h4 className="award-title">{item.title}</h4>
                <p className="award-detail">{item.detail}</p>
                {item.hasCertificate && item.certificateId && (
                  <a
                    href="#certificates"
                    className="award-cert-link"
                    aria-label={`View Official Award Certificate for ${item.title}`}
                  >
                    View Official Award Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
