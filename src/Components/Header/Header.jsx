'use client'

import { useState } from 'react'
import Navbar from './Navbar/Navbar'


export default function Header() {

  return (
    <div className="bg-white" id='home'>
      {/* <Navbar/> */}

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8" >
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the contry's most innovative companies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://yt3.googleusercontent.com/PQ8lhwdRvg-WAwi5XtsdMyUuokF5oM-gZ1lUf8B58SzbM3th7OLQ3NjzgtJNdaPu98MND9lNuw=s900-c-k-c0x00ffffff-no-rj"
            width={258}
            height={148}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://avatars.mds.yandex.net/i?id=6099f3c990d5750ca9f28bac624fe192483e1790-10018920-images-thumbs&ref=rim&n=33&w=338&h=225"
            width={258}
            height={148}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://smartcastuz.storage.yandexcloud.net/landing/partner/partner-f7b6b76c-474f-48ee-ba41-245bb8ecfbf7.png"
            width={258}
            height={148}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://maxway.uz/images/maxway_cover.png"
            width={258}
            height={148}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
            width={258}
            height={148}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>

    </div>
  )
}
