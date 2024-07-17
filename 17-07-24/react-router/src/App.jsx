import { useEffect, useContext } from "react";
import { UserContext, SetUserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(SetUserContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <>
      <h1>ciao sono home {user && user.name}</h1>
    </>
  );
}

export default App;
