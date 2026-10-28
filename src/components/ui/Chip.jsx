import React from 'react';

export default function Chip({
  active = false,
  pulse = false,
  onClick,
  children,
  className = '',
  as: Component = onClick ? 'button' : 'span',
  ...props
}) {
  return (
    <Component
      type={onClick && Component === 'button' ? 'button' : undefined}
      onClick={onClick}
      className={`chip ${active ? 'chip-active' : ''} ${className}`}
      {...props}
    >
      {pulse && <span className="pulse-dot" aria-hidden="true" />}
      {children}
    </Component>
  );
}
