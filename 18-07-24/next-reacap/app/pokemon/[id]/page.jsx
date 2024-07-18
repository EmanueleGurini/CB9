import React from "react";
const getPokemon = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

async function PokemonPage({ params }) {
  const { id } = params;

  const pokemon = await getPokemon(id);

  if (!pokemon.name) return <p>ciao so errore</p>;

  return <div>Ciao sono pokemon: {pokemon.name} </div>;
}

export default PokemonPage;
