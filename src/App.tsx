import React from 'react'
import { useState } from 'react'
import { CoursesLanding } from './pages/CoursesLanding'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CoursesLanding/>
    </>
  )
}

export default App
