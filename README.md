# Sujal Kadam — Portfolio

A personal portfolio site built with React + Vite. Content is sourced
directly from real resume, project-report, and certificate documents —
nothing is invented.

## Purpose

Present Sujal as a software engineering candidate (Java, DSA, React) with
strong applied ML / research project experience, for placement and
internship applications.

## Tech stack

- **React 18** + **Vite** — frontend and build tooling
- Plain **CSS** (custom properties for design tokens, no framework)
- No backend, no database — all content lives in `src/data/*.js` as
  plain JS objects/arrays and is rendered by data-driven components

## Features

- Fully responsive (320px → large desktop)
- Accessible: semantic HTML, visible focus states, keyboard-navigable
  mobile menu, `prefers-reduced-motion` respected
- SEO basics: descriptive `<title>`, meta description, Open Graph tags
- Featured project shown as a detailed engineering "spec sheet" (problem
  → approach → contribution → result) rather than a plain card
- Research section with real publication metadata and a DOI link
- Resume view/download wired to the actual PDF in `public/`

## Project structure

```text
src/
├── components/       # One folder per section, each with .jsx + .css
├── data/             # All portfolio content as plain JS — edit here
├── styles/           # variables.css (design tokens) + globals.css
├── App.jsx
└── main.jsx
public/
└── Sujal_Kadam_Resume.pdf
```

## How to run

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## How to build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command
   `npm run build`, output directory `dist` — Vercel fills these in
   automatically.
4. Deploy. Every push to `main` redeploys automatically.

## Editing content

All real content lives in `src/data/`. To update a section, edit the
corresponding file — no component code needs to change for text edits.

## Remaining placeholders

See the "Remaining placeholders" list from the build summary — mainly
GitHub repo links for the three non-featured projects, which weren't
included in the uploaded materials.

## Future improvements

- Add live GitHub repo links once the three smaller projects are pushed
  publicly
- Add project screenshots once available
- Optional dark/light theme toggle
