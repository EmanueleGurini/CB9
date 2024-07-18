import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout.jsx";
import App from "./App.jsx";
import "./index.css";
import PokemonDetail from "./pages/PokemonDetail.jsx";
import CreatePokemon from "./pages/CreatePokemon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "create",
        element: <CreatePokemon />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
