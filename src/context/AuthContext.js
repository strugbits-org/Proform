import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AuthContext.Provider value={{
      isLoading,
      setIsLoading,
      userToken,
      setUserToken,
      userData,
      setUserData,
      drawerOpen,
      setDrawerOpen
    }}>
      {children}
    </AuthContext.Provider>
  )
}