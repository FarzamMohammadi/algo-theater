# Vanilla JS for Algorithm Visualizations

**Date:** 2025-12-30
**Status:** Accepted

## Decision

Use vanilla JavaScript with Canvas API for algorithm visualizations instead of Svelte or other frameworks.

## Context

- Building 230+ algorithm visualizations
- Need full control over rendering for complex visualizations (trees, graphs, arrays)
- Foundation-first approach - structure over flash
- Vanilla implementation works perfectly with shared Astro components

## Alternatives

- **Svelte:** Reactive, declarative → Styling conflicts with layout, framework lock-in
- **React:** Popular ecosystem → Heavy for static site, unnecessary complexity
- **Vanilla JS + Canvas:** Full control, web standards → **Chosen**

## Consequences

✅ Full rendering control via Canvas API
✅ Works seamlessly with Astro components (ControlPanel, ExpandableTabs)
✅ TypeScript class pattern scales to 230+ algorithms
✅ No framework dependency or learning curve
⚠️ More manual state management (mitigated by TypeScript types)
