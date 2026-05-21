import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [meraCounter, setMeraCounter] = useState(16)
  const [count, setCount] = useState(0)
  var counter = 10;
  const addValue = () => {
    console.log("Value Added", meraCounter);
    setMeraCounter(meraCounter + 1);
  }

  const subtractValue = () => {
    console.log("Value Removed", meraCounter);
    if(meraCounter > 0) {
      setMeraCounter(meraCounter - 1);
    }
  }
  return (
    <>
    <h1>Welcome to Vite + React!</h1>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
    <h2>Counter Value {meraCounter}</h2>
    <button
      type="button" onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}> Remove Value</button>
    </>
  )
}

export default App
