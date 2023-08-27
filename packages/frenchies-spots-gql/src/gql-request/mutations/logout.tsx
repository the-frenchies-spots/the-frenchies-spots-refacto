import { gql } from "@apollo/client";

export const logout = gql`
  mutation logout($id: String!) {
    logout(id: $id) {
      loggedOut
    }
  }
`;
