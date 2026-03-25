import { motion } from 'framer-motion'
import { FaBook } from 'react-icons/fa'

const statusStyles = {
  Available: 'bg-green-100 text-green-700',
  'Almost Full': 'bg-amber-100 text-amber-700',
  Full: 'bg-red-100 text-red-600',
}

const classes = [
  {
    range: 'Class 5 & 6',
    label: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
    batch: 'Batch size: up to 8 students',
    color: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    status: 'Available',
  },
  {
    range: 'Class 7 & 8',
    label: 'Intermediate',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
    batch: 'Batch size: up to 6 students',
    color: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
    status: 'Almost Full',
  },
  {
    range: 'Class 9 & 10',
    label: 'Board Exam Prep',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
    batch: 'Batch size: up to 5 students',
    color: 'from-green-50 to-green-100',
    border: 'border-green-200',
    status: 'Full',
  },
]

export default function Classes() {
  return (
    <section id="classes" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">Classes Offered</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-gradient-to-b ${cls.color} border ${cls.border} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest">{cls.label}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[cls.status]}`}>
                  {cls.status}
                </span>
              </div>
              <h3 className="font-heading text-2xl text-primary font-bold mb-4">{cls.range}</h3>
              <ul className="space-y-2 mb-4">
                {cls.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[#2c2c2c]">
                    <FaBook className="text-accent text-xs" /> {s}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted border-t pt-3 mt-3">{cls.batch}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
