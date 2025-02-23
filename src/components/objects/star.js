import * as THREE from "three";
import { BLOOM_LAYER, STAR_MAX, STAR_MIN } from "../config/renderConfig.js";
import { clamp } from "../utils.js";

// Load texture only in the browser
let texture;
if (typeof window !== "undefined") {
  texture = new THREE.TextureLoader().load("/sprite120.png");
}

// Generate variations of (58.2, 255, 255) by adjusting brightness
const generateBlueShades = (numShades) => {
  const baseColor = new THREE.Color(58.2 / 255, 1, 1); // Convert RGB to 0-1 range
  const shades = [];

  for (let i = 0; i < numShades; i++) {
    const brightnessFactor = 0.7 + Math.random() * 0.3; // Between 70% and 100% brightness
    shades.push(baseColor.clone().multiplyScalar(brightnessFactor));
  }

  return shades;
};

// Generate 5 different shades of the specified blue
const blueShades = generateBlueShades(5);

const materials = blueShades.map(
  (color) =>
    new THREE.SpriteMaterial({
      map: texture || null, // Prevents errors on the server
      color: color,
      opacity: 0.5, // Reduce opacity
      transparent: true,
      blending: THREE.NormalBlending, // Change from AdditiveBlending
    })
);

export class Star {
  constructor(position) {
    this.position = position;
    this.starType = this.generateStarType();
    this.obj = null;
  }

  generateStarType() {
    return Math.floor(Math.random() * materials.length); // Pick a random blue shade
  }

  updateScale(camera) {
    let dist = this.position.distanceTo(camera.position) / 250;
    let starSize = dist * 1.5; // Adjust size variation
    starSize = clamp(starSize, STAR_MIN, STAR_MAX);
    this.obj.scale.copy(new THREE.Vector3(starSize, starSize, starSize));
  }

  toThreeObject(scene) {
    if (!texture) return; // Ensure texture is loaded before creating the object
    let star = new THREE.Sprite(materials[this.starType]);
    star.layers.set(BLOOM_LAYER);
    star.scale.multiplyScalar(0.8); // Reduce size slightly
    star.position.copy(this.position);

    this.obj = star;
    scene.add(star);
  }
}
