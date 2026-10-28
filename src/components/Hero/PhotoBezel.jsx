import React, { useRef, useState, useEffect } from 'react';
import './PhotoBezel.css';

export default function PhotoBezel() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [canTilt, setCanTilt] = useState(true);

  useEffect(() => {
    // Disable tilt on touch devices or reduced-motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      setCanTilt(false);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!canTilt || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 6 degrees tilt
    const rotX = -((y - centerY) / centerY) * 5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    if (!canTilt) return;
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="photo-bezel-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: canTilt
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : 'none',
      }}
    >
      {/* Corner Crop Marks */}
      <span className="crop-mark top-left" aria-hidden="true" />
      <span className="crop-mark top-right" aria-hidden="true" />
      <span className="crop-mark bottom-left" aria-hidden="true" />
      <span className="crop-mark bottom-right" aria-hidden="true" />

      {/* Vertical Calibration Scale */}
      <div className="ruler-scale" aria-hidden="true">
        <span className="tick" />
        <span className="tick" />
        <span className="tick tick-active" />
        <span className="tick" />
        <span className="tick" />
        <span className="tick" />
        <span className="tick" />
        <span className="tick" />
      </div>

      {/* Main Image Frame */}
      <div className="photo-inner-frame">
        <picture>
          <source
            type="image/avif"
            srcSet="/images/profile-480.avif 480w, /images/profile-900.avif 900w"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
          />
          <source
            type="image/webp"
            srcSet="/images/profile-480.webp 480w, /images/profile-900.webp 900w"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
          />
          <img
            src="/images/profile-900.webp"
            alt="Sujal Kadam — Entry-Level Software Engineer"
            width="400"
            height="427"
            className="photo-image"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <div className="photo-gradient-overlay" aria-hidden="true" />
      </div>

      {/* Frame Telemetry Bar */}
      <div className="photo-bezel-footer">
        <span className="bezel-id">SK-01 / KOLHAPUR, IN</span>
        <div className="relocate-chip">
          <span className="pulse-dot" aria-hidden="true" />
          <span>Open to relocate</span>
        </div>
      </div>
    </div>
  );
}
