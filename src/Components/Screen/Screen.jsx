'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const appScreens = [
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6260db37565dc9af7c6f8668f04594e835581d75-5232923-images-thumbs&n=13',
]

export default function AppScreensSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
  }, [])

  return (
    <section
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      id="screens"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">App Screens</h2>
        <p className="mt-4 text-lg text-gray-600">
          Experience the visual journey through our sleek mobile interface.
        </p>
      </div>

      {/* Glowing animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f9c5d1] via-[#fbc2eb] to-[#a6c1ee] animate-[gradient_10s_ease-in-out_infinite] blur-2xl opacity-40" />

      {/* Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollX {
          animation: scrollHorizontal 30s linear infinite;
        }
      `}</style>

      {/* Screens Horizontal Scroll */}
      <div className="relative mt-20 overflow-hidden">
        <div className="flex gap-8 animate-scrollX w-max">
          {[...appScreens, ...appScreens].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`App screen ${idx + 1}`}
              className="w-48 h-auto rounded-2xl shadow-xl object-cover border border-white"
            />
          ))}
        </div>
      </div>
    </section>
  )
}