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
        <div>
          No Pokémon captured yet
        </div>
      ) : (
        <ul className="pokedex__list">
          {captured.map((p) => (
            <li className="pokedex__item" key={p.id ?? p.name}>
              <div className="pokedex__left">
                
                  <div className="pokedex__name">{p.name}</div>
                  
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
