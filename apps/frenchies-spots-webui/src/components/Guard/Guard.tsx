/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

export const Guard = ({ children, excludedRoutes }: GuardProps) => {
  const { authenticated, refresh } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      const storedValue = localStorage.getItem(TOKEN_STORAGE_KEY);
      if (storedValue?.length) {
        refresh();
      }
    }
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated && excludedRoutes?.includes(router.pathname)) {
      router.push("/sign-in");
    }
  }, [authenticated, router, excludedRoutes]);

  return <>{children}</>;
};
