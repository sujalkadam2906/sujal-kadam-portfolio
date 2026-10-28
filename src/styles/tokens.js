// Motion and design tokens for JavaScript & Framer Motion animation hooks

export const motionTokens = {
  duration: {
    instant: 0.001,
    fast: 0.15,
    normal: 0.25,
    slow: 0.45,
    intro: 1.1,
  },
  ease: {
    // Sharp decelerating curve for entrances
    outExpo: [0.16, 1, 0.3, 1],
    // Smooth natural curve for interactive elements
    standard: [0.22, 1, 0.36, 1],
    // Spring physics for modals, drawers, and active badges
    spring: { type: "spring", stiffness: 380, damping: 28 },
    gentleSpring: { type: "spring", stiffness: 260, damping: 24 },
  },
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};
