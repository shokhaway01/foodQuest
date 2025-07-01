'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TELEGRAM_BOT_TOKEN = '7951439199:AAHhLxFjlxcNi-0c9AxuEu_HHoElbqVosl0'
const TELEGRAM_CHAT_ID = '661869887'

const testimonials = [
  {
    id: 1,
    name: 'Aisha Karimova',
    role: 'Product Manager',
    message: 'FoodQuest has transformed the way I order lunch during workdays!',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    id: 2,
    name: 'Tomás Álvarez',
    role: 'Chef & Restaurant Owner',
    message: 'I partnered with FoodQuest and it skyrocketed our reach.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Leila Orozbaeva',
    role: 'UX Designer',
    message: 'From aesthetics to performance, FoodQuest nails it.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
]

export default function Feedback() {
  const [userMessage, setUserMessage] = useState('')
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = `Господин, у нас новый Отзыв!:\n\n👤 Имя: ${userName}\n💼 Профессия: ${userRole}\n💬 Отзыв: ${userMessage}`

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      })

      setUserMessage('')
      setUserName('')
      setUserRole('')
      setShowSuccess(true)

      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      alert('Ошибка при отправке сообщения. Попробуйте снова.')
    }
  }

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffd6e0] via-[#f3e5f5] to-[#b2ebf2] blur-2xl opacity-50 animate-[gradient_10s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-3xl text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">What Our Users Say</h2>
        <p className="mt-4 text-lg text-gray-600">Join hundreds of happy customers who love FoodQuest.</p>
      </div>

      {/* Testimonials carousel */}
      <div className="mt-20 overflow-hidden">
        <div className="flex gap-8 w-max animate-scrollX px-6" id='feedback'>
          {[...testimonials, ...testimonials].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] max-w-xs p-6 bg-white bg-opacity-60 rounded-3xl shadow-xl border border-white hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-pink-300" />
                <div>
                  <h4 className="text-lg font-semibold text-pink-600">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-800 text-sm leading-relaxed">“{review.message}”</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feedback form */}
      <div className="mt-24 max-w-xl mx-auto px-4" >
        <h3 className="text-2xl font-bold text-gray-800 text-center">Leave Your Feedback</h3>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Your Role / Profession"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 px-6 py-2 text-white font-bold shadow-md hover:scale-105 hover:brightness-110 transition"
          >
            🚀 Submit Feedback
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
            ✅ Your feedback was sent!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style jsx>{`
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollX {
          animation: scrollX 40s linear infinite;
        }

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
      `}</style>
    </section>
  )
}
