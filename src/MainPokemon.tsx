import { BaseStats } from "./BaseStats";
import { TypeBadge } from "./TypeBadge";
import type { PokemonData } from "./utils/pokemon_get_utils";


type Props = {
    pokemonData: PokemonData
};


function capFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export function MainPokemon({ pokemonData }: Props) {
    return (
        <div className="main-poke-wrapper">
            <div className="poke-name-type-pic-wrapper">
                <h2 className="poke-main-name">{capFirst(pokemonData.name)}</h2>
    
                <div className="type-container">
                    {pokemonData.types.map((type) => (
                        <TypeBadge type={type}></TypeBadge>
                    ))}
                </div>
    
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
            </div>
        
            <BaseStats pokemonData={pokemonData} />
        </div>
    );
}