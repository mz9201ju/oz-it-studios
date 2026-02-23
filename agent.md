# Agent Operating Guide

## Mission
Refactor and maintain this codebase for clarity, speed, and long-term scalability while preserving product behavior.

## Required Workflow
1. **Audit first**
   - Inspect components, constants, hooks, utils, styles.
   - Identify duplicates, dead code, and mixed responsibilities.
2. **Refactor second**
   - Extract static data and business rules from UI files.
   - Consolidate repeated logic in hooks/utils.
   - Remove unused code paths and stale assets.
3. **Optimize third**
   - Reduce render churn.
   - Optimize high-frequency event handling.
   - Keep bundle/runtime work lean.
4. **Validate fourth**
   - Run lint and build.
   - Fix issues directly caused by refactor.
5. **Document last**
   - Update README and architecture notes.

## Separation of Concerns Checklist
- [ ] Component does not own unrelated business constants.
- [ ] Validation logic is not embedded directly in presentational JSX.
- [ ] Scroll/mouse/observer behavior is reusable where applicable.
- [ ] CSS is in dedicated module files, not inline-heavy blocks.
- [ ] Constants are centralized and named clearly.
- [ ] Mobile overrides are isolated in `*.mobile.module.css` files.

## Performance Checklist
- [ ] Passive listeners where supported.
- [ ] `requestAnimationFrame` for frequent visual updates.
- [ ] No unnecessary React state updates during pointer movement.
- [ ] Lazy media loading where appropriate.
- [ ] Avoid duplicate calculations inside render loops.

## Code Hygiene Checklist
- [ ] Remove unused imports/variables/functions.
- [ ] Remove dead selectors and orphan CSS files.
- [ ] Ensure semantic and accessible markup.
- [ ] Keep naming and formatting consistent.
- [ ] Ensure all responsive classes are wired (desktop + mobile style maps in JSX).

## Responsive CSS Convention
- Base/desktop styles live in `*.module.css`.
- Mobile/tablet overrides live in `*.mobile.module.css`.
- Avoid mixing responsive media rules back into desktop files after split.
- Prefer component-level mobile modules for faster debugging and future modifications.

## Documentation Expectations
Always include in README after major refactor:
- Architecture layout
- Refactor summary
- Performance improvements
- Updated development commands

## Deliverable Standard
A change is complete only when:
1. Code is modular and deduplicated.
2. Dead code is removed.
3. Performance concerns are addressed.
4. Documentation is updated.
5. Lint/build pass successfully.
