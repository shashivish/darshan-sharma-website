import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Subjects from './components/Subjects'
import Schedule from './components/Schedule'
import Fees from './components/Fees'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="font-body bg-bg text-[#2c2c2c]">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Subjects />
      <Schedule />
      <Fees />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
