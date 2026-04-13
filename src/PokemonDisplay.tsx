import { POKEMON_TYPE_COLORS, type PokemonData } from "./utils/pokemon_get_utils";
import './Pokemon.css';
import { BaseStats } from "./BaseStats";
import type { PokemonAnalysis } from "./utils/openai_utils";


function capFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function getStatColour(value: number): string {
  if (value >= 150) return "#228fc5";
  if (value >= 120) return "#22c55e";
  if (value >= 90) return "#86efac";
  if (value >= 60) return "#facc15";
  if (value >= 30) return "#fb923c";
  return "#ef4444";
}


type Props = {
  pokemonData: PokemonData;
  analysis: PokemonAnalysis | null;
};


export function PokemonDisplay({ pokemonData, analysis }: Props) {
  return (
    <div>
      <h2>{capFirst(pokemonData.name)}</h2>

      <div className="pokemon-images">
        {pokemonData.pictures.map((pic) => (
            <img
                key={pic}
                className="pokemon-pic"
                src={pic}
                alt={pokemonData.name}
            />
        ))}
      </div>


      <div className="type-container">
        {pokemonData.types.map((type) => (
            <span
                key={type}
                className="type-badge"
                style={{ backgroundColor: POKEMON_TYPE_COLORS[type] }}
            >
                {type}
            </span>
        ))}
        </div>

      <div className="info-grid">
        <BaseStats pokemonData={pokemonData} />

        {analysis && (
          <div className="analysis-card">
            <h3 className="coach-title">PokéCoach Analysis</h3>

            <p className='coach-text'>
              {analysis.description}
            </p>

            <p className="coach-text">
              <strong>Strengths:</strong> {analysis.strengths}
            </p>

            <p className="coach-text">
              <strong>Weaknesses:</strong> {analysis.weaknesses}
            </p>

            <div className="team-grid">
                <h4>Suggested Teammates</h4>
                {analysis.teamSuggestions.map((mon) => (
                <div key={mon.name} className="team-card">
                    <h4 className="teammate-name">{mon.name}</h4>

                    <p className="teammate-text">{mon.description}</p>

                    <p className="teammate-text">
                        <strong>✔</strong> {mon.strengths}
                    </p>

                    <p className="teammate-text">
                        <strong>✖</strong> {mon.weaknesses}
                    </p>
                </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}