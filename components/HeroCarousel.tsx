'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Dumbbell, Apple, Calendar, Droplets, Moon, Leaf } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/mainbg1.jpg',
    title: 'Join our Program & Benefit',
    subtitle: 'Enroll in these programs and get the best benefits & create a healthy lifestyle',
    cardWidth: 'w-[580px]',
    cardHeight: 'h-[420px]',
    positionStyles: { bottom: '8rem', left: '6rem' },
    programs: [
      {
        icon: <Dumbbell className="w-16 h-16 text-green-500" />,
        title: 'Health & Fitness Program',
        color: '',
      },
      {
        icon: <Apple className="w-16 h-16 text-red-500" />,
        title: 'Healthy Diet Program',
        color: '',
      }
    ]
  },
  {
    id: 2,
    image: '/mainbg2.jpg',
    title: 'Nutrition Advice',
    subtitle: 'How Efficient you can Lead your Life in Food?',
    cardWidth: 'w-[580px]',
    cardHeight: 'h-[420px]',
    positionStyles: { bottom: '8rem', right: '6rem' },
    programs: [
      {
        icon: <Dumbbell className="w-8 h-8 text-green-600" />,
        title: 'Efficient',
        color: 'bg-green-100'
      },
      {
        icon: <Apple className="w-8 h-8 text-red-600" />,
        title: 'Right Food',
        color: 'bg-red-100'
      },
      {
        icon: <Calendar className="w-8 h-8 text-yellow-600" />,
        title: 'Diet',
        color: 'bg-yellow-100'
      }
    ]
  },
  {
    id: 3,
    image: '/mainbg3.jpg',
    title: 'You Can Transform Health Through Habit Change!',
    subtitle: 'Learn about the best creative fitness & diet courses & get the most of it. Enroll in our programs & get the best offers & tips for limited time.',
    cardWidth: 'w-[580px]',
    cardHeight: 'h-[420px]',
    positionStyles: { bottom: '8rem', right: '6rem' },
    programs: [
      {
        icon: <Apple className="w-8 h-8 text-green-600" />,
        title: 'Learn More About Our Program',
        color: 'bg-green-100'
      }
    ]
  }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    // Preload all images
    slides.forEach((slide) => {
      const img = new window.Image()
      img.src = slide.image
    })

    const autoSlide = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(autoSlide)
  }, [nextSlide])

  return (
    <div className="relative h-[70vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 transition-transform duration-1000 ease-out">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              style={{
                transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)'
              }}
            />
          </div>

          {/* Desktop Content */}
          <div
            className={`hidden md:block absolute z-10 ${slide.cardWidth} ${slide.cardHeight} transition-all duration-1000 ease-out ${
              index === currentIndex 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={slide.positionStyles}
          >
            {/* Content Card */}
            <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-lg h-full flex flex-col justify-between">
              {/* Header Section */}
              <div>
                {/* Color Bar */}
                <div className={`h-1 w-16 mb-5 bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-700 ${
                  index === currentIndex ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`} />

                {/* Badge */}
                <span className={`inline-block text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-green-100 text-green-700 mb-3 transition-all duration-700 delay-100 ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  New Year Health Guide
                </span>

                {/* Title */}
                <h1 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2 transition-all duration-1000 delay-200 ${
                  index === currentIndex 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform -translate-x-8'
                }`}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-1000 delay-300 ${
                  index === currentIndex 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-8'
                }`}>
                  {slide.subtitle}
                </p>
              </div>

              {/* Informational Cards Section */}
              <div className="mt-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-700 delay-400 ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {slide.id === 1 && (
                    <>
                      <div className="rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Apple className="w-4 h-4 text-green-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Balanced Plate</h4>
                        </div>
                        <p className="text-xs text-gray-600">Fill 1/2 veggies, 1/4 protein, 1/4 whole grains for steady energy.</p>
                      </div>
                      <div className="hidden md:block rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Dumbbell className="w-4 h-4 text-emerald-600" />
                          <h4 className="text-sm font-semibold text-gray-800">10-min Walk</h4>
                        </div>
                        <p className="text-xs text-gray-600">A short walk after meals helps control blood sugar and mood.</p>
                      </div>
                      <div className="hidden lg:block rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-yellow-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Protein Breakfast</h4>
                        </div>
                        <p className="text-xs text-gray-600">Start the day with 20–30g protein to curb cravings.</p>
                      </div>
                    </>
                  )}

                  {slide.id === 2 && (
                    <>
                      <div className="rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Apple className="w-4 h-4 text-red-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Carbs Myth</h4>
                        </div>
                        <p className="text-xs text-gray-600"><span className="font-medium">Fact:</span> Whole carbs (oats, fruits) fuel the brain and workouts.</p>
                      </div>
                      <div className="hidden md:block rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Detox Myth</h4>
                        </div>
                        <p className="text-xs text-gray-600"><span className="font-medium">Fact:</span> Your liver and kidneys already detox efficiently.</p>
                      </div>
                      <div className="rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Fat Myth</h4>
                        </div>
                        <p className="text-xs text-gray-600"><span className="font-medium">Fact:</span> Healthy fats aid hormones and satiety—don’t fear them.</p>
                      </div>
                    </>
                  )}

                  {slide.id === 3 && (
                    <>
                      <div className="rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Droplets className="w-4 h-4 text-sky-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Hydration</h4>
                        </div>
                        <p className="text-xs text-gray-600">Aim for clear urine; sip water across the day, not all at once.</p>
                      </div>
                      <div className="hidden md:block rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Moon className="w-4 h-4 text-indigo-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Sleep</h4>
                        </div>
                        <p className="text-xs text-gray-600">7–9 hours supports appetite control and recovery.</p>
                      </div>
                      <div className="hidden lg:block rounded-md border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Leaf className="w-4 h-4 text-emerald-600" />
                          <h4 className="text-sm font-semibold text-gray-800">Fiber</h4>
                        </div>
                        <p className="text-xs text-gray-600">25–35g daily from plants for gut and heart health.</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Subtle helper links (non-promotional) - Hidden on mobile */}
                <div className={`mt-4 hidden md:flex flex-wrap gap-4 text-xs text-green-700 transition-all duration-700 delay-600 ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <a href="#" className="underline underline-offset-2 hover:text-green-800">Save Checklist</a>
                  <a href="#" className="underline underline-offset-2 hover:text-green-800">See Sample Meal Plate</a>
                  <a href="#" className="underline underline-offset-2 hover:text-green-800">Evidence & Resources</a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div
            className={`md:hidden absolute z-10 w-[90%] max-w-sm h-auto left-1/2 bottom-8 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
              index === currentIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
              <div className={`h-1 w-12 mb-4 bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-700 ${
                index === currentIndex ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`} />
              
              <span className={`inline-block text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-green-100 text-green-700 mb-2 transition-all duration-700 delay-100 ${
                index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                New Year Health Guide
              </span>

              <h1 className={`text-lg font-bold text-gray-900 mb-2 transition-all duration-1000 delay-200 ${
                index === currentIndex 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}>
                {slide.title}
              </h1>

              <p className={`text-gray-600 text-xs leading-relaxed mb-3 transition-all duration-1000 delay-300 ${
                index === currentIndex 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-8'
              }`}>
                {slide.subtitle}
              </p>

              <div className={`transition-all duration-700 delay-400 ${
                index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                {slide.id === 1 && (
                  <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Apple className="w-3 h-3 text-green-600" />
                      <h4 className="text-xs font-semibold text-gray-800">Balanced Plate</h4>
                    </div>
                    <p className="text-xs text-gray-600">Fill 1/2 veggies, 1/4 protein, 1/4 whole grains for steady energy.</p>
                  </div>
                )}
                {slide.id === 2 && (
                  <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Apple className="w-3 h-3 text-red-600" />
                      <h4 className="text-xs font-semibold text-gray-800">Carbs Myth</h4>
                    </div>
                    <p className="text-xs text-gray-600"><span className="font-medium">Fact:</span> Whole carbs (oats, fruits) fuel the brain and workouts.</p>
                  </div>
                )}
                {slide.id === 3 && (
                  <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Droplets className="w-3 h-3 text-sky-600" />
                      <h4 className="text-xs font-semibold text-gray-800">Hydration</h4>
                    </div>
                    <p className="text-xs text-gray-600">Aim for clear urine; sip water across the day, not all at once.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-80 hover:bg-opacity-90 text-white p-5 rounded-full transition-all z-20 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft size={60} />
      </button>
      
      <button
        className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-80 hover:bg-opacity-90 text-white p-5 rounded-full transition-all z-20 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={60} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
