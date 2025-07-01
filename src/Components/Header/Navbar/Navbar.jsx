'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#features' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#feedback' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm" data-aos="fade-down">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-2xl font-bold text-orange-600">
            Food <span className="text-green-600">Quest</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#download"
            className="rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 px-4 py-2 text-sm font-bold text-white shadow-md hover:scale-105 hover:brightness-110 transition-all duration-300"
          >
            🍓 Download App
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
  <AnimatePresence>
    <motion.div
      key="mobileMenu"
      className="fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Анимированный градиентный фон */}
      <div className="absolute inset-0 -z-10 animate-gradientMove bg-gradient-to-br from-[#ffe29f] via-[#ffa99f] to-[#ff719a] opacity-80 blur-xl" />

      {/* Панель меню */}
      <motion.div
        className="h-full w-full p-6 backdrop-blur-2xl bg-white/80 flex flex-col justify-between"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        {/* Верхняя часть */}
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5 text-2xl font-bold text-orange-600">
            Food <span className="text-green-600">Quest</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-orange-500 transition"
          >
            <span className="sr-only">Close menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Контент */}
        <div className="mt-8 flex-1 flex flex-col justify-between bg-white p-10">
          <div className="space-y-4">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-lg font-semibold text-gray-900 rounded-lg px-4 py-3 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#"
              className="w-full block shadow-2xl text-center rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 px-6 py-3 text-lg font-bold text-white shadow-md hover:scale-105 hover:brightness-110 transition-all duration-300"
            >
              🍓 Download App
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Ключевые кадры градиента */}
      <style jsx>{`
        @keyframes gradientMove {
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
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 10s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  </AnimatePresence>
)}
    </header>
  )
}
