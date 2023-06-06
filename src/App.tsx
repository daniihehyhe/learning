import React from 'react'
import './App.css'
import Connection from './components/connection/Connection'
import CoursesIn1 from './pages/CourcesIn1/CoursesIn1'
import { CoursesLanding } from './pages/CoursesLanding'

function App() {

  return (
    <>
    <CoursesLanding/>
    <Connection />
    <CoursesIn1/>
    </>
  )
}

export default App
