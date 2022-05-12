import { useState } from 'react'

import './App.css'

import Welcome from './components/Welcome'
import StartGame from './components/StartGame'

import yellowBlock from './imgs/yellow-block.png'
import blueBlock from './imgs/blue-block.png'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true)
  const startNewGame = () => {
    setIsGameStarted(true)
  }

  return (
    <div className="App flex justify-center items-center relative">
      <img src={yellowBlock} className="absolute top-0 right-0" />
      <img src={blueBlock} className="absolute bottom-0 left-0" />
      <div className="main-content flex z-10">
        { isGameStarted ? <StartGame /> : <Welcome startNewGame={startNewGame} />  }
      </div>
      
    </div>
  )
}

export default App
