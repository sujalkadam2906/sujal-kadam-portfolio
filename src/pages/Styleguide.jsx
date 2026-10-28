import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import SectionHeader from '../components/ui/SectionHeader';
import {
  ExternalLink,
  Github,
  Sun,
  Moon,
  FileText,
  Activity,
  ArrowRight,
} from '../components/ui/Icons';


export default function Styleguide() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: 'var(--sp-7) 0', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-6)' }}>
          <div>
            <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--sp-2)' }}>Signal Design System</h1>
            <p style={{ color: 'var(--text-muted)' }}>Component inventory, typography scale, and color tokens</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
            <Button onClick={toggleTheme} icon={theme === 'dark' ? Sun : Moon}>
              Theme: {theme === 'dark' ? 'Signal (Dark)' : 'Daylight (Light)'}
            </Button>
            <Button as="a" href="/" variant="secondary">
              ← Back to Site
            </Button>
          </div>
        </div>

        {/* 1. Theme Color Tokens */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <SectionHeader number="01" title="Color Tokens & Contrast" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--sp-4)' }}>
            <div className="card-surface" style={{ padding: 'var(--sp-4)' }}>
              <div style={{ height: 48, background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                <strong>--bg</strong>: {theme === 'dark' ? '#121316' : '#EEF1F5'}
              </div>
            </div>
            <div className="card-surface" style={{ padding: 'var(--sp-4)' }}>
              <div style={{ height: 48, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                <strong>--surface</strong>: {theme === 'dark' ? '#1A1C20' : '#FFFFFF'}
              </div>
            </div>
            <div className="card-surface" style={{ padding: 'var(--sp-4)' }}>
              <div style={{ height: 48, background: 'var(--surface-raised)', border: '1px solid var(--line)', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                <strong>--surface-raised</strong>: {theme === 'dark' ? '#23262B' : '#F7F9FB'}
              </div>
            </div>
            <div className="card-surface" style={{ padding: 'var(--sp-4)' }}>
              <div style={{ height: 48, background: 'var(--signal-red)', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                <strong>--signal-red</strong>: #D92622 (4.94:1 AA)
              </div>
            </div>
            <div className="card-surface" style={{ padding: 'var(--sp-4)' }}>
              <div style={{ height: 48, background: 'var(--text)', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                <strong>--text</strong>: {theme === 'dark' ? '#DCE1E8' : '#2A1030'}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <SectionHeader number="02" title="Typography Scale (Self-Hosted)" />
          <div className="card-surface" style={{ padding: 'var(--sp-6)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>Display (--font-display: Schibsted Grotesk, 700)</div>
              <h1 style={{ fontSize: 'var(--fs-hero)' }}>Fault Signal Analysis 95%+</h1>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>Heading 2 (--fs-2xl)</div>
              <h2 style={{ fontSize: 'var(--fs-2xl)' }}>01 / Featured Projects & Engineering</h2>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>Body Text (--font-body: Instrument Sans, 400)</div>
              <p style={{ maxWidth: '65ch', color: 'var(--text)' }}>
                B.Tech graduate moving into software development. Experienced building React/TypeScript interfaces,
                Java + Spring Boot CRUD REST APIs, PostgreSQL analytics, and MySQL persistence.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>Monospace Telemetry (--font-mono: JetBrains Mono)</div>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--signal-red-text)' }}>
                RMS: 0.842 g | KURTOSIS: 4.19 | HARMONIC_PEAK: 124.8 Hz | STATUS: FAULT_INJECTED
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buttons & Interactive Controls */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <SectionHeader number="03" title="Buttons & Interactivity" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', alignItems: 'center' }}>
            <Button variant="primary" magnetic icon={ArrowRight}>
              Primary CTA (Magnetic)
            </Button>
            <Button variant="secondary" icon={Github}>
              Secondary Button
            </Button>
            <Button variant="ghost" icon={ExternalLink}>
              Ghost Button
            </Button>
            <Button variant="primary" size="sm" icon={FileText}>
              Small CTA
            </Button>
          </div>
        </section>

        {/* 4. Chips & Indicators */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <SectionHeader number="04" title="Chips & Badges" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-3)', alignItems: 'center' }}>
            <Chip pulse>Open to relocate</Chip>
            <Chip active>React 18</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Spring Boot</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>SVM Classifier</Chip>
          </div>
        </section>

        {/* 5. Instrument Panel Card */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <SectionHeader number="05" title="Instrument Panel with Machined Bezel" />
          <div
            className="instrument-panel corner-ticks"
            style={{
              padding: 'var(--sp-5)',
              maxWidth: 480,
              border: '1px solid var(--line)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>
                BEZEL_TEST_UNIT // SK-01
              </span>
              <span className="pulse-dot" />
            </div>
            <h3 style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--sp-2)' }}>
              Telemetry Readout Bezel
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--sp-4)' }}>
              Corner tick marks, hairline borders, and subtle technical framing without gimmicky blobs.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-2)' }}>
              <Chip active>ACTIVE</Chip>
              <Chip>SENSORS_OK</Chip>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
