"use client";
import { useEffect, useRef } from "react";
import { initializeThree } from "@/components/main";
import HeroContent from "./homecontent";

const GalaxyPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initializeThree(); // Initialize Three.js
    }

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <main className="h-screen w-screen bg-black flex items-center justify-center relative">
      {/* Three.js Canvas */}
      <canvas 
        ref={canvasRef} 
        id="canvas" 
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      {/* Hero Content Overlay */}
      <div className="absolute z-10 flex items-center justify-center w-full h-full pointer-events-none">
        <HeroContent />
      </div>
    </main>
  );
};

export default GalaxyPage;
