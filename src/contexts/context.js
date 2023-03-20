import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context };
export { ContextProvider };
