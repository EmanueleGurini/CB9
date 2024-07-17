import { useContext } from "react";
import { UserContext, SetUserContext } from "../context/UserContext";

function About() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(SetUserContext);

  console.log(user);

  const handleName = () => {
    setUser((prev) => {
      return { ...prev, name: "Pippo" };
    });
  };

  return (
    <div>
      Ciao, io sono la pagina about: {user && user.name}
      <button className="bg-red-500" onClick={handleName}>
        change name
      </button>
    </div>
  );
}

export default About;
