import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    label: 'Foundation',
    classes: 'Class 5 & 6',
    price: '₹1,200',
    unit: '/ subject / month',
    includes: ['Study notes provided', 'Weekly doubt sessions', 'Monthly test papers', 'Progress report'],
    highlight: false,
  },
  {
    label: 'Intermediate',
    classes: 'Class 7 & 8',
    price: '₹1,500',
    unit: '/ subject / month',
    includes: ['Study notes provided', 'Weekly doubt sessions', 'Monthly test papers', 'Progress report', 'Extra practice sheets'],
    highlight: true,
  },
  {
    label: 'Board Prep',
    classes: 'Class 9 & 10',
    price: '₹1,800',
    unit: '/ subject / month',
    includes: ['Study notes provided', 'Doubt sessions anytime', 'Monthly test papers', 'Progress report', 'Board pattern papers', 'Revision sessions'],
    highlight: false,
  },
]

export default function Fees() {
  return (
    <section id="fees" className="py-20 px-4 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">Fee Structure</h2>
          <p className="text-muted mt-2 text-sm">Contact us for current fee details and combined subject discounts.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? 'bg-primary text-white shadow-2xl md:scale-105'
                  : 'bg-card shadow-md text-[#2c2c2c]'
              }`}
            >
              {plan.highlight && (
                <span className="self-center bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-blue-200' : 'text-muted'}`}>
                {plan.label}
              </p>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-muted'}`}>{plan.classes}</p>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-200' : 'text-muted'}`}>{plan.unit}</span>
              </div>
              <ul className="space-y-2 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-blue-100' : 'text-[#2c2c2c]'}`}>
                    <FaCheck className="text-accent text-xs shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
