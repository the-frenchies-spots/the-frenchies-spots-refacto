import { gql } from "@apollo/client";

export const spotsProfile = gql`
  query spotsProfile {
    spotsProfile {
      createdAt
      id
      profile {
        createdAt
        favorites {
          createdAt
          id
          profile {
            createdAt
            gamePoint
            id
            photoUrl
            pseudo
            ratings {
              createdAt
              id
              profileId
              rate
              spotId
              updatedAt
            }
            spots {
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
            updatedAt
            user {
              createdAt
              email
              hashedPassword
              hashedRefreshToken
              id
              role
              updatedAt
            }
            userId
          }
          profileId
          spot {
            address
            averageRating
            category
            createdAt
            description
            favorites {
              createdAt
              id
              profileId
              spotId
              updatedAt
            }
            id
            isCanPark
            isHidden
            lat
            lng
            location
            name
            profile {
              createdAt
              gamePoint
              id
              photoUrl
              pseudo
              updatedAt
              userId
            }
            profileId
            ratings {
              createdAt
              id
              profileId
              rate
              spotId
              updatedAt
            }
            region
            spotPicture {
              createdAt
              id
              spotId
              updatedAt
              url
            }
            tags {
              category
              createdAt
              id
              name
              tagPictureUrl
              updatedAt
            }
            updatedAt
          }
          spotId
          updatedAt
        }
        gamePoint
        id
        photoUrl
        pseudo
        updatedAt
        userId
      }
      profileId
      spot {
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
      spotId
      updatedAt
    }
  }
`;
