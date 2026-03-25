import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    q: 'What is the batch size?',
    a: 'We keep batches very small — Class 5 & 6 have up to 8 students, Class 7 & 8 up to 6, and Class 9 & 10 up to 5 — so every student gets personal attention.',
  },
  {
    q: 'Are online classes available?',
    a: 'Yes! Evening batch sessions are available both offline and online via Google Meet. Morning batches are currently offline only.',
  },
  {
    q: 'How are fees paid?',
    a: 'Fees are collected monthly at the start of each month. We accept cash, UPI, and bank transfer.',
  },
  {
    q: 'What study material is provided?',
    a: 'Handwritten and printed notes, test papers, and past board question papers are all provided at no extra cost.',
  },
  {
    q: 'Can I enrol for a single subject?',
    a: 'Absolutely. You can enrol for one or more subjects based on your need. Fees are charged per subject per month.',
  },
  {
    q: 'Is there a free demo class?',
    a: 'Yes, we offer one free demo class so students and parents can experience the teaching style before committing.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Got Questions?</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-bg rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-primary text-sm md:text-base">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-accent text-xl shrink-0 ml-4"
                >
                  <FiChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
