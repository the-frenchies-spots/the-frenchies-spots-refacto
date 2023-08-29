import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { API_URL } from "../src/constants";

const TOKEN_STORAGE_KEY = process.env.NEXT_TOKEN_STORAGE_KEY || "";

console.log({ API_URL });

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(TOKEN_STORAGE_KEY) || "";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Spot: {
      fields: {
        favorites: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const authHttpLink = authLink.concat(httpLink);

export const client = new ApolloClient({
  link: authHttpLink,
  cache: cache,
});
