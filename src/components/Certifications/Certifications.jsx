import { certifications } from "../../data/certifications";
import "./Certifications.css";

export default function Certifications() {
  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">07 · Certifications</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="certifications__grid">
          {featured.map((cert) => (
            <div className="cert-card card" key={cert.title}>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer">{cert.issuer}</p>
              {cert.date && <p className="cert-card__date">{cert.date}</p>}
              {cert.detail && <p className="cert-card__detail">{cert.detail}</p>}
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <ul className="certifications__minor">
            {rest.map((cert) => (
              <li key={cert.title}>
                <span className="certifications__minor-title">{cert.title}</span>
                <span className="certifications__minor-issuer">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
