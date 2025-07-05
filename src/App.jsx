import { Routes, Route } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import WhatIDo from './components/WhatIDo'
import Gallery from './components/Gallery'
import WhoAmI from './components/WhoAmI'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true)
  // NEW: State to control nav/footer visibility
  const [hideNavAndFooter, setHideNavAndFooter] = useState(false)
  const backgroundRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="background-wrapper" ref={backgroundRef}>
      <div className="container">
        {/* Hide NavBar and Footer if requested */}
        {!hideNavAndFooter && <NavBar />}
        <ScrollToTop />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/who-am-i" element={<WhoAmI />} />
            <Route path="/what-i-do" element={<WhatIDo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Pass setter to Gallery */}
            <Route path="/gallery" element={
              <Gallery
                setHideNavAndFooter={setHideNavAndFooter}
                backgroundRef={backgroundRef}
              />
            } />
          </Routes>
        </main>
        {!hideNavAndFooter && <Footer />}
      </div>
    </div>
  )
}

export default App
