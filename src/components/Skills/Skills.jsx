import React from 'react';
import { skillGroups } from '../../data/skills';
import SectionHeader from '../ui/SectionHeader';
import Chip from '../ui/Chip';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          number="02"
          title="Technical Competencies"
          description="Grouped strictly as verified on my resume: backend Java development, modern frontend engineering, relational schema design, core computer science, and engineering toolchains."
        />

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group-card instrument-panel">
              <div className="skill-group-header">
                <span className="skill-group-index">0{idx + 1}</span>
                <h3 className="skill-group-title">{group.label}</h3>
              </div>
              <div className="skill-chips-wrap">
                {group.items.map((item, itemIdx) => (
                  <Chip key={itemIdx} className="skill-item-chip">
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
