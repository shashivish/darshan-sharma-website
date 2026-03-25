import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Classes', id: 'classes' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Fees', id: 'fees' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm relative">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo('home')}
          className="font-heading text-xl font-bold text-primary"
        >
          New Era Tutorials
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-accent border-b-2 border-accent pb-0.5'
                    : 'text-[#2c2c2c] hover:text-primary'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
      />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-sm font-medium py-2.5 ${
                active === id ? 'text-accent' : 'text-[#2c2c2c]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
