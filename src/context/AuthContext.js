import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  return (
    <AuthContext.Provider value={{
      isLoading,
      userToken,
      setIsLoading,
      setUserToken
    }}>
      {children}
    </AuthContext.Provider>
  )
}