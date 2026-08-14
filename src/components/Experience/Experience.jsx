import { experience } from "../../data/experience";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">05 · Experience</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="experience__list">
          {experience.map((job) => (
            <article className="experience__item" key={job.company}>
              <div className="experience__meta">
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">{job.company}</p>
                <p className="experience__duration">{job.duration}</p>
                <p className="experience__location">{job.location}</p>
              </div>
              <div className="experience__detail">
                <p className="experience__context">{job.context}</p>
                <ul className="experience__responsibilities">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <p className="experience__learnings">
                  <strong>What it taught me: </strong>
                  {job.learnings}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
