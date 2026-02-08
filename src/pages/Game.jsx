import TopBar from "../components/TopBar";
import RadarBoard from "../components/RadarBoard";
import { useState } from "react";

export default function Game() {
  const [biome, setBiome] = useState("forest");

  return (
    <>
      <TopBar biome={biome} setBiome={setBiome} />
      <RadarBoard biome={biome} />
    </>
  );
}
