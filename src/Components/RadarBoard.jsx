import { useEffect, useRef, useState } from "react";
import { bioMe } from "../utils/api";
import PokemonCard from "./PokemonCard.jsx"; 
import "./PokemonCard.css";


export default function RadarBoard({ biome }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setSearch("");

    if (searchRef.current) {
      searchRef.current.focus();
    }

    bioMe(biome)
      .then((data) => {
        setPokemonList(data);
      })
      .catch((err) => {
        setError(err.message || " wrong");
        setPokemonList([]);
      });
  }, [biome]);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="radar">
      <input
        ref={searchRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon..."
        className="radar__input"
      />


      {!error && filteredPokemon.length === 0 && (
        <p>No Pokémon found</p>
      )}

      <div className="grid">
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </section>
  );
}
