'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TutorialSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
  }, [])

  return (
    <section className="relative bg-white py-24 sm:py-32 px-6 lg:px-8 overflow-hidden" id="tutorial">
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Quick Tutorial</h2>
        <p className="mt-4 text-lg text-gray-600">
          Learn how to make your first order in just a few seconds.
        </p>
      </div>

      <div
        className="relative mt-16 max-w-4xl mx-auto rounded-xl overflow-visible"
        data-aos="zoom-in"
      >
        {/* Gradient Glow Behind Video */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 animate-pulse rounded-full blur-[120px] opacity-50" />

        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-10" />

        {/* YouTube Video */}
        <div className="relative z-10 aspect-video w-full rounded-xl shadow-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Food Quest Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
