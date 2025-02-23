import {
    BASE_LAYER,
    HAZE_MAX,
    HAZE_MIN,
    HAZE_OPACITY,
  } from "../config/renderConfig.js";
  import { clamp } from "../utils.js";
  import * as THREE from "three";
  
  let hazeSprite = null;
  
  // Ensure texture loading happens only in the browser
  if (typeof window !== "undefined") {
    const hazeTexture = new THREE.TextureLoader().load("/feathered60.png");
    hazeSprite = new THREE.SpriteMaterial({
      map: hazeTexture,
      color: 0x0082ff,
      opacity: HAZE_OPACITY,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
  
  export class Haze {
    constructor(position) {
      this.position = position;
      this.obj = null;
    }
  
    updateScale(camera) {
      if (this.obj) {
        let dist = this.position.distanceTo(camera.position) / 250;
        this.obj.material.opacity = clamp(
          HAZE_OPACITY * Math.pow(dist / 2.5, 2),
          0,
          HAZE_OPACITY
        );
      }
    }
  
    toThreeObject(scene) {
      if (typeof window !== "undefined" && hazeSprite) {
        let haze = new THREE.Sprite(hazeSprite);
        haze.layers.set(BASE_LAYER);
        haze.position.copy(this.position);
        haze.scale.multiplyScalar(
          clamp(HAZE_MAX * Math.random(), HAZE_MIN, HAZE_MAX)
        );
        this.obj = haze;
        scene.add(haze);
      }
    }
  }
  