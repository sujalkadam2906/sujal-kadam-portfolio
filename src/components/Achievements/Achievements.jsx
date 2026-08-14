import { achievements } from "../../data/achievements";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">08 · Achievements</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <ol className="achievements__list">
          {achievements.map((a) => (
            <li key={a.title} className="achievements__item">
              <div className="achievements__marker" aria-hidden="true" />
              <div>
                <div className="achievements__row">
                  <h3 className="achievements__title">{a.title}</h3>
                  {a.date && <span className="achievements__date">{a.date}</span>}
                </div>
                <p className="achievements__detail">{a.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
