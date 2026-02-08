import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="/">About</NavLink>
        <NavLink to="/game">Game</NavLink>
      </nav>

      <Outlet />
    </>
  );
}
