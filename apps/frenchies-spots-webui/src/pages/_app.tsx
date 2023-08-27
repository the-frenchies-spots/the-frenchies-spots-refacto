import React from "react";
import type { AppProps } from "next/app";

import { AppProvider } from "../../provider";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentT: any = Component;
  return (
    <AppProvider>
      <ComponentT {...pageProps} />
    </AppProvider>
  );
}
