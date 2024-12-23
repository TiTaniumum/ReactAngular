import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider } from './components/ContextProvider'
import CityEvents from './components/CityEvents'
import FavoredEvents from './components/FavoredEvenets'

function App() {
  return (
    <>
      <ContextProvider>
        <CityEvents/>
        <FavoredEvents/>
      </ContextProvider>
    </>
  )
}

export default App
