import { publications } from "../../data/research";
import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">04 · Research</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="research__list">
          {publications.map((pub) => (
            <article className="research__item card" key={pub.title}>
              <div className="research__item-head">
                <span className={`tag research__status research__status--${pub.statusTone}`}>
                  {pub.status}
                </span>
              </div>
              <h3 className="research__title">{pub.title}</h3>
              <p className="research__authors">
                {pub.authors.map((a, i) => (
                  <span key={a} className={i + 1 === pub.myAuthorPosition ? "research__me" : undefined}>
                    {a}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="research__venue">{pub.venue}</p>
              <p className="research__summary">{pub.summary}</p>

              {pub.experimentalFocus && (
                <p className="research__field">
                  <span>Experimental focus: </span>
                  {pub.experimentalFocus}
                </p>
              )}

              {pub.focusTags.length > 0 && (
                <div className="research__tags">
                  {pub.focusTags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {pub.doiUrl && (
                <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer" className="research__doi">
                  DOI: {pub.doi} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
