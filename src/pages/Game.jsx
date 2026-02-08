import TopBar from "../components/TopBar";
import RadarBoard from "../components/RadarBoard";
import { useState } from "react";
import CapturedPanel from "../Components/CapturedPanel";
import "./Game.css";

export default function Game() {
  const [biome, setBiome] = useState("forest");

  return (
    <>
      <TopBar biome={biome} setBiome={setBiome} />
      <main className="game-layout">
        <section className="game-main">
          <RadarBoard biome={biome} />
        </section>

        <aside className="game-captured">
          <CapturedPanel />
        </aside>
      </main>
    </>
  );
}
