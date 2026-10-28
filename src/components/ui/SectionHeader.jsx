import React from 'react';

export default function SectionHeader({
  number,
  title,
  description,
  action,
  className = '',
}) {
  return (
    <header className={`section-header-wrap ${className}`} style={{ marginBottom: 'var(--sp-6)' }}>
      <div className="section-head">
        <div className="section-label">
          {number && <span className="section-index">{number} /</span>}
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-rule" aria-hidden="true" />
        {action && <div className="section-action">{action}</div>}
      </div>
      {description && <p className="section-desc">{description}</p>}
    </header>
  );
}
