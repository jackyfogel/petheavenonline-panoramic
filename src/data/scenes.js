// Single hardcoded scene for Phase 1, Step 1
// Matches ARCHITECTURE.md schema

export const scenes = [
  {
    id: 'meadow-dawn',
    order: 1,
    title: 'Morning Meadow',
    background: '/scenes/meadow-dawn.webp',
    backgroundPortrait: null,
    ambientColor: '#e8d5a8',
    capacity: 5,
    slots: [
      { id: 'slot-1', x: 18, y: 72, scale: 1.0 },
      { id: 'slot-2', x: 34, y: 78, scale: 1.05 },
      { id: 'slot-3', x: 50, y: 75, scale: 1.0 },
      { id: 'slot-4', x: 66, y: 79, scale: 0.95 },
      { id: 'slot-5', x: 82, y: 73, scale: 1.0 }
    ],
    slotsPortrait: [
      { id: 'slot-1', x: 25, y: 60, scale: 1.0 },
      { id: 'slot-2', x: 50, y: 68, scale: 1.05 },
      { id: 'slot-3', x: 75, y: 62, scale: 1.0 },
      { id: 'slot-4', x: 35, y: 80, scale: 0.95 },
      { id: 'slot-5', x: 65, y: 82, scale: 1.0 }
    ]
  }
]
