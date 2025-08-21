'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-900 text-neutral-300">
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
            <h3 className="text-2xl font-semibold text-white">HealthyLife</h3>
            <p className="mt-2 text-sm text-neutral-400">Better habits. Better life.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
            <h4 className="text-white font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
            <h4 className="text-white font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-neutral-400" />
                <span>123 Wellness Ave, Suite 200, San Jose, CA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400" />
                <a href="tel:+14085551234" className="hover:text-white transition-colors">+1 (408) 555-1234</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <a href="mailto:hello@healthylife.com" className="hover:text-white transition-colors">hello@healthylife.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
            <h4 className="text-white font-medium mb-3">Follow</h4>
            <div className="flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
          className="mt-10 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500"
        >
          <p>© {year} HealthyLife. All rights reserved.</p>
          <p className="text-neutral-600">Made with care for your wellbeing.</p>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-900 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
        style={{ width: 48, height: 48 }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
