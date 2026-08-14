export default function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <h3 className="project-card__title">{project.title}</h3>

      <dl className="project-card__specs">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Built</dt>
          <dd>{project.built}</dd>
        </div>
        <div>
          <dt>Contribution</dt>
          <dd>{project.contribution}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>

      <div className="project-card__footer">
        <div className="project-card__stack">
          {project.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
        {(project.links.github || project.links.demo) && (
          <div className="project-card__links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Live demo →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
