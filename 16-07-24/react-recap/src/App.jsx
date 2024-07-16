import { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState([]);

  const handleClick = () => {
    setUserId(userId + 1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [userId]);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(({ slip }) =>
        setAdvice((prevState) => {
          return [...prevState, slip];
        })
      );
  };

  const setStorage = () => {
    localStorage.setItem("advice", JSON.stringify(advice));
  };

  const getStorage = () => {
    const storage = localStorage.getItem("advice");
    console.log(JSON.parse(storage));
  };

  const clearStorage = () => {
    localStorage.clear();
    setAdvice([]);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  useEffect(() => {
    setStorage();
    getStorage();
  }, [advice]);

  return (
    <>
      <h1>Count: {userId}</h1>
      <p className="bg-slate-300 text-xl font-bold">{user && user.name}</p>
      <ul>
        {" "}
        {advice?.map((ad) => {
          return <li key={ad.id}>{ad.advice}</li>;
        })}
      </ul>

      <button className="bg-slate-500 p-3" onClick={handleClick}>
        Add
      </button>
      <button className="bg-green-500 p-3" onClick={getAdvice}>
        Get Advice
      </button>
      <button className="bg-red-500 p-3" onClick={clearStorage}>
        Clear
      </button>
    </>
  );
}

export default App;
