import React, { useEffect } from "react";
import { AuthContext } from "../context";
import { useAuth } from "../hooks";

const TOKEN_STORAGE_KEY = process.env.TOKEN_STORAGE_KEY || "";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const { token, user, onSignUp, onSignIn, sessionLogin, onSignOut } =
    useAuth();

  useEffect(() => {
    const storedValue = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedValue?.length) {
      sessionLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser: user,
        processSignIn: onSignIn,
        processSignUp: onSignUp,
        processSignOut: onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
