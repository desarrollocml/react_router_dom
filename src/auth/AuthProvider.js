import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  //const [user, setUser] = useState({id:1});
  const [user, setUser] = useState(null);
  const contextValue = {
    user,
    login() {
      setUser({ id: 1, username: "luis50" });
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
