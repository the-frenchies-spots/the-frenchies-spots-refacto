import { router, useSegments } from "expo-router";
import React, { ReactNode } from "react";
import { AppProvider, GraphqlProvider } from "../provider";

interface TContext {
  signIn: () => void;
  signOut: () => void;
  user: boolean;
}

const AuthContext = React.createContext<TContext>({
  signIn: () => null,
  signOut: () => null,
  user: false,
});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: boolean) {
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function Provider({ children }: { children: ReactNode }) {
  const [user, setAuth] = React.useState<boolean>(false);

  useProtectedRoute(user);

  return (
    <GraphqlProvider>
      <AuthContext.Provider
        value={{
          signIn: () => setAuth(true),
          signOut: () => setAuth(false),
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    </GraphqlProvider>
  );
}
