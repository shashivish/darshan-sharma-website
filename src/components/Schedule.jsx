import { motion } from 'framer-motion'
import { FaClock, FaWifi } from 'react-icons/fa'

const batches = [
  {
    name: 'Morning Batch',
    time: '7:00 AM – 9:00 AM',
    days: 'Mon, Wed, Fri',
    duration: '2 hours / session',
    mode: 'Offline (Home)',
  },
  {
    name: 'Evening Batch',
    time: '5:00 PM – 7:00 PM',
    days: 'Tue, Thu, Sat',
    duration: '2 hours / session',
    mode: 'Offline & Online',
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Timing</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">Class Schedule</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {batches.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-bg border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl text-primary font-semibold mb-4">{b.name}</h3>
              <table className="w-full text-xs sm:text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-muted pr-3 whitespace-nowrap">Time</td>
                    <td className="py-2 font-medium"><span className="flex items-center gap-1"><FaClock className="text-accent shrink-0" /> {b.time}</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted pr-3 whitespace-nowrap">Days</td>
                    <td className="py-2 font-medium">{b.days}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted pr-3 whitespace-nowrap">Duration</td>
                    <td className="py-2 font-medium">{b.duration}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted pr-3 whitespace-nowrap">Mode</td>
                    <td className="py-2 font-medium"><span className="flex items-center gap-1"><FaWifi className="text-accent shrink-0" /> {b.mode}</span></td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted text-sm"
        >
          Online sessions available via Google Meet. Contact us to check slot availability.
        </motion.p>
      </div>
    </section>
  )
}
