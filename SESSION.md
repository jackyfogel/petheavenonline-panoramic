# Phase 1, Step 1 — Scenic Homepage Foundation

## What was done

Built static scenic homepage foundation with 16:9 composition and intentional letterboxing.

## Files changed

```
index.html              — Root HTML shell
package.json            — Vite + no dependencies
src/
  main.js               — Entry point
  scene.js              — 16:9 sizing logic
  style.css             — Layout + letterbox fill
  data/scenes.js        — Hardcoded scene object
```

## What to test

- `npm run dev` starts and shows the scene full-screen
- Desktop: scene centered, letterbox fill warm (#e8d5a8)
- Mobile portrait: scene centered vertically
- Resize works correctly
- No console errors

## What remains

Phase 1, Step 2+: navigation, markers, more scenes, detail/browse/create pages, backend
