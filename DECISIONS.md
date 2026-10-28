# Architectural & Design Decisions

This document records key decisions made during the portfolio upgrade in accordance with the project brief.

## 1. Project Location & Scope
- Working directory: `D:\Sujal Kadam\My Doc\portfolio-new\`
- Source reference: `D:\Sujal Kadam\My Doc\My Portfolio Docs\` (read-only, untouched)
- `my-portfolio-site` prototype: Skipped as it was an early vanilla JS prototype of Opportunity Radar, and Opportunity Radar is already live and documented.

## 2. Content & Truth Source
- Resume (`Sujal_Kadam_Resume.pdf`) is the single source of truth for profile, skills, projects, links, and contact info.
- Experience section: Hidden by default (`visible: false` in `src/data/experience.js`) because the updated resume does not list the Aqua Chill internship.
- NPTEL certification: Rendered as text-only card with "Listed on resume" badge, as no verification file was present in `Certificates/`.
- TFGET Research paper: Displayed as an abstract card with "Selected for Springer Publication" badge. Public PDF download is gated behind `SHOW_TFGET_PDF=false` until publisher copyright is resolved.

## 3. Design System & Theme "Signal"
- Primary Theme: **Signal (Dark)**: Charcoal background (`#121316`), surface (`#1A1C20`), raised (`#23262B`), border hairline (`#30343A`), silver text (`#DCE1E8`), muted (`#98A1AD`), signal red accent (`#E5322D` / `#FF5A4F`).
- Light Theme: **Daylight (Light)**: Ice background (`#EEF1F5`), white surface (`#FFFFFF`), aubergine text (`#2A1030`), marigold accents (`#F2A900`).
- Typography: Self-hosted via `@fontsource` to prevent external render-blocking font requests.
  - Headings: `Schibsted Grotesk`
  - Body: `Instrument Sans`
  - Data / Monospace: `JetBrains Mono`
- Anti-template aesthetic: No neon blobs or generic glassmorphism; crisp hairline borders, telemetry readouts, technical crop marks on photo bezel, numbered section indices (`01 / Projects`, etc.).
- Motion: Framer Motion / CSS transitions, 1.2s skippable waveform intro, fault injection toggle on waveform, spring-animated modals/drawers, strict `prefers-reduced-motion` compliance.

## 4. Asset Processing Pipeline
- Python/Node scripts utilizing `pdftoppm` and `Pillow` / `sharp` for extracting and generating WebP previews and thumbnails for all certificates.
- Compression of heavy ~10MB CodeWithHarry PDFs to under 2MB for public download while retaining original fidelity.
- Mega Project Award PDF rotated 90 degrees clockwise to fix landscape scan stored in portrait orientation.
- SQL Certificate (actually a JPEG format despite `.png` extension) normalized into clean `.webp` and `.jpg`.
- Profile photo generated in AVIF and WebP at 480w and 900w with intrinsic aspect ratios to avoid layout shift.
