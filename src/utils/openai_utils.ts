import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const client: OpenAI = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});


export type PokemonAnalysis = {
  description: string;
  strengths: string;
  weaknesses: string;
  teamSuggestions: PokemonTeamMember[];
};

type PokemonTeamMember = {
  name: string;
  description: string;
  strengths: string;
  weaknesses: string;
};


export async function getSummaryAndSuggestions(pokemonName: string): Promise<PokemonAnalysis | undefined> {
    try {
        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            instructions: `
                You are Pokécoach, I will give you a Pokémon as input.  Strengths and weaknesses can be things such 
                as having high or low base stat(s), types, abilities, moves, and more.  Description, strengths, weaknesses
                should be at most one sentence each.  Team suggestions should complete a good team that has good coverage in
                all aspects of battling.
                Return ONLY valid JSON (no markdown, no backticks):

                {
                    description: string,
                    strengths: string,
                    weaknesses: string,
                    teamSuggestions: [
                        {
                            name: string,
                            description: string,
                            strengths: string,
                            weaknesses: string
                        }
                    ] (exactly 5 Pokémon)
                }

                Rules:
                - Description, strengths, weaknesses must be one sentence each
                - Team suggestions must provide good competitive synergy
                - Focus on type coverage, roles, and balance
            `,
            input: pokemonName,
        });

        const text = response.output_text;

        try {
            return JSON.parse(text);
        } catch (e) {
            console.error("Failed to parse AI response:", text);
            return undefined;
        }
    }
    catch (error) {
        console.error("OpenAI request failed:", error);
        return undefined;
    }
    
}