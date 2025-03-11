import * as THREE from "three";
import { BLOOM_LAYER, STAR_MAX, STAR_MIN } from "../config/renderConfig.js";
import { clamp } from "../utils.js";
import { Text } from 'troika-three-text';

let texture;
if (typeof window !== "undefined") {
  texture = new THREE.TextureLoader().load("/sprite120.png");
}

const generateBlueShades = (numShades) => {
  const baseColor = new THREE.Color(58.2 / 255, 1, 1);
  const shades = [];

  for (let i = 0; i < numShades; i++) {
    const brightnessFactor = 0.7 + Math.random() * 0.3;
    shades.push(baseColor.clone().multiplyScalar(brightnessFactor));
  }

  return shades;
};

const blueShades = generateBlueShades(5);

const materials = blueShades.map(
  (color) =>
    new THREE.SpriteMaterial({
      map: texture || null,
      color: color,
      opacity: 0.5,
      transparent: true,
      blending: THREE.NormalBlending,
    })
);

const pageLinks = ["/about", "/committees", "/our-team", "/contact-us", "/events"];
const pageTexts = ["About", "Committees", "Our Team", "Contact Us", "Events"];

export class Star {
  constructor(position, isClickable = false, index = null) {
    this.position = position;
    this.starType = this.generateStarType();
    this.obj = null;
    this.isClickable = isClickable;
    this.index = index;
  }

  generateStarType() {
    return Math.floor(Math.random() * materials.length);
  }

  updateScale(camera) {
    let dist = this.position.distanceTo(camera.position) / 250;
    let starSize = dist * 1.5;
    starSize = clamp(starSize, STAR_MIN, STAR_MAX);
    this.obj.scale.copy(new THREE.Vector3(starSize, starSize, starSize));
  }

  addText(scene) {
    if (this.isClickable && this.index !== null) {
      const textMesh = new Text();
      textMesh.text = pageTexts[this.index];
      textMesh.fontSize = 0.5;
      textMesh.color = 0xffffff;
      textMesh.position.copy(this.position.clone().add(new THREE.Vector3(0, 2, 0)));
      textMesh.sync();
      scene.add(textMesh);

      this.obj.userData = { link: pageLinks[this.index] };
    }
  }

  toThreeObject(scene) {
    if (!texture) return;
    let starMaterial = materials[this.starType].clone();

    if (this.isClickable) {
      starMaterial.color.setRGB(1, 1, 1); // Brighter white for clickable stars
      starMaterial.opacity = 0.8;
    }

    let star = new THREE.Sprite(starMaterial);
    star.layers.set(BLOOM_LAYER);
    star.scale.multiplyScalar(this.isClickable ? 1.2 : 0.8);
    star.position.copy(this.position);

    this.obj = star;
    scene.add(star);
    this.addText(scene);
  }
}

export function handleStarClick(intersects) {
  if (intersects.length > 0) {
    const clickedStar = intersects[0].object;
    if (clickedStar.userData.link) {
      window.location.href = clickedStar.userData.link;
    }
  }
}
