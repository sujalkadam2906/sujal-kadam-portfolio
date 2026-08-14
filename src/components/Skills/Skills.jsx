import { skillGroups, currentlyLearning } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">02 · Skills</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__group card" key={group.label}>
              <h3 className="skills__group-label">{group.label}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="skills__learning">
          <span className="section-eyebrow">Currently learning</span>{" "}
          {currentlyLearning.join(" · ")}
        </p>
      </div>
    </section>
  );
}
