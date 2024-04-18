import { useState } from 'react'
import './App.css'
import ScatterPlot from './components/ScatterPlot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScatterPlot/>
    </>
  )
}

export default App
