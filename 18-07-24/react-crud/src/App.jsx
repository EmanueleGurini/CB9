import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemonList(res));
  }, []);

  return (
    <>
      <h1>Tutti i pokemon che hai catturato!</h1>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
