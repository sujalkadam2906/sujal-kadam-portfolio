import { education } from "../../data/education";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">06 · Education</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <ul className="education__list">
          {education.map((ed) => (
            <li className="education__item" key={ed.degree}>
              <div>
                <h3 className="education__degree">{ed.degree}</h3>
                <p className="education__school">{ed.school}</p>
              </div>
              <div className="education__meta">
                <span className="tag">{ed.period}</span>
                <span className="education__detail">{ed.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
