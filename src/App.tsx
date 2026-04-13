import { useState } from 'react'
import './App.css'
import { getPokemon } from './utils/pokemon_get_utils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => getPokemon('empoleon')}>Yo</button>
    </>
  )
}

export default App
