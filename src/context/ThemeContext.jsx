import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolio-theme');
      if (stored === 'light' || stored === 'dark') return stored;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch {
      // fallback
    }
    return 'dark'; // Signal dark default
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(
    (e) => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';

      // Check for View Transitions API support and reduced motion
      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

      if (!document.startViewTransition || prefersReducedMotion) {
        setTheme(nextTheme);
        return;
      }

      // Circular clip path animation from click position
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight / 2;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 400,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
