import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
const APIContext = createContext();

export function APIContextProvder({ children }) {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((data) => setRockets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <APIContext.Provider value={{ rockets }}>{children}</APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
