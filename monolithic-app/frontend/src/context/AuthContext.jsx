import React, { useContext, useState } from "react";

// AuthContext
const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider
export const AuthProvider = ({ children }) => {
  // state
  const [loading, setLoading] = useState(true);

  const value = {};

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
