# Copilot Instructions

## Purpose
This file defines how GitHub Copilot should assist in this repository.

## Core Development Principles
1. Maintain strict separation of concerns:
   - UI components in `src/components`
   - Business/data constants in `src/constants`
   - Reusable stateful logic in `src/hooks`
   - Generic helpers in `src/utils`
2. Avoid duplication (DRY):
   - Extract repeated arrays, texts, and config values into constants.
   - Reuse hooks/utilities instead of duplicating logic.
3. Remove dead/unused code:
   - Delete unused files, selectors, imports, states, and functions.
   - Keep component APIs minimal and explicit.
4. Keep performance first:
   - Prefer passive event listeners for scroll/touch.
   - Throttle high-frequency events with `requestAnimationFrame`.
   - Avoid unnecessary re-renders and inline object/function churn where practical.
   - Use lazy loading for non-critical media.
5. Keep architecture simple and maintainable:
   - Avoid over-engineering.
   - Keep changes small, focused, and testable.

## Styling Rules
- Use CSS Modules for component-scoped styles.
- Avoid global CSS unless absolutely necessary.
- Do not place styling concerns inline unless required for dynamic runtime behavior.
- Keep naming consistent with existing BEM-like conventions (e.g., `component__element`).
- Keep desktop and mobile styles split for easier debugging:
   - Desktop/base styles in `*.module.css`
   - Mobile overrides in `*.mobile.module.css`
   - Apply both style maps in JSX className (desktop + mobile class for each overridden element)
- Do not keep `@media` blocks in desktop files when a mobile module exists.

## React Rules
- Prefer function components and hooks.
- Keep component files presentation-focused; move logic into hooks/utilities.
- Use semantic HTML and accessibility-friendly patterns.
- Prefer anchors for navigation/external links instead of click-only `div`s.

## Documentation Rules
When structural or behavior changes are introduced:
- Update `README.md` with:
  - What changed
  - Why it changed
  - Where files are now located
  - Any new setup/runtime notes
- Keep docs concise, accurate, and current.

## Quality Gates
Before finalizing major changes:
1. Run lint (`npm run lint`).
2. Run production build (`npm run build`).
3. Resolve introduced errors/warnings relevant to the change.

## File Organization Targets
- `src/constants`: static configuration/data only
- `src/hooks`: reusable React logic
- `src/utils`: pure helper functions
- `src/components`: render-only or mostly render-focused components

## Non-Goals
- Do not add unrelated features during refactors.
- Do not introduce heavy dependencies without clear value.
- Do not redesign the entire UI unless explicitly requested.
