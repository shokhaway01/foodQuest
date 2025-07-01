'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "Nimaga Shohjaxon, eng zo'ri?",
    answer: "Chunki u shoh.",
  },
  {
    question: "2+2?",
    answer: "Shoh.",
  },
  {
    question: "Shoh nima qilolmaydi?",
    answer: "Nobody knows.",
  },
  {
    question: "Why don't you see elephants hiding in trees?",
    answer: "Because they're so good at it.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the 'P' is silent.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He couldn’t see himself doing it.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-24 px-6 sm:px-10 md:px-16" id='faq'>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-orange-500 transition focus:outline-none"
              >
                <span className="glow-text">{item.question}</span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-orange-500"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-600 text-base leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
