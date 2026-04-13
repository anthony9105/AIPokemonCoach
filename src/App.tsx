import { useState } from 'react'
import './App.css'
import { getPokemon, type PokemonData } from './utils/pokemon_get_utils'
import { PokemonDisplay } from './PokemonDisplay';
import { getSummaryAndSuggestions, type PokemonAnalysis } from './utils/openai_utils';

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [pokeAnalysis, setPokemonAnalysis] = useState<PokemonAnalysis | null>(null);
  const [teamPokemon, setTeamPokemon] = useState<PokemonData[]>([]);
  const [inputName, setInputName] = useState("");
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const handleClick = async () => {
    const data: PokemonData | undefined = await getPokemon(inputName.toLowerCase());

    if (data) {
      setPokemon(data);
    }
  };

  const handleAiRequest = async () => {
    if (!inputName) return;

    setIsLoadingAI(true);

    const aData: PokemonAnalysis | undefined = await getSummaryAndSuggestions(inputName.toLowerCase());

    if (aData) {
      setPokemonAnalysis(aData);

      // fetch all teammate Pokémon data
      const teamData = await Promise.all(
        aData.teamSuggestions.map((mon) =>
          getPokemon(mon.name.toLowerCase())
        )
      );
      

      // remove any undefined results
      const validTeam = teamData.filter(
        (p): p is PokemonData => p !== undefined
      );
      

      setTeamPokemon(validTeam);
    }

    setIsLoadingAI(false);
  };

  return (
    <>
      <div className='title-button-wrapper'>
        <div>
          <h4>Anthony's</h4>
          <h1 className='main-title'>PokéCoach</h1>
        </div>

        <div>
          <input type="text" placeholder="Enter Pokémon Name" value={inputName} onChange={(e) => setInputName(e.target.value)}></input>

          <button onClick={handleClick}>Get Info</button>

          <button className='poke-coach-button' onClick={handleAiRequest} disabled={isLoadingAI || !inputName}>Get Help from AI Pokécoach</button>
        </div>
      </div>

      {isLoadingAI && <div className="spinner"></div>}

      {pokemon && <PokemonDisplay pokemonData={pokemon} analysis={pokeAnalysis} teamPokemon={teamPokemon}/>}
    </>
  )
}

export default App
