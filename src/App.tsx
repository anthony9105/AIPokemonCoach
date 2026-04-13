import { useState } from 'react'
import './App.css'
import { getPokemon, type PokemonData } from './utils/pokemon_get_utils'
import { PokemonDisplay } from './PokemonDisplay';
import { getSummaryAndSuggestions, type PokemonAnalysis } from './utils/openai_utils';

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [pokeAnalysis, setPokemonAnalysis] = useState<PokemonAnalysis | null>(null);

  const handleClick = async () => {
    const data: PokemonData | undefined = await getPokemon("snorlax");

    if (data) {
      setPokemon(data);
    }
  };

  const handleAiRequest = async () => {
    const aData: PokemonAnalysis | undefined = await getSummaryAndSuggestions("snorlax");

    if (aData) {
      setPokemonAnalysis(aData);
    }
  };

  return (
    <>
      <h1>PokéCoach</h1>

      <button onClick={handleClick}>Get Info</button>

      {pokemon && <PokemonDisplay pokemonData={pokemon} analysis={pokeAnalysis}/>}

      <button onClick={handleAiRequest}>Get Help from Pokécoach</button>
    </>
  )
}

export default App
