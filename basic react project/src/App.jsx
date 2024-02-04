import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setCount] = useState('olive')

  return (
    <>
      <h1>samad</h1>
      <div className='w-full h-screen duration-200'>
      style={{backgroundColor: color}}
      </div>
      
    </>
  )
}

export default App
