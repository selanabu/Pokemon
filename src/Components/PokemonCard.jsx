import "./PokemonCard.css";
import { useTrainer } from "../context/TrainerContext";
import "./RadarBoard.css";

export default function PokemonCard({ pokemon }) {
const { capture, release, captured } = useTrainer();
const isCaptured = captured.some((p) => p.id === pokemon.id);

  function handleCapture() {
  if (isCaptured) {
    release(pokemon.id);
  } else {
    capture(pokemon);
  }
}

  return (
    <article className={`card ${isCaptured ? "card--captured" : ""}`}>
      <div className="card__imgWrap">
        {pokemon.image ? (
          <img src={pokemon.image} alt={pokemon.name} />
        ) : (
          <div className="card__placeholder"  />
        )}
      </div>

      <h3 className="card__title">{pokemon.name}</h3>

      <div className="card__types">
        {pokemon.types.map((t) => (
          <span className="typeBadge" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="card__stats">
        <span>HP: {pokemon.hp}</span>
        <span>ATK: {pokemon.attack}</span>
      </div>

      <button
        className="card__btn"
       onClick={handleCapture}
      >
        {isCaptured ? "Release" : "Capture"}
      </button>
    </article>
  );
}
