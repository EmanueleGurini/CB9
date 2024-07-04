'use client'

/* 
USE CLIENT
use client ci permette di utilizzare il rendering lato client, 
 quindi nel vostro browser. Se aprite la console del browser e lanciate
 una delle funzioni (getProducts o sendProducts) potrete vedere il risultato
 della chiamata. 

 Importante: lo use client, permettendovi di far girare la pagina lato client, 
 quindi sul browser, vi permette di avere accesso a tutte i metodi e proprietà 
 che solo il browser ha a disposizione. 

 Una form che solitamente deve registrare degli eventi, come l'onSubmit, 
 deve per forza essere renderizzata lato client. 
 */

/* =============================
== Metodi HTTP
============================= */
// 1. GET
// 2. POST
// 3. PUT 
// 4. DELETE

const getProducts = () => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "GET",
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

const sendProducts = () => {

  const newProduct = {
    title: "Pippo e pluto alla scoperta dell'havana",
    price: 1000,
    description: "film bellissimo",
    categoryId: 1,
    images: ["https://plus.unsplash.com/premium_photo-1692574096074-85b35e49a818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"]
  }

  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct)
  })
    .then(res => res.json())
    .then(data => console.log(data))

}

export default function Home() {

  /**
   * Togliere dal commento per utilizzare la funzione desiderata
   * 
   */

  getProducts();
  //sendProducts();

  return (
    <main >
      <form>
        <label>Input di prova</label>
        <input name="input di prova" type="text" />
        <input type="submit" />
      </form>
    </main>
  );
}
