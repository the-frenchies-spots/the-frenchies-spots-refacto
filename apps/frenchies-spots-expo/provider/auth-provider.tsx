import React, { useEffect } from "react";
import { AuthContext } from "../context";
import { useAuth } from "../hooks";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const { token, user, onSignUp, onSignIn, sessionLogin, onSignOut } =
    useAuth();

  useEffect(() => {
    AsyncStorage.getItem(TOKEN_STORAGE_KEY).then((token) => {
      if (token?.length) {
        sessionLogin();
      }
    });
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
