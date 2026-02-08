import { useMemo } from "react";
import { useTrainer } from "../context/TrainerContext.jsx";
import "./CapturedPanel.css";

export default function CapturedPanel() {
  const { trainerName, captured, release } = useTrainer();

  const title = useMemo(() => {
    const name = trainerName?.trim();
    return name ? `${name}'s Pokédex` : "Pokédex";
  }, [trainerName]);

  return (
    <aside className="pokedex">
      <header className="pokedex__header">
        <div>
          <h2 className="pokedex__title">{title}</h2>
          <p className="pokedex__subtitle">Captured: {captured.length}</p>
        </div>
      </header>

      {captured.length === 0 ? (
        <div className="pokedex__empty">
          No Pokémon captured yet. Click <b>Capture</b> on a card to add it here.
        </div>
      ) : (
        <ul className="pokedex__list">
          {captured.map((p) => (
            <li className="pokedex__item" key={p.id ?? p.name}>
              <div className="pokedex__left">
                {p.image ? (
                  <img className="pokedex__img" src={p.image} alt={p.name} />
                ) : (
                  <div className="pokedex__img pokedex__img--placeholder" />
                )}

                <div className="pokedex__meta">
                  <div className="pokedex__name">{p.name}</div>
                  {p.types?.length ? (
                    <div className="pokedex__types">
                      {p.types.join(", ")}
                    </div>
                  ) : null}
                </div>
              </div>

              <button
                className="pokedex__btn"
                onClick={() => release(p.id)}
                type="button"
              >
                Release
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
