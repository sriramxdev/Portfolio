# Sriram X — Portfolio Website

[![Website](https://img.shields.io/badge/Live-Visit%20Site-brightgreen)](https://sriramxdev.me) [![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-222222?logo=cloudflare&logoColor=orange)](https://dash.cloudflare.com/) [![Astro](https://img.shields.io/badge/Framework-Astro-FF5D01?logo=astro)][![Languages](https://img.shields.io/badge/Languages-Astro%20%2B%20CSS%20%2B%20TypeScript-blue)]

> My personal portfolio and resume site showcasing projects, blog posts, and contact details.

Live demo: https://sriramxdev.me

---

Table of Contents
- About
- Highlights
- Tech Stack
- Screenshots
- Architecture & Design
- Performance & Accessibility
- Local Development
- Deployment (Cloudflare Pages)
- Contributing
- Contact & Resume
- License

---

About

Hello! I'm Sriram — a product-minded developer building delightful web experiences. This repository contains the source for my personal website (sriramxdev.me) built with Astro and deployed on Cloudflare Pages. The site serves as a portfolio, résumé, and contact hub for professional opportunities.

Highlights

- Responsive, accessible, and SEO-friendly portfolio site.
- Built using Astro for optimized performance and partial hydration.
- Deployed on Cloudflare Pages for fast global delivery and automatic CI on pushes.
- Clean project structure suitable for showcasing to employers or clients.

Key Features

- Home / Hero with short intro and CTA
- Projects gallery with live links and repository references
- Blog / Notes (optional, can be expanded)
- Contact section with email and social links
- Resume/CV download and quick highlights
- Light/Dark theme with system preference

Tech Stack

- Framework: Astro (primary)
- Styling: CSS (modern, utility-sensible approach)
- Scripting: TypeScript / JavaScript (small runtime)
- Hosting / CDN: Cloudflare Pages

Badges

![Astro](https://img.shields.io/badge/Framework-Astro-FF5D01)
![Cloudflare](https://img.shields.io/badge/Hosting-Cloudflare%20Pages-224?logo=cloudflare)

Screenshots

View the live site for the most up-to-date visual: https://sriramxdev.me

(Insert screenshots in /assets or point to production images. Example below uses live site.)

![Homepage Screenshot](https://sriramxdev.me)

Architecture & Design

A simple overview of how the site is organized and served:

```mermaid
flowchart LR
  A[Source: repo/Markdown/Components] --> B[Astro Build]
  B --> C[Static Assets (+ optimized images)]
  C --> D[Cloudflare Pages]
  D --> E[Visitors (global via Cloudflare CDN)]
```

Design Principles
- Performance-first: static-first using Astro to ship minimal JS
- Accessibility: semantic HTML, proper contrast, keyboard navigation
- Content-focused: emphasize content and projects for hiring managers

Performance & Accessibility

- Optimized with Astro partial hydration and static rendering
- Images optimized and served via Cloudflare's edge cache
- Lighthouse-friendly layout (fast TTFB, good CLS, low JS)
- Focus on semantic structure and ARIA where needed

Local Development (Getting Started)

Prerequisites
- Node.js (LTS, >= 18)
- npm or pnpm

Quick start

1. Clone the repo

```bash
git clone https://github.com/sriramxdev/Portfolio.git
cd Portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run dev server

```bash
npm run dev
# open http://localhost:3000 (or the port shown in terminal)
```

4. Build for production

```bash
npm run build
npm run preview
```

Notes
- If the project uses environment variables for analytics or CMS, copy `.env.example` to `.env` and fill in values.

Deployment (Cloudflare Pages)

This site is deployed on Cloudflare Pages. A typical deployment flow:

- Push to `main` (or the default branch) → Cloudflare Pages builds the project
- Cloudflare serves the generated static site from its global network

Recommended Pages build settings
- Build command: `npm run build`
- Build output directory: `dist` (or the directory Astro outputs to — verify `astro.config.mjs`)

Contributing

This repo is my personal site; contributions are welcome for improvements (typos, accessibility tweaks, performance suggestions). Open an issue or submit a PR with a clear description and preview of changes.

Contact & Resume

- Website: https://sriramxdev.me
- GitHub: https://github.com/sriramxdev
- Email: (listed on site)

If you're hiring or want to collaborate, check the Contact section on the site or email me directly.

License

This repository is available under the MIT License. See LICENSE for details.

---

Thank you for taking a look — feel free to explore the code and reach out if you'd like to collaborate or hire me! 🚀
