import { TypeBadge } from "./TypeBadge";
import type { PokemonAnalysis } from "./utils/openai_utils";
import type { PokemonData } from "./utils/pokemon_get_utils";

type Props = {
    analysis: PokemonAnalysis;
    teamPokemon: PokemonData[]
};

export function SuggestedTeammates({ analysis, teamPokemon }: Props) {
    return (
        <div className="teammates-wrapper">
            <h4 className="teammate-name">Suggested Teammates</h4>

            <div className="team-grid">
                {analysis.teamSuggestions.map((mon) => {
                    const realData = teamPokemon.find(
                        (p) => p.name.toLowerCase() === mon.name.toLowerCase()
                    );

                    return (
                    <div key={mon.name} className="team-card">
                        {/* data from PokeAPI */}
                        {realData && (
                            <img
                                src={realData.pictures[0]}
                                alt={mon.name}
                                className="team-img"
                                style={{marginBottom: -25}}
                            />
                        )}

                        <h4 className="teammate-name">{mon.name}</h4>

                        {/* types from PokeAPI */}
                        {realData && (
                            <div className="type-container">
                                {realData.types.map((type) => (
                                    <TypeBadge type={type} fontSize={13}></TypeBadge>
                                ))}
                            </div>
                        )}

                        {/* AI data */}
                        <p className="teammate-text">{mon.description}</p>

                        <p className="teammate-text">
                        <strong>✔</strong> {mon.strengths}
                        </p>

                        <p className="teammate-text">
                        <strong>✖</strong> {mon.weaknesses}
                        </p>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}