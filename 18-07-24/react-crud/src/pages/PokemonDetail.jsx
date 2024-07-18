import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });

  useEffect(() => {
    fetch(`http://localhost:3000/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((error) =>
        setIsError((prevState) => {
          return { ...prevState, message: error.message, isError: true };
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading pokemon...</p>;

  // eslint-disable-next-line react/no-unescaped-entities
  if (isError.isError) return <p>Aho, c'è un errore! {isError.message}</p>;

  return (
    <div>
      <p>Pokemon: {pokemon.name}</p>
    </div>
  );
}

export default PokemonDetail;
