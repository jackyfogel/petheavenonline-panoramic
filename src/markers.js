// Marker rendering and positioning logic

function getCorrectSlots (viewportWidth, viewportHeight) {
  // Simple orientation check: portrait if height > width
  const isPortrait = viewportHeight > viewportWidth
  return isPortrait ? 'slotsPortrait' : 'slots'
}

function renderMarkers (scene) {
  const container = document.getElementById('scene-container')

  // Remove any existing markers (for resize/rerender)
  const existing = container.querySelectorAll('[data-marker]')
  existing.forEach(el => el.remove())

  const { innerWidth: vw, innerHeight: vh } = window
  const slotSetKey = getCorrectSlots(vw, vh)
  const slots = scene[slotSetKey]

  // Create a marker for each slot
  slots.forEach(slot => {
    const marker = document.createElement('div')
    marker.className = 'marker'
    marker.setAttribute('data-marker', slot.id)
    marker.style.left = `${slot.x}%`
    marker.style.top = `${slot.y}%`
    marker.style.transform = `translate(-50%, -50%) scale(${slot.scale})`

    container.appendChild(marker)
  })
}

export function initMarkers (scene) {
  renderMarkers(scene)

  // Re-render markers on resize in case orientation changes
  window.addEventListener('resize', () => renderMarkers(scene))
}
