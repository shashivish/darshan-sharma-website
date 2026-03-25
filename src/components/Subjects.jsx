import { motion } from 'framer-motion'
import { TbMath, TbAtom, TbLanguage, TbWorld, TbLetterH } from 'react-icons/tb'

const subjects = [
  { icon: <TbMath />, name: 'Mathematics', tag: 'Specialisation' },
  { icon: <TbAtom />, name: 'Science', tag: 'Specialisation' },
  { icon: <TbLanguage />, name: 'English', tag: null },
  { icon: <TbWorld />, name: 'Social Studies', tag: null },
  { icon: <TbLetterH />, name: 'Hindi', tag: null },
]

export default function Subjects() {
  return (
    <section id="subjects" className="py-20 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Subjects</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">What We Teach</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {subjects.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl shadow-md p-5 flex flex-col items-center text-center relative"
            >
              {s.tag && (
                <span className="absolute top-2 right-2 bg-accent text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="text-primary text-4xl mb-3">{s.icon}</div>
              <p className="font-semibold text-sm text-[#2c2c2c]">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
