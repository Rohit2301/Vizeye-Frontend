import { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { BoxLoading, MeteorRainLoading } from "react-loadingg";
import MeteorRainLoading from "../components/Layouts/loader/meteorRain";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const { loading } = useSelector((state) => state.loader);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <Context.Provider value={value}>
      {loading ? (
        <div>
          <div className="fixed z-[100] h-full w-full">
            <MeteorRainLoading color="#e83a00fc" />
          </div>
          <div
            className="opacity-40"
            style={{ filter: "blur(10px)", WebkitFilter: "blur(10px)" }}
          >
            {children}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </Context.Provider>
  );
};

export { Context };
export { ContextProvider };
