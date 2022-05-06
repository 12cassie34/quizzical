import { useState } from 'react'

import './App.css'

import Welcome from './components/Welcome'

import yellowBlock from './imgs/yellow-block.png'
import blueBlock from './imgs/blue-block.png'

function App() {
  return (
    <div className="App flex justify-center items-center relative h-screen">
      <img src={yellowBlock} className="absolute top-0 right-0" />
      <img src={blueBlock} className="absolute bottom-0 left-0" />
      <div className="flex h-4/6">
        <Welcome />
      </div>
      
    </div>
  )
}

export default App
