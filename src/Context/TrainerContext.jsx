import { createContext, useContext, useState } from "react";

const TrainerContext = createContext(null);

export function TrainerProvider({ children }) {
  const [trainerName, setTrainerName] = useState("");
  const [captured, setCaptured] = useState([]); // array of pokemon objects

  function capture(pokemon) {
    setCaptured((prev) => {
      const already = prev.some((p) => p.id === pokemon.id);
      if (already) return prev; // no duplicates
      return [...prev, pokemon];
    });
  }

  function release(pokemonId) {
    setCaptured((prev) => prev.filter((p) => p.id !== pokemonId));
  }

  return (
    <TrainerContext.Provider
      value={{ trainerName, setTrainerName, captured, capture, release }}
    >
      {children}
    </TrainerContext.Provider>
  );
}

export function useTrainer() {
  const ctx = useContext(TrainerContext);
  if (!ctx) throw new Error("useTrainer must be used inside TrainerProvider");
  return ctx;
}
