import React from "react";
import type { AppProps } from "next/app";

import { AppProvider } from "@/provider";
import { Guard } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentT: any = Component;
  return (
    <AppProvider>
      <Guard excluedRoutes={["/login", "/signup"]}>
        <ComponentT {...pageProps} />
      </Guard>
    </AppProvider>
  );
}
