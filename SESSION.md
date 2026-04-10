# Phase 1, Step 2 — Marker Rendering

## What was done

Rendered 5 placeholder memorial markers on the scenic scene using authored slot data. Markers automatically switch between desktop and portrait slot sets based on viewport orientation.

## Files changed

```
src/
  markers.js            — NEW: marker rendering and positioning
  main.js               — MODIFY: import and init markers
  style.css             — MODIFY: add marker styling
```

## What to test

- `npm run dev` starts and shows the scene with 5 markers placed
- Desktop: markers positioned using `slots` data
- Mobile portrait: markers positioned using `slotsPortrait` data
- Markers scale varies slightly by slot (depth effect)
- Resize from desktop to portrait and back — markers reposition correctly
- No console errors
- Markers feel calm and respectful (not gamey)

## What remains

Phase 1, Step 3+: marker interaction, more scenes, navigation, detail/browse/create pages, backend
