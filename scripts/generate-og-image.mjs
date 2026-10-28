import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#121316"/>
  <rect x="30" y="30" width="1140" height="570" fill="#1A1C20" stroke="#30343A" stroke-width="2" rx="8"/>
  
  <!-- Telemetry marks -->
  <line x1="30" y1="90" x2="1170" y2="90" stroke="#30343A" stroke-width="1"/>
  <text x="60" y="70" font-family="monospace" font-size="18" fill="#FF5A4F" letter-spacing="2">SK-01 // SIGNAL IDENTITY</text>
  <text x="960" y="70" font-family="monospace" font-size="18" fill="#98A1AD">KOLHAPUR, IN</text>
  
  <!-- Main Headlines -->
  <text x="60" y="210" font-family="sans-serif" font-weight="700" font-size="68" fill="#DCE1E8">Sujal Kadam</text>
  <text x="60" y="275" font-family="sans-serif" font-weight="500" font-size="28" fill="#FF5A4F">Entry-Level Software Engineer | Java, Spring Boot, SQL, React &amp; TypeScript</text>
  <text x="60" y="340" font-family="sans-serif" font-size="22" fill="#98A1AD">B.Tech 2026 • 95%+ SVM Vibration Diagnosis • 2 Research Papers • 1,500+ Students Coordinated</text>
  
  <!-- Waveform Trace -->
  <path d="M60 480 L350 480 L400 450 L430 520 L460 410 L490 530 L520 480 L780 480 L810 460 L840 500 L870 480 L1140 480" stroke="#D92622" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png');

console.log('Generated public/og-image.png');
