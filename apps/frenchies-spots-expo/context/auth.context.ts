import { createContext } from "react";

import type {
  UserEntity,
  SignInInput,
  SignUpInput,
} from "@frenchies-spots/gql";

interface AuthContextData {
  token: string | undefined;
  currentUser: UserEntity | undefined;
  processSignIn: ((variables: SignInInput) => Promise<void>) | undefined;
  processSignUp: ((variables: SignUpInput) => Promise<void>) | undefined;
  processSignOut: (() => Promise<void>) | undefined;
}

const defaultContext: AuthContextData = {
  token: undefined,
  currentUser: undefined,
  processSignIn: undefined,
  processSignUp: undefined,
  processSignOut: undefined,
};

const AuthContext = createContext<AuthContextData>(defaultContext);

export default AuthContext;
