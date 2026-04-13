import { type PokemonData } from "./utils/pokemon_get_utils";
import './BaseStats.css';


type Props = {
  pokemonData: PokemonData;
};


function getStatColour(value: number): string {
  if (value >= 150) return "#228fc5";
  if (value >= 120) return "#22c55e";
  if (value >= 90) return "#86efac";
  if (value >= 60) return "#facc15";
  if (value >= 30) return "#fb923c";
  return "#ef4444";
}


export function BaseStats({pokemonData}: Props) {
    return (
        <div>
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