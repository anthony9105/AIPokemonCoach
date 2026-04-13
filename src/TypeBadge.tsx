import { POKEMON_TYPE_COLORS } from "./utils/pokemon_get_utils";

type Props = {
    type: string;
    fontSize?: number
};

export function TypeBadge({ type, fontSize }: Props) {
    return (
        <span
            key={type}
            className="type-badge"
            style={{ backgroundColor: POKEMON_TYPE_COLORS[type], fontSize: fontSize ?? undefined }}
        >
            {type}
        </span>
    );
}