import { useState } from "react";

// import { mutations, queries } from "@frenchies-spots/gql";
import { useMutation, useLazyQuery } from "@apollo/client";

// import type {
//   UserEntity,
//   SignResponse,
//   SignInInput,
//   SignUpInput,
//   LogoutResponse,
// } from "@frenchies-spots/gql";

const TOKEN_STORAGE_KEY = process.env.TOKEN_STORAGE_KEY || "";

import useStorage from "./use-storage";

export const useAuth = () => {
  // const [user, setUser] = useState<UserEntity>();
  // const [signUp] = useMutation<SignResponse, SignUpInput>(mutations.signUp);
  // const [signIn] = useMutation<SignResponse, SignInInput>(mutations.signIn);
  // const [getLoginUser] = useLazyQuery<UserEntity>(queries.getLoginUser);
  // const [signOut] = useMutation<LogoutResponse>(mutations.logout);
  // const { value: tokenStorage, updateValue: updateToken } =
  //   useStorage(TOKEN_STORAGE_KEY);
  // const authentification = (user: UserEntity | undefined, token?: string) => {
  //   if (token) updateToken(token);
  //   if (user) setUser(user);
  // };
  // const handleSignUp = async (variables: SignUpInput): Promise<void> => {
  //   signUp({ variables })
  //     .then((signResponse) => {
  //       authentification(
  //         signResponse.data?.user,
  //         signResponse.data?.refreshToken
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // const handleSignIn = async (variables: SignInInput): Promise<void> => {
  //   signIn({ variables })
  //     .then((signResponse) => {
  //       authentification(
  //         signResponse.data?.user,
  //         signResponse.data?.refreshToken
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // const handleAuthByToken = async (): Promise<void> => {
  //   getLoginUser()
  //     .then((logUserResponse) => {
  //       authentification(logUserResponse.data);
  //     })
  //     .catch((error) => {
  //       handleSignOut();
  //       console.error(error);
  //     });
  // };
  // const handleSignOut = async (): Promise<void> => {
  //   signOut()
  //     .then(() => {
  //       setUser(undefined);
  //       updateToken("");
  //     })
  //     .catch(console.log);
  // };
  // return {
  //   token: tokenStorage,
  //   user,
  //   onSignUp: handleSignUp,
  //   onSignIn: handleSignIn,
  //   sessionLogin: handleAuthByToken,
  //   onSignOut: handleSignOut,
  // };
};
