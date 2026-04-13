import { POKEMON_TYPE_COLORS, type PokemonData } from "./utils/pokemon_get_utils";
import './Pokemon.css';


function capFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function getStatColour(value: number): string {
  if (value >= 120) return "#22c55e"; // green
  if (value >= 90) return "#86efac";  // light green
  if (value >= 60) return "#facc15";  // yellow
  if (value >= 30) return "#fb923c";  // orange
  return "#ef4444"; // red
}


type Props = {
  pokemonData: PokemonData;
};


export function PokemonDisplay({ pokemonData }: Props) {
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

      {/* <p>Types: {pokemonData.types.map(capFirst).join(", ")}</p> */}

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

      <h3 className='base-stats-title'>Base Stats:</h3>
      <ul className='base-stats'>
        {pokemonData.stats.map((stat) => (
            <li key={stat.name} className="stat-row">
                <span className="stat-name">{stat.name}</span>

                <div className="stat-bar-bg">
                    <div
                    className="stat-bar-fill"
                    style={{
                        width: `${(stat.base_stat / 255) * 300}px`,
                        backgroundColor: getStatColour(stat.base_stat),
                    }}
                    />
                </div>

                <span className="stat-value">{stat.base_stat}</span>
            </li>
        ))}
      </ul>
    </div>
  );
}