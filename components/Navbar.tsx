'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <>
      {/* Top Bar (only visible at top) */}
      <AnimatePresence initial={false}>
        {atTop && (
          <motion.div
            key="topbar"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-green-600 text-white py-1 md:py-2 px-4"
          >
            <div className="container mx-auto flex justify-between items-center text-xs md:text-sm">
              <span className="truncate pr-2">Welcome to Dietician Demo Landing Page Designed and Developed by Naitik Upadhayay !</span>
              <div className="flex space-x-2 md:space-x-3 flex-shrink-0">
                <Facebook className="w-3 h-3 md:w-4 md:h-4 hover:text-green-200 cursor-pointer" />
                <Twitter className="w-3 h-3 md:w-4 md:h-4 hover:text-green-200 cursor-pointer" />
                <Instagram className="w-3 h-3 md:w-4 md:h-4 hover:text-green-200 cursor-pointer" />
                <Linkedin className="w-3 h-3 md:w-4 md:h-4 hover:text-green-200 cursor-pointer" />
                <MapPin className="w-3 h-3 md:w-4 md:h-4 hover:text-green-200 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md py-2 md:py-4`}
      >
        <div className="container mx-auto px-12 lg:px-0 flex justify-between items-center">
          {/* Logo */}
          <motion.div variants={item} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Aarogya Logo"
              width={120}
              height={122}
              className="h-8 scale-[6] mb-2 w-auto"
              priority
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={container} className="hidden md:flex space-x-8">
            {[
              { href: '#', label: 'Home' },
              { href: '#', label: 'About' },
              { href: '#', label: 'Services' },
              { href: '#', label: 'Pages' },
              { href: '#', label: 'Contact' },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                variants={item}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Book Appointment Button */}
          <motion.button
            variants={item}
            className="bg-gray-800 text-white px-3 py-1 md:px-6 md:py-2 text-sm md:text-base rounded hover:bg-gray-700 transition-colors"
          >
            <span className="hidden md:inline">Book An Appointment</span>
            <span className="md:hidden">Book</span>
          </motion.button>
        </div>
      </motion.nav>
    </>
  )
}
