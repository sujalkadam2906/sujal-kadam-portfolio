import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});
import { certificates } from '../data/certifications';
import { projects } from '../data/projects';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Certifications from '../components/Certifications/Certifications';
import CommandPalette from '../components/ui/CommandPalette';

describe('Data Integrity Verification', () => {
  it('every certificate file referenced in data exists on disk', () => {
    const publicDir = path.resolve(__dirname, '../../public');

    certificates.forEach((cert) => {
      if (cert.isTextOnly) {
        expect(cert.thumb).toBeNull();
        expect(cert.pdf).toBeNull();
        return;
      }

      // Check thumbnail
      const thumbPath = path.join(publicDir, cert.thumb);
      expect(fs.existsSync(thumbPath), `Missing thumbnail: ${thumbPath}`).toBe(true);

      // Check preview
      const previewPath = path.join(publicDir, cert.preview);
      expect(fs.existsSync(previewPath), `Missing preview: ${previewPath}`).toBe(true);

      // Check downloadable file
      const downloadPath = path.join(publicDir, cert.pdf);
      expect(fs.existsSync(downloadPath), `Missing download: ${downloadPath}`).toBe(true);
    });
  });

  it('every project link is a valid URL or null', () => {
    projects.forEach((project) => {
      if (project.links.live) {
        expect(() => new URL(project.links.live)).not.toThrow();
        expect(project.links.live).toMatch(/^https?:\/\//);
      }
      if (project.links.github) {
        expect(() => new URL(project.links.github)).not.toThrow();
        expect(project.links.github).toMatch(/^https?:\/\//);
      }
      if (project.links.paper) {
        expect(() => new URL(project.links.paper)).not.toThrow();
        expect(project.links.paper).toMatch(/^https?:\/\//);
      }
    });
  });

  it('resume PDF exists in public root', () => {
    const publicDir = path.resolve(__dirname, '../../public');
    const resumePath = path.join(publicDir, 'Sujal_Kadam_Resume.pdf');
    expect(fs.existsSync(resumePath)).toBe(true);
  });
});

describe('Theme Context', () => {
  function ThemeTestComponent() {
    const { theme, toggleTheme } = useTheme();
    return (
      <div>
        <span data-testid="theme-name">{theme}</span>
        <button onClick={toggleTheme} data-testid="theme-btn">
          Toggle
        </button>
      </div>
    );
  }

  it('initializes default theme and toggles', () => {
    render(
      <ThemeProvider>
        <ThemeTestComponent />
      </ThemeProvider>
    );

    const themeName = screen.getByTestId('theme-name');
    expect(themeName.textContent).toBe('dark');

    const toggleBtn = screen.getByTestId('theme-btn');
    fireEvent.click(toggleBtn);
    expect(themeName.textContent).toBe('light');
  });
});

describe('Component Smoke Tests', () => {
  it('certifications gallery renders cards and opens lightbox on click', () => {
    render(
      <ThemeProvider>
        <Certifications />
      </ThemeProvider>
    );

    // Look for Complete Java card
    const javaTitle = screen.getByText('Complete Java');
    expect(javaTitle).toBeDefined();

    // Click on preview
    const previewBtn = screen.getAllByText('Preview')[0];
    fireEvent.click(previewBtn);

    // Verify lightbox opens
    const modal = screen.getByRole('dialog');
    expect(modal).toBeDefined();
    expect(screen.getByText('Verify Credential')).toBeDefined();
  });

  it('command palette renders command list when open', () => {
    render(
      <ThemeProvider>
        <CommandPalette isOpen={true} onClose={() => {}} />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText(/Type a command/i)).toBeDefined();
    expect(screen.getByText(/Projects & Engineering/i)).toBeDefined();
    expect(screen.getByText(/Download Resume/i)).toBeDefined();
  });
});
