// Scene sizing and 16:9 composition logic

const ASPECT_RATIO = 16 / 9

function calculateSceneSize (viewportWidth, viewportHeight) {
  // Calculate the largest 16:9 rectangle that fits in the viewport
  const viewportAspect = viewportWidth / viewportHeight

  let sceneWidth, sceneHeight

  if (viewportAspect > ASPECT_RATIO) {
    // Viewport is wider than 16:9 — pillarbox left/right
    sceneHeight = viewportHeight
    sceneWidth = sceneHeight * ASPECT_RATIO
  } else {
    // Viewport is taller than 16:9 — letterbox top/bottom
    sceneWidth = viewportWidth
    sceneHeight = sceneWidth / ASPECT_RATIO
  }

  return { width: sceneWidth, height: sceneHeight }
}

export function initScene (scene) {
  const container = document.getElementById('scene-container')

  // Apply scene's ambient color to the letterbox fill
  document.body.style.backgroundColor = scene.ambientColor

  function resizeScene () {
    const { innerWidth: vw, innerHeight: vh } = window
    const { width, height } = calculateSceneSize(vw, vh)

    container.style.width = `${width}px`
    container.style.height = `${height}px`
  }

  // Initial size
  resizeScene()

  // Resize on window change
  window.addEventListener('resize', resizeScene)
}
