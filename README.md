# OZ · IT STUDIOS

Engineering the Future — One Line of Code at a Time.

## Overview
OZ · IT STUDIOS is a high-performance React + Vite marketing/presentation site focused on premium UI delivery, smooth interactions, and maintainable frontend architecture.

## Tech Stack
- React 19
- Vite 7
- ESLint 9
- CSS Modules
- react-icons

## Refactor Summary (Feb 2026)
This project was refactored for maintainability, separation of concerns, and runtime throughput.

### What Changed
- Extracted static/business data from components into dedicated constants files.
- Moved contact form validation and submit flow to a custom hook.
- Added reusable scroll-threshold hook shared by navbar and scroll-to-top button.
- Converted Social Footer from global class-name icons to typed `react-icons` components.
- Replaced inline style-heavy UI (scroll button) with CSS Modules.
- Improved project card semantics by using real anchor links.
- Removed dead code and unused selectors.
- Cleaned duplicated styling blocks.

### New Project Structure
```text
src/
  constants/
    animation.js
    contact.js
    projects.js
    services.js
    social.js
  hooks/
    useContactForm.js
    useScrollThreshold.js
  utils/
    scrollToSection.js
    validation.js
  components/
    ...existing components
```

## Performance Optimizations Applied
- Scroll listeners now use passive handlers and `requestAnimationFrame` throttling.
- Vision card hover tilt no longer triggers React re-render on every mouse move.
- Intersection reveal animation config centralized and reused.
- Inline style objects removed where possible to reduce runtime object churn.
- Better DOM semantics (`a` instead of clickable `div`) reduce extra click handling logic.

## Scripts
- `npm run dev` — start local dev server
- `npm run build` — create production build
- `npm run preview` — preview production output
- `npm run lint` — run ESLint

## Local Development
1. Clone:
   ```bash
   git clone https://github.com/mz9201ju/oz-it-studios.git
   cd oz-it-studios
   ```
2. Install:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm run dev
   ```

## Deploy
- Build artifacts are generated with Vite under `dist/`.
- Supports GitHub Pages/Cloudflare static hosting flows.

## Notes
- Contact form POST endpoint is configured in `src/constants/contact.js`.
- Keep constants/hooks/components separated to preserve clean architecture.
