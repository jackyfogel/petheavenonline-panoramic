# PetHeavenOnline — Architecture

A web-based pet memorial site. Visitors browse a curated series of scenic, full-screen backgrounds — like turning the pages of a picture book — each containing a small number of pet memorial markers.

---

## 1. Product Vision

PetHeavenOnline is not a game and not a procedural world. It is a curated, emotional, picture-book experience for memorializing pets. Every scene is hand-authored. Every interaction is restrained and respectful.

---

## 2. Tech Stack

- **Frontend:** Vite + Vanilla JavaScript + CSS
- **Backend (later):** Django + PostgreSQL
- **Media:** AWS S3
- **Hosting:** Render
- **No PixiJS.** No game engine. No frameworks for MVP.

---

## 3. Page Structure

Four pages for MVP. Nothing more.

- `/` — **Home.** Scenic picture-book experience. Emotional heart of the site.
- `/memorial/:slug` — **Memorial detail.** Pet photo, name, dates, story, visitor tokens.
- `/browse` — **Browse Memorials.** Functional search/list for finding a specific pet.
- `/create` — **Create Memorial.** Form to add a new pet memorial. (Built last.)

No about page, no blog, no FAQ in MVP.

---

## 4. Navigation Model

**Primary (scenic):** left/right arrows on the home page move between scenes. Keyboard arrow keys also work. On mobile, swipe gestures. Transition feel: soft slide + subtle fade + gentle parallax. "Turning a memory page," not "swiping a gallery."

**Secondary (utility):** minimal top bar with logo/title and three links — Browse, Create, and a small scene indicator ("Scene 3 of 12").

**Controls must stay restrained.** Arrows are ghostly — low opacity, fade in on hover, fade out after inactivity. No dots, no progress bars, no carousel chrome.

---

## 5. Visual Composition Rules

- **Aspect ratio:** Locked 16:9 on desktop. Letterboxed on mismatched screens.
- **Letterbox fill:** Never harsh black. Filled with `ambientColor` sampled from the scene. May upgrade later to a blurred extension of the background.
- **Background art:** Hand-authored or carefully AI-generated. Lower portion of every scene must be open ground (grass, path, sand) so markers never overlap trees or sky.
- **Marker depth:** Each slot has a `scale` value to fake depth — closer markers slightly larger.

---

## 6. Mobile Strategy

**Authored per-scene portrait slot sets.** Not a single adaptive layout system.

Each scene defines both `slots` (landscape) and `slotsPortrait` (portrait). If a scene's portrait composition needs a different background crop, a separate portrait background variant may be authored later.

This is less elegant technically but guarantees every scene looks intentional on every device. Composition quality beats clever code.

---

## 7. Data Models

Three decoupled concepts: **scene**, **memorial**, **placement**. Implementation stays light — JSON files and simple loader functions. No classes, no managers, no abstractions.

### Scene

```js
{
  id: "meadow-dawn",
  order: 1,
  title: "Morning Meadow",
  background: "/scenes/meadow-dawn.webp",
  backgroundPortrait: null,
  ambientColor: "#e8d5a8",
  capacity: 5,
  slots: [
    { id: "slot-1", x: 18, y: 72, scale: 1.00 },
    { id: "slot-2", x: 34, y: 78, scale: 1.05 },
    { id: "slot-3", x: 50, y: 75, scale: 1.00 },
    { id: "slot-4", x: 66, y: 79, scale: 0.95 },
    { id: "slot-5", x: 82, y: 73, scale: 1.00 }
  ],
  slotsPortrait: [
    { id: "slot-1", x: 25, y: 60, scale: 1.00 },
    { id: "slot-2", x: 50, y: 68, scale: 1.05 },
    { id: "slot-3", x: 75, y: 62, scale: 1.00 },
    { id: "slot-4", x: 35, y: 80, scale: 0.95 },
    { id: "slot-5", x: 65, y: 82, scale: 1.00 }
  ]
}
```

`capacity: 5` is MVP discipline, not a hard rule. Future scenes may have 3 or 7 if composition demands.

### Memorial

```js
{
  id: "mem-7421",
  slug: "buddy-the-golden",
  petName: "Buddy",
  species: "Dog",
  birthDate: "2010-04-12",
  passingDate: "2023-11-08",
  photo: "/memorials/buddy-7421.webp",
  story: "Buddy loved chasing squirrels...",
  ownerName: "Sarah M.",
  createdAt: "2026-04-08"
}
```

### Placement

```js
{
  sceneId: "meadow-dawn",
  slotId: "slot-3",
  memorialId: "mem-7421"
}
```

Memorials persist forever. Scenes may be rearranged, retired, or expanded. Placements link them flexibly without rewriting data.

---

## 8. Empty Slot Handling

Empty slots are **hidden** by default. They do not render at all.

Optional later upgrade: subtle decorative placeholders (a small stone, a flower patch, a tuft of grass) that read as scenery — never as inventory. No "available slot" markers, no plus icons, no transactional UI on the scenic homepage.

---

## 9. Implementation Staircase

Built in this strict order. Each step fully working and shippable before moving on.

1. **Static single scene.** One background, hardcoded, full screen, 16:9 letterboxed with palette fill. No markers. Prove the visual foundation on desktop and mobile.
2. **Marker rendering.** 5 hardcoded markers at percentage positions on that scene. Verify scaling across viewports.
3. **Marker interaction.** Click → placeholder modal with fake pet data. Nail the interaction feel.
4. **Scene navigation.** Add 2–3 more scenes. Build the soft slide + fade + subtle parallax transition. Keyboard + swipe support. Restrained controls.
5. **Data layer.** Move scenes/memorials/placements into JSON files. Simple loader functions. Still no backend.
6. **Memorial detail page.** Real route, real layout, pulls from JSON.
7. **Browse page.** Grid/list of all memorials with search.
8. **Create memorial form.** Frontend only — submits to localStorage or fake endpoint.
9. **Django backend.** Real persistence, user accounts, S3 uploads, Render deploy.
10. **Polish + launch.** Loading states, error handling, SEO, analytics, soft launch.

Stop at step 4 → beautiful demo. Stop at step 8 → working frontend prototype. No wasted work.

---

## 10. Strategic Risks

- **Background art quality is the entire visual identity.** Real budget needed — hired artist or careful Midjourney work.
- **Mobile portrait composition.** Solved by authored per-scene portrait slot sets, but doubles authoring effort per scene.
- **Empty scene problem.** Solved by hiding empty slots; revisit with decorative placeholders later.
- **Discoverability vs emotion tension.** Browse page must be discoverable from the homepage without breaking the mood.
- **Monetization clarity.** Not yet decided — premium scenes, paid creation, featured placement, or donations. Data model is flexible enough to support any. Decision needed before the Create flow is finalized.

---

## 11. Principles

- Composition quality beats clever code.
- Restraint beats chrome.
- Emotional sincerity beats feature count.
- Hand-authored beats procedural.
- Simple JSON beats abstract managers.
- Ship each step before starting the next.
