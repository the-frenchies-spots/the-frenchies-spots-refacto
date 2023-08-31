import React from "react";
import type { AppProps } from "next/app";

import { AppProvider } from "@/provider";
import { Guard } from "@/components";
import LogoutButton from "@/components/LogoutButton/LogoutButton";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentT: any = Component;
  return (
    <AppProvider>
      <LogoutButton />
      <Guard excludedRoutes={["/spots/favorit"]}>
        <ComponentT {...pageProps} />
      </Guard>
    </AppProvider>
  );
}
