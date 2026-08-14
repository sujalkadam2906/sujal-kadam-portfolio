import { profile } from "../../data/profile";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">01 · About</span>
          <span className="section-rule" aria-hidden="true" />
        </div>
        <div className="about__grid">
          <div className="about__text">
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__facts card">
            <h3 className="about__facts-title">Quick facts</h3>
            <ul className="about__facts-list">
              <li>
                <span>Based in</span>
                <strong>{profile.location}</strong>
              </li>
              <li>
                <span>Primary language</span>
                <strong>Java</strong>
              </li>
              <li>
                <span>Also building with</span>
                <strong>React, JavaScript, Python</strong>
              </li>
              <li>
                <span>Currently learning</span>
                <strong>Spring Boot, REST APIs, JUnit</strong>
              </li>
              <li>
                <span>Targeting</span>
                <strong>Software engineering placements</strong>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
