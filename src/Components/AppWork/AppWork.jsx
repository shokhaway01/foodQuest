'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AppWork() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
  }, [])

  const steps = [
    'Sign up quickly with your email or social login',
    'Browse restaurants and select your favorite meals',
    'Add items to cart and choose payment method',
    'Track your order in real-time and enjoy!'
  ]

  return (
    <section className="bg-white py-24 sm:py-32" id="app-work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div data-aos="fade-right">
          <div className="relative mx-auto w-72 h-auto rounded-xl shadow-xl overflow-hidden">
            <img
              src="./src/assets/Img/1.png"
              alt="Phone with app preview"
              className="w-500 "
            />
          </div>
        </div>

        {/* Right: Steps and Button */}
        <div className="space-y-8" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How Food Quest Works
          </h2>
          <p className="text-gray-600 text-lg">
            We make food delivery simple, smooth, and delightful.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 shadow-sm hover:shadow-md transition-all"
              >
                <span className="absolute -left-5 top-1 text-sm font-semibold text-orange-500">
                  {index + 1}
                </span>
                <p className="text-gray-800 text-base font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#"
              className="inline-block rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 px-6 py-3 text-white text-sm font-bold shadow-md hover:scale-105 hover:brightness-110 transition-all"
            >
              📲 Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
