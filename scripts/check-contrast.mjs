// WCAG 2.1 Relative Luminance and Contrast Ratio calculation
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map((c) => c + c).join('');
  }
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function getContrast(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const l1 = getLuminance(...rgb1);
  const l2 = getLuminance(...rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  // Signal Dark Theme
  { theme: 'Signal (Dark)', text: 'Body Text (#DCE1E8)', fg: '#DCE1E8', bg: '#121316', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Body on Surface (#DCE1E8 on #1A1C20)', fg: '#DCE1E8', bg: '#1A1C20', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Body on Raised (#DCE1E8 on #23262B)', fg: '#DCE1E8', bg: '#23262B', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Muted Text (#98A1AD on #121316)', fg: '#98A1AD', bg: '#121316', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Muted on Surface (#98A1AD on #1A1C20)', fg: '#98A1AD', bg: '#1A1C20', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Muted on Raised (#98A1AD on #23262B)', fg: '#98A1AD', bg: '#23262B', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Signal Red Link (#FF5A4F on #121316)', fg: '#FF5A4F', bg: '#121316', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'Signal Red Link on Surface (#FF5A4F on #1A1C20)', fg: '#FF5A4F', bg: '#1A1C20', required: 4.5 },
  { theme: 'Signal (Dark)', text: 'White on CTA Button (#FFFFFF on #D92622 [Signal Red Fill])', fg: '#FFFFFF', bg: '#D92622', required: 4.5 },

  // Daylight Light Theme
  { theme: 'Daylight (Light)', text: 'Body Text (#2A1030 on #EEF1F5)', fg: '#2A1030', bg: '#EEF1F5', required: 4.5 },
  { theme: 'Daylight (Light)', text: 'Body on Surface (#2A1030 on #FFFFFF)', fg: '#2A1030', bg: '#FFFFFF', required: 4.5 },
  { theme: 'Daylight (Light)', text: 'Muted Text (#5E5468 on #EEF1F5)', fg: '#5E5468', bg: '#EEF1F5', required: 4.5 },
  { theme: 'Daylight (Light)', text: 'Muted on Surface (#5E5468 on #FFFFFF)', fg: '#5E5468', bg: '#FFFFFF', required: 4.5 },
  { theme: 'Daylight (Light)', text: 'Aubergine on Marigold CTA (#2A1030 on #F2A900)', fg: '#2A1030', bg: '#F2A900', required: 4.5 },
];

let allPassed = true;
const results = pairs.map((p) => {
  const ratio = getContrast(p.fg, p.bg);
  const passed = ratio >= p.required;
  if (!passed) allPassed = false;
  return {
    Theme: p.theme,
    Element: p.text,
    Foreground: p.fg,
    Background: p.bg,
    Ratio: ratio.toFixed(2) + ':1',
    Requirement: p.required + ':1',
    Result: passed ? 'PASS (AA)' : 'FAIL',
  };
});

console.table(results);

if (!allPassed) {
  console.error('\nContrast check failed one or more pairs!');
  process.exit(1);
} else {
  console.log('\nAll color combinations pass WCAG 2.1 AA requirements!');
}
