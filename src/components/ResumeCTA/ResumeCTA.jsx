import { profile } from "../../data/profile";
import Waveform from "../Waveform";
import "./ResumeCTA.css";

export default function ResumeCTA() {
  return (
    <section className="resume-cta">
      <Waveform className="resume-cta__waveform" stroke="var(--color-accent)" animated={false} />
      <div className="container resume-cta__inner">
        <div>
          <p className="section-eyebrow resume-cta__eyebrow">Resume</p>
          <h2 className="resume-cta__title">Everything above, in one PDF.</h2>
        </div>
        <div className="resume-cta__actions">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            View Resume
          </a>
          <a href={profile.resumePath} download className="btn btn-secondary resume-cta__download">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
