'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function PhoneModel({ mouse }) {
  const group = useRef()
  const { scene } = useGLTF('/models/ip16promax.glb')

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.current.x * 0.8,
        0.2
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -mouse.current.y * 0.6,
        0.2
      )
    }
  })

  return (
    <group ref={group} scale={[2.5, 2.5, 2.5]} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export default function DownloadSection() {
  const mouse = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)
    setIsMobile(window.innerWidth <= 768)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden" id="download">
      {/* Градиентный фон */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] opacity-70 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 3D или мобильный контент */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 5, 3]} intensity={2} color="#ffffff" />
            <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1.5} />
            <PhoneModel mouse={mouse} />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      )}

      {/* Контент поверх 3D или фон */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-red-400">
          Get the App
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-xl">
          Download FoodQuest now and unlock the flavors of the world.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="rounded-full px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:scale-105 transition"
          >
            🍏 iOS
          </a>
          <a
            href="#"
            className="rounded-full px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold hover:scale-105 transition"
          >
            🤖 Android
          </a>
        </div>
      </div>
    </section>
  )
}
