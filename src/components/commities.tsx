// 'use client'

// import * as THREE from 'three';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useRef, useState } from 'react';
// import { OrbitControls, Stars, useTexture } from '@react-three/drei';

// const SPACE_TEXTURE = '/textures/space.jpg';
// const PLANETS: { name: string; position: [number, number, number]; size: number }[] = [
//     { name: 'Mars', position: [3, 0, -5] as [number, number, number], size: 0.5 },
//     { name: 'Jupiter', position: [-4, 1, -8] as [number, number, number], size: 1 },
//     { name: 'Saturn', position: [5, -2, -10] as [number, number, number], size: 0.8 },
//   ];
  

// const Ship = () => {
//   const shipRef = useRef<THREE.Mesh>(null);
//   useFrame(() => {
//     if (shipRef.current) {
//       shipRef.current.rotation.y += 0.01;
//     }
//   });
//   return (
//     <mesh ref={shipRef} position={[0, 0, 2]}>
//       <coneGeometry args={[0.2, 0.5, 8]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// };

// const Planet = ({ position, size }: { position: [number, number, number]; size: number }) => {
//   const planetRef = useRef<THREE.Mesh>(null);
//   useFrame(() => {
//     if (planetRef.current) {
//       planetRef.current.rotation.y += 0.005;
//     }
//   });
//   return (
//     <mesh ref={planetRef} position={position}>
//       <sphereGeometry args={[size, 32, 32]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// };

// const Skybox = () => {
//   const texture = useTexture(SPACE_TEXTURE);
//   return (
//     <mesh>
//       <sphereGeometry args={[50, 64, 64]} />
//       <meshBasicMaterial map={texture} side={THREE.BackSide} />
//     </mesh>
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas camera={{ position: [0, 1, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[1, 2, 3]} intensity={1} />
//       {/* <Skybox /> */}
//       <Stars />
//       <Ship />
//       {PLANETS.map((planet, index) => (
//         <Planet key={index} position={planet.position} size={planet.size} />
//       ))}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default function HomePage() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Scene />
//     </div>
//   );
// }
"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// @ts-expect-error: SomeFunction has incompatible types in this case
import { Text } from "troika-three-text";
import spline from "./spline";
import getStarfield from "./getStarfield";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);//raycaster

  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.3);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current?.appendChild(renderer.domElement);

    // Post-processing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
    bloomPass.threshold = 0.002;
    bloomPass.strength = 3.5;
    bloomPass.radius = 0;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Add Starfield
    const stars = getStarfield();
    scene.add(stars);

    // Tube Geometry
    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
    const tubeColor = 0x00ccff;
    const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
    const lineMat = new THREE.LineBasicMaterial({ color: tubeColor });
    const tubeLines = new THREE.LineSegments(edges, lineMat);
    scene.add(tubeLines);

    const hitMat = new THREE.MeshBasicMaterial({
      color: tubeColor,
      transparent: true,
      opacity: 0.0,
      side: THREE.BackSide,
    });
    const tubeHitArea = new THREE.Mesh(tubeGeo, hitMat);
    scene.add(tubeHitArea);

    // Boxes with Labels
    const boxGroup = new THREE.Group();
    scene.add(boxGroup);

    const boxLabels = [
      "Technical", "Events", "Public Relations & Sponsorship",
      "Design & VFX", "Editorial", "Corporate Social Responsibility", "Operations"
    ];
    const numBoxes = 20;
    const size = 0.1;
    const boxGeo = new THREE.BoxGeometry(size, size, size);

    for (let i = 0; i < numBoxes; i++) {
      const p = (i / numBoxes + Math.random() * 0.1) % 1;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      const color = new THREE.Color().setHSL(0.7 + p, 1, 0.5);
      const boxMat = new THREE.MeshBasicMaterial({ color });
      const hitBox = new THREE.Mesh(boxGeo, boxMat);
      hitBox.name = "box";

      pos.x += Math.random() - 0.4;
      pos.z += Math.random() - 0.4;
      hitBox.position.copy(pos);

      const rote = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      hitBox.rotation.set(rote.x, rote.y, rote.z);

      const boxEdges = new THREE.EdgesGeometry(boxGeo);
      const boxLineMat = new THREE.LineBasicMaterial({ color });
      const boxLines = new THREE.LineSegments(boxEdges, boxLineMat);
      boxLines.position.copy(pos);
      boxLines.rotation.set(rote.x, rote.y, rote.z);

      // Add Labels
      const text = new Text();
      text.text = boxLabels[i % boxLabels.length];
      text.fontSize = 0.3;
      text.color = "white";
      text.position.set(pos.x, pos.y + 0.15, pos.z);
      text.lookAt(camera.position);

      hitBox.userData.box = boxLines;
      boxGroup.add(hitBox);
      scene.add(boxLines);
      scene.add(text);
    }

    // Mouse Crosshairs
    const mousePos = new THREE.Vector2();
    const crosshairs = new THREE.Group();
    crosshairs.position.z = -1;
    camera.add(crosshairs);

    const crossMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const lineGeo = new THREE.BufferGeometry();
    const lineVerts = new Float32Array([0, 0.05, 0, 0, 0.02, 0]);
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));

    for (let i = 0; i < 4; i++) {
      const line = new THREE.Line(lineGeo, crossMat);
      line.rotation.z = i * 0.5 * Math.PI;
      crosshairs.add(line);
    }

    // const raycaster = new THREE.Raycaster();
    // let lasers: THREE.Mesh[] = [];

    // Update Camera Movement
    function updateCamera(t: number) {
      const time = t * 0.1;
      const looptime = 10 * 1000;
      const p = (time % looptime) / looptime;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
      camera.position.copy(pos);
      camera.lookAt(lookAt);
    }

    // Animation Loop
    function animate(t = 0) {
      requestAnimationFrame(animate);
      updateCamera(t);
      crosshairs.position.set(mousePos.x, mousePos.y, -1);
      composer.render();
    }
    animate();

    // Handle Mouse Movement
    window.addEventListener("mousemove", (evt) => {
      mousePos.set(
        ((evt.clientX / w) * 2 - 1) * (w / h) * 0.75,
        (-1 * (evt.clientY / h) * 2 + 1) * 0.75
      );
    });

    // Handle Resize
    window.addEventListener("resize", () => {
      w = window.innerWidth;
      h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
};

export default ThreeScene;
