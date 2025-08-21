'use client'

import Marquee from 'react-fast-marquee'

const motivationalWords = [
  'Commitment',
  'Discipline',
  'Consistency',
  'Patience',
  'Progress',
  'Wellness',
  'Nourish',
  'Strength',
  'Believe',
  'Achieve',
]

export default function MotivationalMarquee() {
  return (
    <div className="bg-green-600 text-white py-8  overflow-x-hidden no-scrollbar">
      <Marquee gradient={false} speed={50} className="no-scrollbar">
        {motivationalWords.map((word, index) => (
          <div key={index} className="flex items-center">
            <span className="text-6xl font-semibold mx-12 tracking-wider uppercase">{word}</span>
            <span className="text-green-300 text-4xl">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
