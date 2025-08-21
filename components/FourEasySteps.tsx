'use client'

import { FileText, Calendar, HeartPulse, Smile } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const steps = [
  {
    icon: <FileText size={48} />,
    title: 'Contact Us',
    description: 'Tell us your goals, and we\'ll create a plan to get you there.',
  },
  {
    icon: <Calendar size={48} />,
    title: 'Appointment',
    description: 'Book a consultation with our expert dietitians at your convenience.',
  },
  {
    icon: <HeartPulse size={48} />,
    title: 'Analysis',
    description: 'Receive a detailed analysis of your health to create a personalized diet.',
  },
  {
    icon: <Smile size={48} />,
    title: 'Happy Life',
    description: 'Follow your custom plan to achieve a happier, healthier lifestyle.',
  },
]

export default function FourEasySteps() {
  useEffect(() => {
    const img = new window.Image()
    img.src = '/mainbg2.jpg'
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ['-100%', '100%'])
  return (
    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-16 md:py-32 min-h-screen md:h-screen text-white overflow-hidden"
    >
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ y }}>
        <Image src="/mainbg2.jpg" alt="Background" fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div variants={container} className="relative container mx-auto px-4 text-center">
        <motion.h2 variants={item} className="text-3xl md:text-6xl font-sans font-bold mb-8 md:mb-12">
          Solution In 4 Easy Steps
          <span className="block font-normal">Successful life</span>
        </motion.h2>
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-16">
          {steps.map((step, index) => (
            <motion.div
              variants={item}
              key={index}
              className="group bg-[#222529] p-6 md:p-8 py-8 md:py-12 rounded-lg flex flex-col items-center transform hover:scale-105 hover:bg-green-600 transition-all duration-300"
            >
              <div className="mb-6 text-white">{step.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-green-500 group-hover:text-white transition-colors duration-300 mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-100 transition-colors duration-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
