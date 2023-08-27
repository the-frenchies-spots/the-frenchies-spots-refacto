"use client";
import React, { ReactNode } from "react";
import { GraphqlProvider } from "./graphql-provider";
import { AuthProvider } from "./auth-provider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <GraphqlProvider>
      {/* <AuthProvider> */}
      {children}
      {/* </AuthProvider> */}
    </GraphqlProvider>
  );
}
