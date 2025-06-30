'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const teamMembers = [
  {
    name: 'Shokh Karímov',
    role: 'Frontend Developer',
    image: 'https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/0PA7XhR7sfm6T9zPFnuaxpVxCqLgmtglx4PtZpu4Zos/1282c2e35ff5b9fd4d851386ca174f91/Kr-20180509-small.jpg',
    bio: 'Focused on user experience and animation-driven interfaces.',
    socials: {
      instagram: 'https://instagram.com/shokhaway',
      linkedin: 'https://linkedin.com/in/shokhaway',
    },
  },
  {
    name: 'Хабиб',
    role: 'UI/UX Designer',
    image: 'https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/0PA7XhR7sfm6T9zPFnuaxpVxCqLgmtglx4PtZpu4Zos/1282c2e35ff5b9fd4d851386ca174f91/Kr-20180509-small.jpg',
    bio: 'Designs elegant and modern UI experiences.',
    socials: {
      twitter: 'https://twitter.com/janedoe',
    },
  },
  {
    name: 'Boburjon Allayorov',
    role: 'Backend Engineer',
    image: 'https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/0PA7XhR7sfm6T9zPFnuaxpVxCqLgmtglx4PtZpu4Zos/1282c2e35ff5b9fd4d851386ca174f91/Kr-20180509-small.jpg',
    bio: 'Handles the core logic and performance backend.',
    socials: {
      github: 'https://github.com/johnsmith',
    },
  },
]

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
  }, [])

  return (
    <section className="py-24 bg-white" id="team">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Meet the Team</h2>
        <p className="mt-4 text-lg text-gray-600">The heroes behind FoodQuest</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="relative group bg-white shadow-xl rounded-3xl overflow-hidden p-6 transition-all duration-300 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {Object.entries(member.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:scale-110 transition-transform"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <h3 className="mt-6 text-xl font-extrabold text-center text-gray-900">
              {member.name}
            </h3>
            <p className="mt-2 text-sm text-center text-gray-600">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
