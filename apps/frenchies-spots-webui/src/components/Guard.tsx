import React, { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";

interface GuardProps {
  children: JSX.Element;
  excluedRoutes?: string[];
}

export const Guard = ({ children, excluedRoutes }: GuardProps) => {
  //   const { data: user } = useGetMe();
  const router = useRouter();

  return <>{children}</>;
};
