import { useEffect, useRef, useState } from "react";
import { bioMe } from "../utils/api";
import PokemonCard from "./PokemonCard.jsx"; 
import "./RadarBoard.css";


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
  <header className="radar__header">
    <h2 className="radar__title">Radar Scan</h2>

    <input
      ref={searchRef}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Pokémon..."
      className="radar__input"
    />
  </header>

  {!error && filteredPokemon.length === 0 && (
    <p>No Pokémon found</p>
  )}

  <section className="cards">
    {filteredPokemon.map((p) => (
      <PokemonCard key={p.id} pokemon={p} />
    ))}
  </section>
</section>

  )
    
}
