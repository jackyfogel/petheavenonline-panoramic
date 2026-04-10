// Entry point for PetHeavenOnline homepage

import { initScene } from './scene.js'
import { scenes } from './data/scenes.js'

// Load the first scene
const currentScene = scenes[0]

// Initialize the scenic homepage
initScene(currentScene)
