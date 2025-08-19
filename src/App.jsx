import { useState } from 'react'
import { Button } from './components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hi this is the slack messaging frontend</h1>
        <Button>Click me</Button>
      </div>
      
    </>
  )
}

export default App
