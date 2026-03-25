import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    quote: "Mrs. Sharma's patient teaching style helped my daughter improve her Maths score from 55% to 92% in just one term. Highly recommended!",
    name: 'Priya Agarwal',
    student: 'Parent of Class 9 student',
  },
  {
    quote: 'My son struggled with Science concepts but after joining Bright Minds, he now loves the subject. The notes and practice papers are excellent.',
    name: 'Rajesh Mehta',
    student: 'Parent of Class 7 student',
  },
  {
    quote: 'Small batches mean my child actually gets attention. No more getting lost in a crowd of 30 students. Mrs. Sharma knows exactly where each student stands.',
    name: 'Sunita Gupta',
    student: 'Parent of Class 5 student',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Reviews</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">What Parents Say</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-bg rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex gap-1 text-accent mb-4">
                {Array(5).fill(0).map((_, j) => <FaStar key={j} />)}
              </div>
              <p className="text-[#2c2c2c] text-sm leading-relaxed flex-1 mb-4">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-muted text-xs">{t.student}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
