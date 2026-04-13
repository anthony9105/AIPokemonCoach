import { useState } from 'react'
import './App.css'
import { getPokemon, type PokemonData } from './utils/pokemon_get_utils'
import { PokemonDisplay } from './PokemonDisplay';

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  const handleClick = async () => {
    const data: PokemonData | undefined = await getPokemon("scizor");

    if (data) {
      setPokemon(data);
    }
  };

  return (
    <>
      <h1>PokéCoach</h1>

      <button onClick={handleClick}>Get Info</button>

      {pokemon && <PokemonDisplay pokemonData={pokemon} />}
    </>
  )
}

export default App
