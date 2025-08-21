'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const galleryItems = [
  { src: '/meal1.jpg', alt: 'Nature Foods for Health', caption: 'Nature Foods for Health' },
  { src: '/meal2.jpg', alt: 'Expert Health Advisor', caption: 'Expert Health Advisor' },
  { src: '/content.jpg', alt: 'Nature Foods for Health', caption: 'Nature Foods for Health' },
  { src: '/meal3.jpg', alt: 'Drink with Salads', caption: 'Drink with Salads' },
]

export default function HealthAdviser() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 lg:py-20 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Mobile heading */}
        <motion.h2 variants={item} className="md:hidden text-4xl font-bold mb-8 text-center leading-tight">
          Why People need a
          <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Health Adviser</span>
        </motion.h2>
        
        <motion.div variants={container} className="flex flex-col md:flex-row items-center mb-12 md:mb-20">
          <motion.div variants={item} className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <div className="relative h-64 md:h-[500px] rounded-lg md:rounded-3xl overflow-hidden">
              <Image src="/advisor.jpg" alt="Health Adviser" layout="fill" objectFit="cover" />
            </div>
          </motion.div>
          <motion.div variants={item} className="w-full md:w-1/2">
            <motion.h2 variants={item} className="hidden md:block text-7xl lg:text-6xl font-bold font-sans mb-8 leading-tight">
              Why People need a
              <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent drop-shadow-sm">Health Adviser</span>
            </motion.h2>
            <motion.div variants={container} className="text-gray-600 text-lg mb-8 space-y-6">
              <motion.p variants={item}>
                As the New Year approaches, it&apos;s the perfect time to commit to a healthier, more vibrant you. Many of us make resolutions to improve our well-being, but turning those goals into lasting habits can be a challenge. That&apos;s where professional guidance makes all the difference. Instead of navigating confusing diets and conflicting advice alone, you can have a dedicated partner on your journey to wellness.
              </motion.p>

              <motion.p variants={item}>
                Here&apos;s how I can support your New Year&apos;s resolution:
              </motion.p>
              <motion.ul variants={container} className="space-y-4 pt-2">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-green-600 mt-1 mr-3 animate-pulse">
                    <CheckCircle size={20} />
                  </span>
                  <span>
                    <strong>Personalized Nutrition Plans:</strong> Tailored meal guides that are delicious, easy to follow, and designed specifically for your body&apos;s needs.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-green-600 mt-1 mr-3 animate-pulse">
                    <CheckCircle size={20} />
                  </span>
                  <span>
                    <strong>One-on-One Coaching:</strong> Regular check-ins and unwavering support to keep you motivated, accountable, and on track.
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={container} className="hidden md:grid grid-cols-1 lg:-mt-20 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {galleryItems.map((itemData, index) => (
            <motion.div variants={item} key={index} className="text-center group">
              <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={itemData.src}
                  alt={itemData.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800">{itemData.caption}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}