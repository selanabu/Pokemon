import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <>
      <header className="topnav">
        <div className="topnav__inner">
          <div className="topnav__brand">Pokémon</div>

          <nav className="topnav__links">
            <NavLink to="/" end className="topnav__link">About</NavLink>
            <NavLink to="/game" className="topnav__link">Game</NavLink>
          </nav>
        </div>
      </header>

      <main className="page">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
