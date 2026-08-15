"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import StarsCanvas from "./preloder";

export default function FloatingImage() {
  const controls = useAnimation();
  const [showPreloader, setShowPreloader] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const pathname = usePathname();

  // Effect 1: On every route change, show the preloader and bump the key
  useEffect(() => {
    setShowPreloader(true);
    setAnimKey((prev) => prev + 1);
  }, [pathname]);

  // Effect 2: Run the animation AFTER the preloader elements are mounted
  useEffect(() => {
    if (!showPreloader) return;

    controls.stop();
    controls.set({ x: "-100vw", scale: 1 });

    const runAnim = async () => {
      await controls.start({ x: 0, scale: 1, transition: { duration: 3, ease: "easeInOut" } });
      await controls.start({ scale: 900, transition: { duration: 3, ease: "easeInOut" } });
    };
    runAnim();

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [animKey, controls, showPreloader]);

  if (!showPreloader) return null;

  return (
    <motion.div
      key={animKey}
      className="fixed inset-0 flex justify-center items-center bg-black z-[50]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <StarsCanvas />
      <motion.img
        src="/open-logo.jpg"
        alt="Floating Image"
        className="w-72 h-64 rounded-lg shadow-lg"
        initial={{ x: "-100vw", scale: 1 }}
        animate={controls}
      />
    </motion.div>
  );
}

