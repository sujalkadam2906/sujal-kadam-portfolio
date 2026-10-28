import React from 'react';
import Button from '../components/ui/Button';
import { ArrowRight, Activity } from '../components/ui/Icons';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        padding: 'var(--sp-6)',
      }}
    >
      <div
        className="instrument-panel corner-ticks"
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: 'var(--sp-6)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--sp-4)',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 'var(--radius-xs)',
            background: 'var(--surface-raised)',
            border: '1px solid var(--line)',
            color: 'var(--signal-red-text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Activity size={26} />
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--signal-red-text)', letterSpacing: '0.1em' }}>
          ERROR_CODE: 404 // SIGNAL_DISCONTINUITY
        </div>

        <h1 style={{ fontSize: 'var(--fs-2xl)', fontWeight: 700, margin: 0 }}>
          Route Not Found
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', lineHeight: 1.6 }}>
          The requested coordinate does not correspond to an active telemetry channel. The signal waveform has terminated.
        </p>

        <Button as="a" href="/" variant="primary" icon={ArrowRight}>
          Return to Primary Signal (Home)
        </Button>
      </div>
    </div>
  );
}
