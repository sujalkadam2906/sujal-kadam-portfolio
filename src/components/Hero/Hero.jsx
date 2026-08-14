import { profile } from "../../data/profile";
import Waveform from "../Waveform";
import profileImg from "../../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Waveform className="hero__waveform" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-eyebrow hero__eyebrow">Software Engineer · Final-Year Engineering Student</p>
          <h1 className="hero__title">
            I build with Core Java and DSA,
            <br />
            and I've shipped a published ML project.
          </h1>
          <p className="hero__subtitle">
            {profile.summary}
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-accent">
              View Projects
            </a>
            <a href={profile.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Resume
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>SVM accuracy</dt>
              <dd>95%+</dd>
            </div>
            <div>
              <dt>Research papers</dt>
              <dd>2 co-authored</dd>
            </div>
            <div>
              <dt>Project award</dt>
              <dd>Best Mega-Project</dd>
            </div>
          </dl>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src={profileImg}
              alt="Portrait of Sujal Kadam"
              className="hero__portrait-img"
              width="900"
              height="961"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
