import { profile } from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">09 · Contact</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="contact__grid">
          <div>
            <h2 className="contact__title">Let's talk.</h2>
            <p className="contact__subtitle">
              Open to software engineering roles and internships. The fastest way to reach me is email.
            </p>
          </div>

          <ul className="contact__list">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${profile.email}`} className="contact__value">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="contact__label">GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__value">
                github.com/sujalkadam2906
              </a>
            </li>
            <li>
              <span className="contact__label">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__value">
                linkedin.com/in/sujal-sunil-kadam
              </a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact__value">
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
