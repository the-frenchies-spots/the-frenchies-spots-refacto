import React, { ReactNode } from "react";
import type { AppProps } from "next/app";
import type { Page } from "../types/page";

import { AppProvider } from "@/provider";
import { Guard } from "@/components";
import LogoutButton from "@/components/LogoutButton/LogoutButton";

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component?.getLayout || ((page) => page);

  const layout = React.isValidElement(
    getLayout(<Component {...pageProps} />)
  ) ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <>{getLayout(<Component {...pageProps} />)}</>
  );

  return (
    <AppProvider>
      <Guard excludedRoutes={["/spots/favorit"]}>
        <>{layout}</>
      </Guard>
    </AppProvider>
  );
}
