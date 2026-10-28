import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sun, Moon, Download, ExternalLink, Mail, ArrowRight } from './Icons';
import { useTheme } from '../../context/ThemeContext';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import './CommandPalette.css';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // All actionable palette commands
  const allCommands = [
    // Sections
    { id: 'sec-projects', title: '01 / Projects & Engineering', category: 'Navigation', action: () => scrollToSection('projects') },
    { id: 'sec-skills', title: '02 / Technical Skills', category: 'Navigation', action: () => scrollToSection('skills') },
    { id: 'sec-research', title: '03 / Research & Academic Honors', category: 'Navigation', action: () => scrollToSection('research') },
    { id: 'sec-certs', title: '04 / Certifications & Gallery', category: 'Navigation', action: () => scrollToSection('certificates') },
    { id: 'sec-about', title: '05 / Background & Education', category: 'Navigation', action: () => scrollToSection('about') },
    { id: 'sec-resume', title: '06 / Resume Section', category: 'Navigation', action: () => scrollToSection('resume') },
    { id: 'sec-contact', title: '07 / Direct Contact', category: 'Navigation', action: () => scrollToSection('contact') },

    // Projects
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `${p.number} // ${p.title} (${p.subtitle})`,
      category: 'Projects',
      action: () => {
        scrollToSection('projects');
        if (p.links.live) window.open(p.links.live, '_blank');
        else if (p.links.github) window.open(p.links.github, '_blank');
      },
    })),

    // Quick Actions
    {
      id: 'act-theme',
      title: `Toggle Theme (Currently: ${theme === 'dark' ? 'Signal Dark' : 'Daylight Light'})`,
      category: 'Actions',
      action: () => toggleTheme(),
    },
    {
      id: 'act-resume',
      title: 'Download Resume (PDF 326 KB)',
      category: 'Actions',
      action: () => {
        const link = document.createElement('a');
        link.href = '/Sujal_Kadam_Resume.pdf';
        link.download = 'Sujal_Kadam_Resume.pdf';
        link.click();
      },
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${profile.email})`,
      category: 'Actions',
      action: () => {
        navigator.clipboard.writeText(profile.email);
      },
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCommands = allCommands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKey = (e) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            onClose();
          }
        }
      };

      window.addEventListener('keydown', handleKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="palette-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="palette-modal instrument-panel" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-wrap">
          <Search size={18} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or jump to section... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-autocomplete="list"
          />
          <button
            type="button"
            className="palette-close-btn"
            onClick={onClose}
            aria-label="Close command palette"
          >
            <X size={16} />
          </button>
        </div>

        <div className="palette-list" role="listbox">
          {filteredCommands.length === 0 ? (
            <div className="palette-empty">No matching commands or sections found.</div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                role="option"
                aria-selected={idx === selectedIndex}
                className={`palette-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => {
                  cmd.action();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="palette-item-main">
                  <span className="palette-item-title">{cmd.title}</span>
                  <span className="palette-item-cat">{cmd.category}</span>
                </div>
                <ArrowRight size={14} className="palette-item-arrow" />
              </div>
            ))
          )}
        </div>

        <div className="palette-footer">
          <span className="key-hint"><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
          <span className="key-hint"><kbd>↵</kbd> Select</span>
          <span className="key-hint"><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
