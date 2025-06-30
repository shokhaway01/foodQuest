'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const teamMembers = [
  {
    name: 'Sofia Karimova',
    role: 'Frontend Developer',
    img: 'https://randomuser.me/api/portraits/women/77.jpg',
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jahongir Saidov',
    role: 'Backend Developer',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Nilufar Mamatova',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/48.jpg',
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Timur Odilov',
    role: 'Project Manager',
    img: 'https://randomuser.me/api/portraits/men/24.jpg',
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const Card = ({ member, index }) => (
    <motion.div
      className="relative group bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-2xl transition w-full max-w-xs mx-auto"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-60 object-cover rounded-xl border-4 border-pink-300"
      />
      <h3 className="mt-4 text-xl font-bold text-center text-pink-600">{member.name}</h3>
      <p className="text-center text-gray-600">{member.role}</p>

      <div className="absolute inset-0 bg-white/90 rounded-2xl backdrop-blur-sm flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={member.socials.github} target="_blank" className="text-gray-700 hover:text-black text-xl">
          <FaGithub />
        </a>
        <a href={member.socials.linkedin} target="_blank" className="text-blue-600 hover:text-blue-800 text-xl">
          <FaLinkedin />
        </a>
        <a href={member.socials.twitter} target="_blank" className="text-sky-500 hover:text-sky-700 text-xl">
          <FaTwitter />
        </a>
      </div>
    </motion.div>
  )

  return (
    <section id="team" className="relative py-24 bg-gradient-to-br from-[#fefcea] via-[#f1dae4] to-[#ffd9ec] overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
        <p className="mt-2 text-gray-700">Our brilliant minds behind FoodQuest</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {isMobile ? (
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            modules={[Autoplay, Pagination]}
          >
            {teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <Card member={member} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, i) => (
              <Card key={i} member={member} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
