'use client'

import Image from 'next/image'
import { Atom, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewYearResolution() {
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
      className="relative py-25 pt-10 bg-white"
    >
      <motion.div variants={container} className="px-4 md:px-20 mx-auto">
        <motion.div variants={container} className="flex flex-col md:flex-row md:min-h-[600px]">
          {/* Image */}
          <motion.div variants={item} className="w-full md:w-1/2 relative group overflow-hidden rounded-lg md:rounded-[70px] h-64 md:h-auto">
            <Image 
              src="/content.jpg" 
              alt="Healthy lifestyle" 
              layout="fill"
              objectFit="cover"
              className="transition-transform filter contrast-[1.2] brightness-[1.1] duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-center justify-center p-8">
              <p className="text-white text-xl md:text-2xl font-sans text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                &quot;This year, invest in yourself. A healthy diet is a gift you give to your future.&quot;
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={item}
            className="w-full md:w-1/2 flex items-center bg-cover bg-center mt-8 md:mt-0"
            style={{ backgroundImage: "url('/content-bg.jpg')" }}
          >
            <motion.div variants={container} className="p-8 md:p-16 text-left md:text-center">
              <motion.h2 variants={item} className="text-4xl md:text-5xl font-sans text-gray-800 mb-4 leading-tight">
                <span className="text-green-600 font-bold block md:inline">Transform</span> your life in the next
                <span className="block text-green-600 font-bold">90 days</span>
              </motion.h2>
              <motion.p variants={item} className="text-gray-600 mb-6 md:mb-10 max-w-xl md:mx-auto">
                This New Year, make a resolution that lasts. Our expert-guided programs are designed to help you build healthy habits, transform your body, and reclaim your energy. Commit to 90 days and discover a stronger, healthier you.
              </motion.p>
              <motion.div variants={container} className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                <motion.div variants={item} className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                      <Atom size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">Personalized Nutrition Plan</h3>
                  </div>
                  <div className="w-16 h-0.5 bg-green-600 mb-4"></div>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Receive a tailored diet plan that fits your lifestyle and goals. No more guesswork, just delicious, healthy meals.
                  </p>
                </motion.div>
                <motion.div variants={item} className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                      <Dumbbell size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">Personalized Exercise Plan</h3>
                  </div>
                  <div className="w-16 h-0.5 bg-green-600 mb-4"></div>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Get a workout regimen designed for your fitness level and objectives, ensuring you get the most out of every session.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
