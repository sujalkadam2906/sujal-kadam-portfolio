import React, { useRef, useEffect, useState } from 'react';
import './HeroWaveform.css';

export default function HeroWaveform() {
  const canvasRef = useRef(null);
  const [faultInjected, setFaultInjected] = useState(false);
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Baseline center line
      const centerY = h * 0.5;

      // Draw faint grid lines
      ctx.strokeStyle = 'rgba(128, 128, 128, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Draw signal trace
      ctx.lineWidth = 2;
      ctx.strokeStyle = faultInjected ? '#D92622' : 'rgba(217, 38, 34, 0.65)';
      ctx.beginPath();

      const t = timeRef.current;
      const step = 2;

      for (let x = 0; x < w; x += step) {
        // Base healthy vibration signal (multi-frequency harmonics + noise)
        const f1 = Math.sin((x * 0.02) + t * 2) * 12;
        const f2 = Math.sin((x * 0.05) - t * 1.5) * 6;
        const noise = (Math.sin((x * 0.17) + t * 4) * 2.5);
        let yOffset = f1 + f2 + noise;

        // If fault is injected: add periodic impulse spikes with ringing decay
        if (faultInjected) {
          const period = 120;
          const posInPeriod = (x + t * 60) % period;
          if (posInPeriod < 24) {
            // Impact pulse with exponential decay
            const impact = Math.exp(-posInPeriod * 0.18) * Math.sin(posInPeriod * 1.2) * 44;
            yOffset += impact;
          }
        }

        const y = centerY + yOffset;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      if (!prefersReducedMotion) {
        timeRef.current += 0.035;
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [faultInjected]);

  return (
    <div className="hero-waveform-container" aria-label="Bearing vibration signal visualizer">
      <div className="waveform-telemetry-bar">
        <div className="telemetry-readouts">
          <span className="telemetry-item">
            <span className="label">RMS:</span>
            <span className="val">{faultInjected ? '0.742 g' : '0.184 g'}</span>
          </span>
          <span className="telemetry-item">
            <span className="label">KURTOSIS:</span>
            <span className="val">{faultInjected ? '6.84' : '2.98'}</span>
          </span>
          <span className="telemetry-item">
            <span className="label">BPFO_PEAK:</span>
            <span className="val">{faultInjected ? '118.2 Hz' : '—'}</span>
          </span>
          <span className="telemetry-item status-badge">
            <span
              className={`status-indicator ${faultInjected ? 'fault' : 'healthy'}`}
            />
            <span className="val">
              {faultInjected ? 'FAULT DETECTED (OUTER RACE)' : 'SIGNAL NOMINAL'}
            </span>
          </span>
        </div>

        <button
          type="button"
          className={`inject-fault-btn ${faultInjected ? 'active' : ''}`}
          onClick={() => setFaultInjected(!faultInjected)}
          aria-pressed={faultInjected}
          title="Simulate bearing vibration fault spike"
        >
          <span className="btn-indicator" />
          <span>{faultInjected ? 'Clear Fault' : 'Inject Fault Spike'}</span>
        </button>
      </div>

      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="waveform-canvas" />
      </div>
    </div>
  );
}
