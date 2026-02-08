import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Game from "../pages/Game";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <About /> },   
      { path: "game", element: <Game /> },   
    ],
  },
]);

export default router;
