'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Healthy and delicious foods.',
    answer:
      'We craft meal plans that are both nutritious and tasty, so you never feel deprived while hitting your goals.',
  },
  {
    question: 'A natural way of improving your healthy life.',
    answer:
      'Our approach emphasizes whole foods, mindful eating, and sustainable lifestyle changes for long-term results.',
  },
  {
    question: 'Health revolution as a health coach.',
    answer:
      'Work 1:1 with certified nutrition experts to build a plan tailored to your unique needs and schedule.',
  },
  {
    question: 'Ready to do life, self care & business.',
    answer:
      'Balance your health with work and life through practical routines, flexible plans, and ongoing support.',
  },
]

export default function AppointmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  useEffect(() => {
    const img = new window.Image()
    img.src = '/faq.jpg'
  }, [])

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
      className="relative py-16 md:py-20"
      aria-label="Appointment and FAQ section"
    >
      {/* Background image */}
      <Image
        src="/faq.jpg"
        alt="FAQ Background"
        fill
        className="object-cover filter blur-[2px] -z-10"
        priority
      />
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-green-900/20" />

      <div className="mx-auto px-4 md:px-8 lg:px-12">
        <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Appointment Card */}
          <motion.div variants={item} className="backdrop-blur-[2px] bg-white/85 rounded-lg shadow-2xl border border-green-100">
            <div className="p-6 md:p-8">
              <motion.h2 variants={item} className="text-3xl md:text-4xl font-serif text-green-700">Make an Appointment</motion.h2>
              <motion.div variants={item} className="h-1 w-14 bg-green-600 mt-3 mb-6" />
              <motion.p variants={item} className="text-gray-700 font-medium mb-6">
                Office Hours : 07:30 and 19:00 Mon to Sat, Sun - Holiday
              </motion.p>

              <motion.form
                variants={container}
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
                aria-label="Appointment form"
              >
                <motion.input
                  variants={item}
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <motion.input
                  variants={item}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.select
                    variants={item}
                    className="w-full rounded-md border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Type of Service
                    </option>
                    <option>Weight Management</option>
                    <option>Diabetes Care</option>
                    <option>Sports Nutrition</option>
                    <option>General Wellness</option>
                  </motion.select>

                  <motion.input
                    variants={item}
                    type="date"
                    className="w-full rounded-md border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <motion.input
                  variants={item}
                  type="text"
                  placeholder="Name of Person"
                  className="w-full rounded-md border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  required
                />

                <motion.button
                  variants={item}
                  type="submit"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors"
                >
                  Fix an appointment
                </motion.button>
              </motion.form>
            </div>
          </motion.div>

          {/* FAQ Card */}
          <motion.div variants={item} className=" bg-transparent rounded-lg">
            <div className="p-6 md:p-8">
              <motion.h3 variants={item} className="text-3xl md:text-4xl font-serif text-white drop-shadow-sm">FAQ&apos;s</motion.h3>
              <motion.div variants={item} className="h-1 w-14 bg-green-600 mt-3 mb-6" />

              {/* Active/featured item */}
              <motion.div variants={container} className="rounded-md mb-6">
                <motion.button
                  variants={item}
                  className="w-full flex items-center justify-between px-5 py-4 bg-black text-white rounded-md shadow-md"
                  aria-expanded={openIndex === 0}
                  onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
                >
                  <span className="font-semibold tracking-wide">Create Your Healthier Lives.</span>
                  <span className="text-xl">{openIndex === 0 ? '▴' : '▾'}</span>
                </motion.button>
                {openIndex === 0 && (
                  <motion.div variants={container} className="px-2 sm:px-4">
                    <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start py-5">
                      <motion.p variants={item} className="sm:col-span-2 text-white text-base md:text-lg leading-relaxed">
                        Donec vitae sapien ut libero venenatis faucibus. Etiam sit amet orci eget eros faucibus
                        tin cidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                      </motion.p>
                      <motion.div variants={item} className="justify-self-start sm:justify-self-end w-44 h-28 relative rounded-md shadow-md overflow-hidden">
                        <Image
                          src="/content.jpg"
                          alt="Nutritionist working"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {/* List */}
              <motion.div variants={container} className="space-y-4">
                {faqs.map((faqItem, i) => (
                  <motion.div
                    variants={item}
                    key={faqItem.question}
                    className="bg-white rounded-md border border-gray-200 shadow-md"
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      aria-expanded={openIndex === i + 1}
                      onClick={() => setOpenIndex(openIndex === i + 1 ? -1 : i + 1)}
                    >
                      <span className="font-serif text-lg text-gray-800">{faqItem.question}</span>
                      <span className="text-xl text-gray-600">{openIndex === i + 1 ? '▴' : '▾'}</span>
                    </button>
                    {openIndex === i + 1 && (
                      <div className="px-5 pb-4 text-gray-600 text-sm md:text-base">{faqItem.answer}</div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
