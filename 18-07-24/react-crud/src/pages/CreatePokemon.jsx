import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePokemon() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
  });

  const validation = form.id == "" || form.name == "" || form.type == "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = form;
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => navigate(-1));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`flex flex-col w-[300px]`}>
        <input
          name="name"
          className={`p-1 border-2 border-slate-500`}
          type="text"
          placeholder={`Pokemon name`}
          onChange={handleChange}
        />
        <input
          name="type"
          className={`p-1 border-2 border-slate-500`}
          type="text"
          placeholder={`Pokemon type`}
          onChange={handleChange}
        />
        <input
          name="id"
          className={`p-1 border-2 border-slate-500`}
          type="number"
          placeholder={`Pokemon id`}
          onChange={handleChange}
        />
        <input
          disabled={validation}
          className={`p-1 bg-green-400 ${validation && "bg-green-100"}`}
          type="submit"
          value={`Add Pokemon`}
        />
      </form>
    </div>
  );
}

export default CreatePokemon;
