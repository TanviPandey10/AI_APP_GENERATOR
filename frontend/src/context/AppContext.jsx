  import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  const addData = (entity, record) => {
    setAppData((prev) => ({
      ...prev,
      [entity]: [...(prev[entity] || []), record],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        appData,
        addData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};