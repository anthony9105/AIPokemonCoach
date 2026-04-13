import { type PokemonData } from "./utils/pokemon_get_utils";
import './Pokemon.css';
import type { PokemonAnalysis } from "./utils/openai_utils";
import { MainPokemon } from "./MainPokemon";
import { SuggestedTeammates } from "./SuggestedTeammates";


type Props = {
    pokemonData: PokemonData;
    analysis: PokemonAnalysis | null;
    teamPokemon?: PokemonData[];
};


export function PokemonDisplay({ pokemonData, analysis, teamPokemon=[]}: Props) {
    return (
        <div className="display-wrapper">
            <MainPokemon pokemonData={pokemonData}></MainPokemon>

            <div className="info-grid">
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


                        <SuggestedTeammates analysis={analysis} teamPokemon={teamPokemon}></SuggestedTeammates>
                    </div>
                )}
            </div>
        </div>
    );
}