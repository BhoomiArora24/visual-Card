import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './cards/Card1'
import bgImage from './assets/bg7.jpeg'
import Card2 from './cards/Card2'
import CardSection from './Components/CardSection'
import Card3 from './cards/Card3'
import Card4 from './cards/Card4'
import { motion } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
        overflowY:'hidden'}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}   // starts lower and invisible
            animate={{ opacity: 1, y: 0 }}    // ends at original place and fully visible
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
              <Card1 />
          </motion.div>
      <div >
         <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
      <Card2 />
      </motion.div>
      <div className="flex ">
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Card3 />
  </motion.div>
      <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Card4 />
  </motion.div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
