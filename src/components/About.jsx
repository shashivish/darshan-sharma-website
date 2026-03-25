import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMedal, FaUserGraduate, FaHeart } from 'react-icons/fa'
import darshanImg from '../assets/Darshan.png'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const duration = 1500
    const steps = 60
    const increment = to / steps
    const interval = duration / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [isInView, to])

  return <span ref={ref}>{count}{suffix}</span>
}

const highlights = [
  { icon: <FaMedal />, count: 12, suffix: '+', label: 'Years Experience', desc: 'Dedicated teaching across all major subjects' },
  { icon: <FaUserGraduate />, count: 500, suffix: '+', label: 'Students Taught', desc: 'Consistent results and student growth' },
  { icon: <FaHeart />, count: null, label: 'Individual Attention', desc: 'Small batch sizes for personalised learning' },
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
              alt="Mr. Sharma"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-accent"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">About the Teacher</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">Meet Mr. Sharma</h2>
            <p className="text-muted text-lg leading-relaxed">
              With over 12 years of dedicated teaching experience, Mr. Sharma brings clarity, patience, and passion to every class.
              His goal is simple — help every student understand concepts deeply and perform with confidence. He believes every child
              learns at their own pace, and his teaching style adapts accordingly.
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
              <h3 className="font-heading text-xl text-primary font-semibold mb-2">
                {item.count !== null ? (
                  <CountUp to={item.count} suffix={item.suffix} />
                ) : null}
                {item.count === null ? item.label : ` ${item.label}`}
              </h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
