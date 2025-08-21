'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    image: '/meal1.jpg',
    title: 'Meditation Energy Healing',
    description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna Sed...',
  },
  {
    image: '/meal2.jpg',
    title: 'Health & Wellness Camps',
    description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna Sed...',
  },
  {
    image: '/meal3.jpg',
    title: 'Premium Wellness Club',
    description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna Sed...',
  },
  {
    image: '/apple1.jpg',
    title: 'Nutritional Guidance',
    description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna Sed...',
  },
]

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
      className="py-20 bg-white"
    >
      <div className=" mx-auto px-20">
        <motion.div variants={container} className="flex justify-between items-center mb-12">
          <motion.h2 variants={item} className="text-6xl font-serif">
            You&apos;ll find here
            <span className="block text-green-600">How we do?</span>
          </motion.h2>
          <motion.button variants={item} className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
            Book an Appointment
          </motion.button>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden max-w-7xl mx-auto" ref={emblaRef}>
            <motion.div variants={container} className="flex -ml-4">
              {services.map((service, index) => (
                <motion.div variants={item} className="flex-grow-0 rounded-lg flex-shrink-0 w-full md:w-1/3 pl-4" key={index}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="relative h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
