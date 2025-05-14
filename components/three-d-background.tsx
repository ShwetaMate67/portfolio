"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMobile } from "@/hooks/use-mobile"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

export function ThreeDBackground() {
  const isMobile = useMobile()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleField count={isMobile ? 100 : 200} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  )
}

function ParticleField({ count }) {
  const mesh = useRef()
  const particles = useRef([])

  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 10 - 5],
      velocity: [(Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01],
      size: Math.random() * 0.05 + 0.02,
      color: [
        0.5 + Math.random() * 0.5, // More red
        0.2 + Math.random() * 0.3, // Less green
        0.8 + Math.random() * 0.2, // More blue
      ],
    }))
  }, [count])

  // Animation loop
  useFrame(({ clock }) => {
    if (!mesh.current) return

    const positions = mesh.current.geometry.attributes.position.array
    const sizes = mesh.current.geometry.attributes.size.array
    const colors = mesh.current.geometry.attributes.color.array

    particles.current.forEach((particle, i) => {
      // Add some wave motion
      const time = clock.getElapsedTime()
      particle.position[1] += Math.sin(time * 0.5 + i * 0.1) * 0.002

      // Update position
      particle.position[0] += particle.velocity[0]
      particle.position[1] += particle.velocity[1]
      particle.position[2] += particle.velocity[2]

      // Boundary check
      for (let j = 0; j < 3; j++) {
        if (Math.abs(particle.position[j]) > 10) {
          particle.velocity[j] *= -1
        }
      }

      // Update buffer
      const idx = i * 3
      positions[idx] = particle.position[0]
      positions[idx + 1] = particle.position[1]
      positions[idx + 2] = particle.position[2]
      sizes[i] = particle.size * (1 + Math.sin(time + i) * 0.2) // Pulsating size

      // Update colors
      colors[idx] = particle.color[0]
      colors[idx + 1] = particle.color[1]
      colors[idx + 2] = particle.color[2]
    })

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.geometry.attributes.size.needsUpdate = true
    mesh.current.geometry.attributes.color.needsUpdate = true

    // Rotate the entire field
    mesh.current.rotation.x += 0.0005
    mesh.current.rotation.y += 0.001
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={new Float32Array(count)} itemSize={1} />
        <bufferAttribute attach="attributes-color" count={count} array={new Float32Array(count * 3)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation={true} vertexColors transparent opacity={0.6} depthWrite={false} />
    </points>
  )
}
