import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full'>
      <Navbar/>
      <Hero />
      <Technologies/>
      <Projects/>
    </div>
  )
}

export default App
