import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Music from './components/Music'
import WhatIDo from './components/WhatIDo'
import Gallery from './components/Gallery'
import WhoAmI from './components/WhoAmI'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800) // 1.8 sec splash
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="background-wrapper">
      <div className="container">
        <NavBar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/who-am-i" element={<WhoAmI />} />
            <Route path="/what-i-do" element={<WhatIDo />} />
            <Route path="/music" element={<Music />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App