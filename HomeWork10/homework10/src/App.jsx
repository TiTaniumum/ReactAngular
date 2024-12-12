import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BestAnime from './components/BestAnime/BestAnime'
import Profile from './components/Profile/Profile'
import Timer from './components/Timer/Timer'
import MyPet from './components/MyPet/MyPet'

function App() {

  return (
    <>
      <BestAnime/>
      <Profile/>
      <Timer/>
      <MyPet/>
    </>
  )
}

export default App
