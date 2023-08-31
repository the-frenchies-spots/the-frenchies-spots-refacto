import { useContext, useState } from "react";

import { mutations, queries } from "@frenchies-spots/gql";
import { useMutation, useLazyQuery } from "@apollo/client";

import type {
  UserEntity,
  SignResponse,
  SignInInput,
  SignUpInput,
  LogoutResponse,
  MutationSignUpArgs,
  Mutation,
  MutationSignInArgs,
} from "@frenchies-spots/gql";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

import useStorage from "./use-storage";
import { AuthContext } from "@/context";

export const useInitAuth = () => {
  const [user, setUser] = useState<UserEntity>();
  const [signUp, { loading: signupLoading }] = useMutation<
    { signUp: SignResponse },
    MutationSignUpArgs
  >(mutations.signUp);

  const [signIn, { loading: signinLoading }] = useMutation<
    { signIn: SignResponse },
    MutationSignInArgs
  >(mutations.signIn);

  const [getLoginUser] = useLazyQuery<UserEntity>(queries.getLoginUser);
  const [signOut, { loading: signoutLoading }] = useMutation<LogoutResponse>(
    mutations.logout
  );

  const { value: tokenStorage, updateValue: updateToken } =
    useStorage(TOKEN_STORAGE_KEY);

  const authentification = (user: UserEntity | undefined, token?: string) => {
    if (token) updateToken(token);
    if (user) setUser(user);
  };

  const handleSignUp = async (signUpInput: SignUpInput): Promise<void> => {
    signUp({ variables: { signUpInput } })
      .then((signResponse) => {
        authentification(
          signResponse?.data?.signUp?.user,
          signResponse?.data?.signUp?.refreshToken
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignIn = async (signInInput: SignInInput): Promise<void> => {
    signIn({ variables: { signInInput } })
      .then((signResponse) => {
        console.log({ signResponse });
        authentification(
          signResponse?.data?.signIn?.user,
          signResponse?.data?.signIn?.refreshToken
        );
      })
      .catch((error) => {
        console.log({ error });

        console.error(error);
      });
  };

  const handleAuthByToken = async (): Promise<void> => {
    getLoginUser()
      .then((logUserResponse) => {
        authentification(logUserResponse.data);
      })
      .catch((error) => {
        handleSignOut();
        console.error(error);
      });
  };

  const handleSignOut = async (): Promise<void> => {
    signOut()
      .then(() => {
        setUser(undefined);
        updateToken("");
      })
      .catch(console.log);
  };

  return {
    token: tokenStorage,
    user,
    loading: signupLoading || signinLoading || signoutLoading,
    onSignUp: handleSignUp,
    onSignIn: handleSignIn,
    refresh: handleAuthByToken,
    onSignOut: handleSignOut,
  };
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};

export const useAuth = () => {
  const {
    currentUser,
    loading,
    processSignUp,
    processSignIn,
    processSignOut,
    refresh,
  } = useAuthContext();

  const handleSignUp = (signUpInput: SignUpInput) => {
    if (typeof processSignUp === "function") {
      processSignUp(signUpInput);
    }
  };

  const handleSignIn = (signInInput: SignInInput) => {
    if (typeof processSignIn === "function") {
      processSignIn(signInInput);
    }
  };

  const handleSignOut = () => {
    if (typeof processSignOut === "function") {
      processSignOut();
    }
  };

  const handleRefresh = () => {
    if (typeof refresh === "function") {
      refresh();
    }
  };

  return {
    user: currentUser,
    loading,
    authenticated: currentUser !== undefined,
    refresh: handleRefresh,
    onSignUp: handleSignUp,
    onSignIn: handleSignIn,
    onSignOut: handleSignOut,
  };
};
