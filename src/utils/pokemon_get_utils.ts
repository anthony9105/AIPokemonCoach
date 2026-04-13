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


export const POKEMON_TYPE_COLORS: Record<PokemonType, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};


export type PokemonData = {
    name: string; 
    pictures: string[];
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
            pictures: [
                data.sprites.front_default,
                data.sprites.back_default
            ],
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