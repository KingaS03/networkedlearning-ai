# networkedlearning.ai (Astro + Netlify)

This repo is a minimal, workshop-first site designed to grow later into a research platform (projects, publications, methods/tools).

## 1) Local setup

1. Install Node.js (LTS).
2. In this folder:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal.

## 2) Where to edit content

Workshop content lives in:

- `src/content/workshops/asonam-2026.md`
- `src/content/workshops/misnc-2026.md`

Main pages:

- Home: `src/pages/index.astro`
- Workshops index: `src/pages/workshops.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`

## 3) Deploy to Netlify

- Push this repo to GitHub.
- In Netlify: **Add new site → Import an existing project**.
- Build command: `npm run build`
- Publish directory: `dist`

The Netlify adapter is included for future-proofing. Astro also provides a one-step installer command:

```bash
npx astro add netlify
```

## 4) Domain (Squarespace Domains)

In Netlify, add your custom domain `networkedlearning.ai` and follow Netlify’s instructions for DNS records.

Tip: if you want both apex and `www`, add both and set one as primary.
