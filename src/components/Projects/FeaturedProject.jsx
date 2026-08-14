import { featuredProject } from "../../data/projects";
import "./FeaturedProject.css";

export default function FeaturedProject() {
  const p = featuredProject;
  return (
    <article className="featured card">
      <div className="featured__head">
        <span className="tag featured__badge">Featured · Award-winning</span>
        <span className="featured__period">{p.period}</span>
      </div>

      <h3 className="featured__title">{p.title}</h3>
      <p className="featured__subtitle">{p.subtitle}</p>
      <p className="featured__team">{p.team}</p>

      <div className="featured__body">
        <div className="featured__field">
          <h4>Problem</h4>
          <p>{p.problem}</p>
        </div>

        <div className="featured__field">
          <h4>Approach</h4>
          <ul>
            {p.approach.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="featured__field">
          <h4>My contribution</h4>
          <p>{p.myContribution}</p>
        </div>

        <div className="featured__field">
          <h4>Result</h4>
          <p>{p.result}</p>
        </div>
      </div>

      <div className="featured__stack">
        {p.stack.map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>

      {p.links.paper1 && (
        <div className="featured__links">
          <a href={p.links.paper1} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Read the published paper
          </a>
        </div>
      )}
    </article>
  );
}
