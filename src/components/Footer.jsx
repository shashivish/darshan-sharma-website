import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Classes', id: 'classes' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Fees', id: 'fees' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-primary text-white py-10 px-4">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        <div>
          <p className="font-heading text-xl font-bold mb-2">Bright Minds Tuitions</p>
          <p className="text-blue-200 text-sm">Expert tuitions for Class 5–10. In-person and online.</p>
        </div>

        <div>
          <p className="font-semibold text-sm mb-3 uppercase tracking-widest text-blue-300">Quick Links</p>
          <ul className="space-y-2">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-sm mb-3 uppercase tracking-widest text-blue-300">Follow Us</p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/919320996083"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-blue-200 hover:text-white text-2xl transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-blue-200 hover:text-white text-2xl transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} Bright Minds Tuitions. All rights reserved.
      </div>
    </footer>
  )
}
