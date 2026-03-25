import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="min-h-screen sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-[#1e4a72] to-[#0f2a42] text-white px-4 py-16"
    >
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Welcome to New Era Tutorials
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Expert Tuitions for{' '}
          <span className="text-accent">Class 5–10</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 mb-4"
        >
          Maths · Science · English · Social Studies · Hindi
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-blue-200 mb-10"
        >
          Available Online &amp; Offline · Mumbai, India
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="bg-accent hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Enquire Now
          </button>
          <button
            onClick={() => scrollTo('classes')}
            className="border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View Classes
          </button>
        </motion.div>
      </div>
    </section>
  )
}
