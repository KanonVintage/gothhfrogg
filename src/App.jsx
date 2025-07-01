import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Music from './components/Music';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ background: 'black', color: 'white' }}>
      <Loader />
      <NavBar />
      <Hero />
      <Music />
      {/* Add Shows, Gallery, Contact later */}
    </div>
  );
}

export default App
