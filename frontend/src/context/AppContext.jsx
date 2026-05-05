 import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  const addData = (entity, record) => {
    setData(prev => ({
      ...prev,
      [entity]: [...(prev[entity] || []), record]
    }));
  };

  return (
    <AppContext.Provider value={{ data, addData }}>
      {children}
    </AppContext.Provider>
  );
};