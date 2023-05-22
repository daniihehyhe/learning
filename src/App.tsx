import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CoursesLanding } from './pages/CoursesLanding'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CoursesLanding/>
     <h1 className='bg-red-400 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus voluptates quasi aliquid provident consequatur fugiat perferendis maxime iure excepturi molestiae in cumque facilis animi deserunt, sed facere optio nam!</h1>
    </>
  )
}

export default App
