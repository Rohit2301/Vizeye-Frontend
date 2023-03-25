import { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const { loading } = useSelector((state) => state.user);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <Context.Provider value={value}>
      {loading ? "loading" : children}
    </Context.Provider>
  );
};

export { Context };
export { ContextProvider };
