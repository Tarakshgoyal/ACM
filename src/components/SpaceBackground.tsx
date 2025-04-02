"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const particlesRef = useRef<THREE.Points>()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    sceneRef.current = new THREE.Scene()
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    rendererRef.current = new THREE.WebGLRenderer({ alpha: true })
    rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(rendererRef.current.domElement)

    // Create stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 2000
    const positions = new Float32Array(starsCount * 3)

    for (let i = 0; i < starsCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000
      positions[i + 1] = (Math.random() - 0.5) * 2000
      positions[i + 2] = (Math.random() - 0.5) * 2000
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
    })

    particlesRef.current = new THREE.Points(starsGeometry, starsMaterial)
    sceneRef.current.add(particlesRef.current)

    // Camera position
    cameraRef.current.position.z = 500

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0002
        particlesRef.current.rotation.y += 0.0002
      }

      rendererRef.current?.render(sceneRef.current!, cameraRef.current!)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(rendererRef.current!.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 -z-10" />
}

export default SpaceBackground

