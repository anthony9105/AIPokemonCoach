export const POKEMON_TYPES: readonly string[] = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const;
export type PokemonType = typeof POKEMON_TYPES[number];


export type PokemonData = {
    name: string; 
    picture: string;
    stats: {
        name: string;
        base_stat: number;
    }[];
    types: PokemonType[]
};


export async function getPokemon(pokemonName: string): Promise<PokemonData | undefined> {
    try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            console.log(`Error, status code: ${response.status}`);
            return;
        }

        const data = await response.json();

        const pokemon: PokemonData = {
            name: data.name,
            picture: data.sprites.front_default,
            stats: data.stats.map((s: any) => ({
                name: s.stat.name,
                base_stat: s.base_stat
            })),
            types: data.types.map((t: any) => t.type.name)
        };

        console.log(pokemon);

        return pokemon;
    }
    catch(e) {
        if (e instanceof Error) {
            console.error('Pokemon fetch failed: ', e.message);
        } 
        else {
            console.error('Pokemon fetch failed (unknown error): ', e);
        }

        return undefined;
    }
}