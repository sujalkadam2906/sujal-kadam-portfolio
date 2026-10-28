import React, { useState } from 'react';
import { projects } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import Chip from '../ui/Chip';
import ProjectCard from './ProjectCard';
import ProjectDrawer from './ProjectDrawer';
import './Projects.css';

const FILTER_TAGS = ['All', 'React', 'Java', 'SQL', 'ML'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.filterTags.includes(activeFilter) || p.stack.some((s) => s.includes(activeFilter));
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          number="01"
          title="Projects & Engineering"
          description="Production-grade applications and systems built from first principles: full-stack TypeScript interfaces, Spring Boot REST backends, relational database schemas, and statistical ML pipelines."
        />

        {/* Filter Chips Bar */}
        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by technology">
          {FILTER_TAGS.map((tag) => (
            <Chip
              key={tag}
              active={activeFilter === tag}
              onClick={() => setActiveFilter(tag)}
              role="tab"
              aria-selected={activeFilter === tag}
            >
              {tag}
              <span className="filter-count">
                (
                {tag === 'All'
                  ? projects.length
                  : projects.filter(
                      (p) => p.filterTags.includes(tag) || p.stack.some((s) => s.includes(tag))
                    ).length}
                )
              </span>
            </Chip>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Detail Drawer */}
        {selectedProject && (
          <ProjectDrawer
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
