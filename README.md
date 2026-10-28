# Sujal Kadam — Personal Portfolio (Signal System)

Live Deployment: [https://sujal-kadam-portfolio.vercel.app/](https://sujal-kadam-portfolio.vercel.app/)

A distinctive, high-performance personal engineering portfolio built with **React 18**, **Vite**, and self-hosted typography. Sourced strictly from verified credentials and Sujal Kadam's single-source-of-truth resume (`Sujal_Kadam_Resume.pdf`).

---

## 1. Design Direction: "Signal"

The identity is inspired by Sujal's flagship engineering research in vibration signal analysis for rolling element bearing fault detection:
- **Calm Instrument-Panel Aesthetics**: Hairline borders, technical crop marks, monospace telemetry readouts, deliberate asymmetry, and numbered section identifiers (`01 / Projects`).
- **Signal Red Accent**: Used with restraint as the "fault spike" indicator (primary CTAs, active indicators, live waveform trace).
- **Two Complete Themes**:
  - **Signal (Dark, Default)**: Charcoal background (`#121316`), surface (`#1A1C20`), raised (`#23262B`), moonlit silver typography (`#DCE1E8`), and calibrated signal red (`#D92622`).
  - **Daylight (Light)**: Ice silver background (`#EEF1F5`), crisp surface (`#FFFFFF`), deep aubergine ink (`#2A1030`), and rich marigold accents (`#F2A900`).
  - View Transitions API circular reveal originating from the click coordinate, with instant fallback.
  - **100% WCAG 2.1 AA Contrast Compliant**: Automated script verifies every foreground/background pair.
- **Typography (Self-Hosted via `@fontsource`)**:
  - Headings: `Schibsted Grotesk`
  - Body: `Instrument Sans`
  - Telemetry / Labels: `JetBrains Mono`

---

## 2. Interactive Features

1. **Command Palette (`Ctrl/Cmd + K` or Navbar Search Button)**: Jump instantly to sections, open project repositories, toggle themes, or download resume.
2. **Hero Waveform with Fault Injection**: Interactive vibration visualizer with an "Inject Fault Spike" toggle that simulates outer-race bearing impact shock pulses and updates live RMS and kurtosis telemetry.
3. **Instrument Bezel Photo Frame**: Features corner crop marks, a machined calibration scale with an active red tick, a pulsing "Open to relocate" chip, and subtle 3D pointer tilt.
4. **Interactive Projects & Detail Drawer**: Filter projects by tech stack (React, Java, SQL, ML) with real live demos and GitHub code links. Clicking any card opens a detail drawer with problem, architecture, engineering highlights, and personal contribution.
5. **Certifications Gallery & Lightbox**: Responsive gallery with category filter, WebP thumbnails, and full-screen lightbox with keyboard navigation (`←` / `→` / `Esc`), "Download PDF", "Open Original", and "Verify" links.
6. **Direct Recruiter Contact**: Large click targets with one-click clipboard copying and toast feedback, prefilled `mailto:` links, phone, and relocation availability.

---

## 3. Directory Layout

```text
portfolio-new/
├── public/
│   ├── certificates/          # Optimized WebP previews, thumbs, and downloadable PDFs
│   │   ├── previews/          # High-resolution 1600px WebP previews
│   │   ├── thumbs/            # Lightweight 640px WebP thumbnails
│   │   └── original/          # Clean URL-safe original files
│   ├── images/                # Optimized AVIF and WebP profile photos (480w, 900w)
│   ├── projects/              # Headless Playwright 1440x900 live project screenshots
│   ├── research/              # EPJ conference paper and TFGET manuscript
│   ├── Sujal_Kadam_Resume.pdf # Source-of-truth 1-page PDF
│   ├── favicon.svg            # SVG waveform brand favicon
│   ├── og-image.png           # 1200x630 OpenGraph social card
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # SEO sitemap
├── scripts/
│   ├── build-assets.mjs       # Reusable asset optimization pipeline
│   ├── check-contrast.mjs     # WCAG 2.1 AA contrast verification script
│   ├── check-links.mjs        # External URL HEAD-request validation script
│   └── run-audits.mjs         # Playwright responsive + axe-core audit suite
├── src/
│   ├── components/            # Data-driven React UI components
│   │   ├── About/             # Background and education details
│   │   ├── Certifications/    # Gallery and lightbox viewer
│   │   ├── Contact/           # Contact channels with copy targets
│   │   ├── Footer/            # Build telemetry and back-to-top
│   │   ├── Hero/              # Hero copy, photo bezel, and live waveform
│   │   ├── Navbar/            # Header, scroll progress, and theme switch
│   │   ├── Projects/          # Project cards and architecture drawer
│   │   ├── Research/          # Publications and academic honors
│   │   ├── ResumeCTA/         # Resume preview and download CTA
│   │   ├── Skills/            # Technical skills grouped per resume
│   │   └── ui/                # Command palette, buttons, chips, icons
│   ├── context/               # ThemeContext with View Transitions
│   ├── data/                  # Source-of-truth data layer
│   └── styles/                # CSS custom properties, tokens, and globals
├── DECISIONS.md               # Architectural decision record
├── vercel.json                # Vercel deployment configuration
└── package.json
```

---

## 4. Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Production output is written to `dist/` (< 70 KB gzipped JS).

### Run Test Suite
```bash
npm test
```
Executes Vitest smoke tests covering data integrity, file existence, theme toggling, and modal interactions.

### Run Automated Quality Audits
```bash
# Run axe-core accessibility + responsive viewport test
npm run audit

# Run WCAG color contrast verification
npm run check:contrast

# Check all external hyperlinks
npm run check:links

# Run linter
npm run lint
```

### Rebuild & Optimize Assets
```bash
node scripts/build-assets.mjs
```
Automates the optimization pipeline:
- Compresses large ~10MB PDFs to <200 KB via raw RGB stream JPEG re-encoding.
- Rotates landscape certificates scanned into portrait pages (Mega Project Award).
- Generates 640px WebP thumbnails and 1600px WebP previews via `pdftoppm` + `sharp`.
- Generates 480w and 900w AVIF and WebP profile photos.
- Captures 1440x900 screenshots of live deployed projects via headless Playwright.

---

## 5. Editing Content

All copy, project data, and credentials are intentionally isolated in `src/data/`:
- `profile.js`: Headline, location, contact channels, bio, and key telemetry statistics.
- `skills.js`: Technical competencies grouped per resume categories.
- `projects.js`: Project descriptions, stack, highlights, and repository/live URLs.
- `certifications.js`: Verified certificate entries, credentials, and verification URLs.
- `research.js`: Peer-reviewed papers, DOI links, and abstract summaries.
- `education.js`: Degree, institution, academic standing (CGPA: 8.23/10).
- `experience.js`: Historical internship data (set to `SHOW_EXPERIENCE = false` by default per updated resume).

---

## 6. Deployment (Vercel)

The repository is configured for deployment to **Vercel** (`sujal-kadam-portfolio.vercel.app`):
1. Import the repository into Vercel.
2. Framework: **Vite** (auto-detected).
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. `vercel.json` provides SPA routing rewrites and asset caching rules (`Cache-Control: immutable`).
