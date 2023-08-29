import { gql } from "@apollo/client";

export const spots = gql`
  query spots($spotsInput: SpotsInput!) {
    spots(spotsInput: $spotsInput) {
      address
      averageRating
      category
      createdAt
      description
      id
      isCanPark
      isHidden
      lat
      lng
      location
      name
      profileId
      region
      updatedAt
    }
  }
`;
