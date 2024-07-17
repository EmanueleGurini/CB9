import { useEffect, useContext, useState } from "react";
import { UserContext, SetUserContext } from "./context/UserContext";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <button onClick={() => setIsModalOpen(!isModalOpen)}>open modale</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <p>pippo</p>
      </Modal>
    </>
  );
}

export default App;
