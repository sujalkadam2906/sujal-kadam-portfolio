import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Search, Download, X } from '../ui/Icons';
import CommandPalette from '../ui/CommandPalette';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Certificates', href: '#certificates', id: 'certificates' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Keyboard shortcut Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Progress and Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Scroll spy detection
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="navbar-root">
        {/* Scroll Progress Hairline */}
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="container navbar-inner">
          {/* Brand Monogram */}
          <a href="#hero" className="navbar-brand" aria-label="Sujal Kadam Home">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-text">SUJAL KADAM</span>
            <span className="brand-sub">/ SIGNAL</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav" aria-label="Primary site navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.id && <span className="nav-indicator" />}
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="navbar-tools">
            {/* Command Palette Trigger */}
            <button
              type="button"
              className="navbar-tool-btn search-trigger-btn"
              onClick={() => setPaletteOpen(true)}
              title="Command Palette (Ctrl+K)"
              aria-label="Open command palette"
            >
              <Search size={15} />
              <span className="search-key-hint">Ctrl K</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              className="navbar-tool-btn theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch theme (currently ${theme})`}
              aria-label={`Switch to ${theme === 'dark' ? 'Daylight Light' : 'Signal Dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Download Resume Link */}
            <a
              href="/Sujal_Kadam_Resume.pdf"
              download="Sujal_Kadam_Resume.pdf"
              className="btn btn-secondary resume-header-btn"
              aria-label="Download resume PDF"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : (
                <div className="hamburger-bars" aria-hidden="true">
                  <span />
                  <span />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu with Focus Trap */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-menu-panel">
            <nav className="mobile-nav-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-num">0{NAV_LINKS.indexOf(link) + 1} //</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <button
                type="button"
                className="btn btn-secondary mobile-palette-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPaletteOpen(true);
                }}
              >
                <Search size={16} />
                <span>Search / Command Palette</span>
              </button>

              <a
                href="/Sujal_Kadam_Resume.pdf"
                download="Sujal_Kadam_Resume.pdf"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
