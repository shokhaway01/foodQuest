'use client'

import { useState } from 'react'
import Navbar from './Navbar/Navbar'

export default function Header() {
  return (
    <div className="bg-white" id="home">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Top gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffb347] via-[#ffcc70] to-[#ff758c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              The best for your Taste.
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Explore the best dishes, order with ease, and enjoy flavors from around the world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
              >
                🍽 Get Started
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#b2f7ef] via-[#ffe082] to-[#ff9a9e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          />
        </div>
      </div>

      {/* Infinite Scrolling Logos Section */}
      <div className="relative overflow-hidden py-12 mt-[0px] bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

        <div className="whitespace-nowrap flex gap-16 animate-scrollLogos">
          {[...Array(4)].flatMap(() => [
            'https://yt3.googleusercontent.com/PQ8lhwdRvg-WAwi5XtsdMyUuokF5oM-gZ1lUf8B58SzbM3th7OLQ3NjzgtJNdaPu98MND9lNuw=s900-c-k-c0x00ffffff-no-rj',
            'https://avatars.mds.yandex.net/i?id=6099f3c990d5750ca9f28bac624fe192483e1790-10018920-images-thumbs&ref=rim&n=33&w=338&h=225',
            'https://smartcastuz.storage.yandexcloud.net/landing/partner/partner-f7b6b76c-474f-48ee-ba41-245bb8ecfbf7.png',
            'https://maxway.uz/images/maxway_cover.png',
            'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png',
          ]).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`partner-logo-${i}`}
              className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes scrollLogos {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scrollLogos {
            animation: scrollLogos 30s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}
