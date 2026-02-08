import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__hero">
        <div className="about__badge">Pokémon Radar</div>
        <h1 className="about__title">Welcome, Trainer!</h1>
        <p className="about__subtitle">
          Explore different biomes, scan for Pokémon, and build your captured list.
          Choose your biome, discover who appears there, and collect your favorites.
        </p>

       
      </div>

      <div className="about__grid" id="how">
        <div className="card">
          <h3 className="card__title">Pick a biome</h3>
          <p className="card__text">
            Use the top bar to select a biome (like forest). Each biome changes which Pokémon can appear.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">Scan & discover</h3>
          <p className="card__text">
            The radar board shows Pokémon related to the selected biome. Switch biomes to find new options.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">Capture Pokémon</h3>
          <p className="card__text">
            When you capture a Pokémon, it’s saved in your captured list. The game prevents duplicates automatically.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">Your trainer progress</h3>
          <p className="card__text">
            Your trainer data (name + captured list) is managed using React Context so it stays available across pages.
          </p>
        </div>
      </div>

      <footer className="about__footer">
        <span>Tip:</span> Try switching biomes to see how the radar results change.
      </footer>
    </section>
  );
}
