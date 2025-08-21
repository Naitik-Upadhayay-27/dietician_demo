'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const mealIdeas = [
  {
    image: '/meal1.jpg',
    title: 'Healthy Meals Tips',
    description: 'Discover delicious and nutritious recipes that are easy to make and good for you.',
  },
  {
    image: '/meal2.jpg',
    title: 'Recipes Idea',
    description: 'Get creative in the kitchen with our unique and flavorful recipe ideas.',
  },
  {
    image: '/meal3.jpg',
    title: 'Healthy Meals Tips',
    description: 'Learn how to make smart food choices that align with your health and fitness goals.',
  },
]

export default function MealIdeas() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }
  return (
    <section className="py-10 bg-gray-50">
      <div className=" mx-auto px-5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {mealIdeas.map((idea, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image src={idea.image} alt={idea.title} width={400} height={500} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-16 h-0.5 bg-white mb-4"></div>
                <h3 className="text-2xl font-sans mb-4">{idea.title}</h3>
                <p className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                  {idea.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
