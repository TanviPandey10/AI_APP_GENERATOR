 import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ LOGIN FUNCTION
  const login = (userData) => {
    setUser(userData);
  };

  // ✅ LOGOUT (optional but useful)
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ CUSTOM HOOK
export const useAuth = () => {
  return useContext(AuthContext);
};