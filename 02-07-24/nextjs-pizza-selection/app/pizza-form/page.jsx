"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const PizzaForm = () => {
  const router = useRouter(); // ci permette di utilizzare alcune funzionalità del routing
  const defaulPizzaData = {
    name: "",
    ingredients: ["pomodoro", "olive", "prosciutto"],
  };

  const [formData, setFormData] = useState(defaulPizzaData);

  useEffect(() => {
    console.log(formData); // Registra i dati del modulo ogni volta che cambiano
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/pizzas", {
      // definiaimo, attraverso la fetch, l'end-point da utilizzare per comunicare con il DB
      method: "POST", // definiamo il tipo di chiamata
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Ops, è successo qualcosa di inaspettato"); // Lancia un errore se la risposta non è ok
    }

    router.refresh(); // Aggiorna il router
    router.push("/"); // Naviga alla pagina principale
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          name="name"
          id="name"
          type="text"
          required={true}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />

        <input type="submit" value="create pizza" />
      </form>
    </div>
  );
};

export default PizzaForm;
