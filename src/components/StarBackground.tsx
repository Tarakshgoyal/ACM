"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three"; // Import THREE for type reference

function StarField() {
  const ref = useRef<THREE.Points>(null); // Corrected ref type
  const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function StarBackground() {
  return (
    <div className="fixed w-full h-full z-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}
