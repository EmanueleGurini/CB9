import DeleteButton from "./(components)/DeleteButton";
// metodo per ottenere tutte le pizze dal db
const getPizzas = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/pizzas', { cache: "no-store" })
    return res.json();

  } catch (error) {
    console.log('Error:', error)
  }
}

export default async function Home() {

  const { pizzas } = await getPizzas()

  console.log(pizzas)

  return (
    <main>
      <h1>Pizza Selection</h1>
      <ul>
        {pizzas.map(pizza => {
          return (
            <li key={pizza._id}>{pizza.name} <DeleteButton id={pizza._id} /></li>
          )
        })}
      </ul>
    </main>
  );
}
