import { gql } from "@apollo/client";

export const spotByPk = gql`
  query spotByPk($id: String!) {
    spotByPk(id: $id) {
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
      ratings {
        id
        profileId
        rate
        spotId
      }
      region
      spotPicture {
        id
        spotId
        url
      }
      tags {
        category
        id
        name
        tagPictureUrl
      }
    }
  }
`;
