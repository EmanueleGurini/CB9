import { createContext, useState } from "react";

export const UserContext = createContext(); // <-- qui è dove mettiamo il valore da passare a tutto l'applicativo
export const SetUserContext = createContext(); // <-- qui mettiamo la funzione che utilizzeremo in tutto l'applicativo per aggiornare il valore UserContext

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>
      <SetUserContext.Provider value={{ setUser }}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};
