import { motion } from 'framer-motion'
import { FaMedal, FaUserGraduate, FaHeart } from 'react-icons/fa'
import darshanImg from '../assets/Darshan.png'

const highlights = [
  { icon: <FaMedal />, title: '12+ Years Experience', desc: 'Dedicated teaching across all major subjects' },
  { icon: <FaUserGraduate />, title: '500+ Students Taught', desc: 'Consistent results and student growth' },
  { icon: <FaHeart />, title: 'Individual Attention', desc: 'Small batch sizes for personalised learning' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-14"
        >
          <div className="shrink-0">
            <img
              src={darshanImg}
              alt="Mrs. Sharma"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-accent"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">About the Teacher</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Meet Mrs. Sharma</h2>
            <p className="text-muted text-lg leading-relaxed">
              With over 12 years of dedicated teaching experience, Mrs. Sharma brings clarity, patience, and passion to every class.
              Her goal is simple — help every student understand concepts deeply and perform with confidence. She believes every child
              learns at their own pace, and her teaching style adapts accordingly.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-accent text-4xl flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-heading text-xl text-primary font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
