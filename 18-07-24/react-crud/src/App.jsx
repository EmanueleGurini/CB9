import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemonList(res));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/pokemon/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:3000/pokemon")
          .then((res) => res.json())
          .then((res) => setPokemonList(res));
      });
  };

  return (
    <>
      <h1>Tutti i pokemon che hai catturato!</h1>
      <ul>
        {pokemonList?.map((pokemon) => {
          return (
            <li className="flex gap-4 p-1" key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
              <button
                onClick={() => handleDelete(pokemon.id)}
                className="bg-red-500"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
