"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import StarsCanvas from "./preloder";

export default function FloatingImage() {
  const controls = useAnimation();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    async function animateImage() {
      await controls.start({ x: 0, scale: 1, transition: { duration: 3, ease: "easeInOut" } });
      await controls.start({ scale: 900, transition: { duration: 3, ease: "easeInOut" } });
    }
    animateImage();

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [controls]);

  if (!showPreloader) return null;

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black z-[50]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <StarsCanvas />
      <motion.img
        src="/acmlogoo.png"
        alt="Floating Image"
        className="w-42 h-32 rounded-lg shadow-lg"
        initial={{ x: "-100vw", scale: 1 }}
        animate={controls}
      />
    </motion.div>
  );
}
