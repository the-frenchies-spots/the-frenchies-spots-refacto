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
        tag {
          category
          id
          name
          tagPictureUrl
        }
      }
    }
  }
`;
