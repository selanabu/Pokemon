// We map each biome to one or more Pokémon types.
// This makes biome selection feel meaningful (forest -> grass/bug, etc.).
export const BIOMES = [
  { key: "forest", label: "🌿 Forest" },
  { key: "sea", label: "🌊 Sea" },
  { key: "cave", label: "🕳️ Cave" },
];

export const biomeToTypes = {
  forest: ["grass", "bug"],
  sea: ["water", "ice"],
  cave: ["rock", "ground"],
};