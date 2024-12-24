import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Lenis from 'lenis'
import Particles from './components/ui/particles'
import Footer from './components/Footer'
function App() {
  const [color, setColor] = useState("#FFFFFF")
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <div className='h-full'>
      <Particles
        className='fixed inset-0 w-full h-full'
        quantity={300}
        ease={80}
        color={color}
        refresh/>
      <Navbar/>
      <Hero />
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
