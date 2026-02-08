import { BIOMES } from "../utils/biomeMap";
import "./TopBar.css";
import { useTrainer } from "../context/TrainerContext.jsx";

export default function TopBar({ biome, setBiome }) {
  const { trainerName, setTrainerName, captured } = useTrainer();

  return (
    <header className="topbar">
      <h1 className="topbar__title">Pokémon</h1>

      <div className="topbar__left">
        <label className="topbar__label">
          Trainer:
          <input
            className="topbar__input"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Trainer name"
          />
        </label>
      </div>

      <div className="topbar__middle">
        <label className="topbar__label">
          Biome:
          <select
            className="topbar__select"
            value={biome}
            onChange={(e) => setBiome(e.target.value)}
            aria-label="Select biome"
          >
            {BIOMES.map((b) => (
              <option key={b.key} value={b.key}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="topbar__right">
        <span className="topbar__badge" aria-label="Captured count">
          Captured: {captured.length}
        </span>
      </div>
    </header>
  );
}
