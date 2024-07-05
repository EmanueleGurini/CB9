"use client";

import { useRouter } from "next/navigation";

const deletePizza = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/pizzas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

function DeleteButton({ id }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        deletePizza(id);
        router.refresh();
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
