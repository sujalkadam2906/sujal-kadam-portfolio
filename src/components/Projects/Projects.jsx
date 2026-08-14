import { projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">03 · Projects</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <FeaturedProject />

        <h3 className="projects__subhead">Other projects</h3>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
