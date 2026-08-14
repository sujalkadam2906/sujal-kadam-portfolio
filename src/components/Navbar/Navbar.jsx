import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route-hash change (link click) or Escape.
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__row">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__brand-mark" aria-hidden="true" />
          {profile.name}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <a href={profile.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Resume
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`navbar__toggle-bar ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${open ? "is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__mobile-cta"
          onClick={() => setOpen(false)}
        >
          View Resume
        </a>
      </nav>
    </header>
  );
}
