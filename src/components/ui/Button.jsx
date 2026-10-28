import React, { useRef, useState } from 'react';

export default function Button({
  as: Component = 'button',
  variant = 'secondary',
  size: _size = 'md',
  magnetic = false,
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setOffset({ x: 0, y: 0 });
  };

  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost'
      ? 'btn-ghost'
      : 'btn-secondary';

  const style = magnetic
    ? {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x === 0 ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
      }
    : undefined;

  return (
    <Component
      ref={btnRef}
      className={`btn ${variantClass} ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      <span>{children}</span>
    </Component>
  );
}
