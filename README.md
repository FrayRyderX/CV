# CV

Personal resume built with HTML/CSS and exported to PDF using Node.js and Puppeteer.

## What it does

- **`index.html`** — Single-page resume with a two-column layout (sidebar + content), print-ready styles, and profile photo.
- **`generate-pdf.js`** — Renders `index.html` in headless Chrome and saves it as a PDF file.
- **`assets/`** — Images used by the resume.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (v9+)

## Getting started

Install dependencies:

```bash
pnpm install
```

## Usage

### Preview in the browser

Open `index.html` directly in your browser, or use a local server:

```bash
npx serve .
```

### Generate the PDF

```bash
pnpm pdf
```

This creates **`Freymer_Sepulveda_CV.pdf`** in the project root (A4, with background colors and images preserved).

You can also run the script directly:

```bash
node generate-pdf.js
```

## Project structure

```
CV/
├── assets/img/          # Profile photo and images
├── index.html           # Resume source
├── generate-pdf.js      # PDF generation script
├── package.json
└── pnpm-lock.yaml
```

## Notes

- Generated PDFs and `node_modules/` are listed in `.gitignore` and are not committed.
- Edit `index.html` to update resume content; re-run `pnpm pdf` to refresh the PDF.
- To change the output filename, update `OUTPUT_FILE` in `generate-pdf.js`.
