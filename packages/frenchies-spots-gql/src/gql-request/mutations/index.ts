import { DocumentNode } from "graphql";
import { loader } from "graphql.macro";

export const mutations: Record<string, DocumentNode> = {
  createOrUpdateRating: loader("./createOrUpdateRating.gql"),
  deleteSpot: loader("./deleteSpot.gql"),
  deleteTag: loader("./deleteTag.gql"),
  insertSpot: loader("./insertSpot.gql"),
  insertTag: loader("./insertTag.gql"),
  logout: loader("./logout.gql"),
  signIn: loader("./signIn.gql"),
  signUp: loader("./signUp.gql"),
  toggleFavorite: loader("./toggleFavorite.gql"),
  updateSpot: loader("./updateSpot.gql"),
  updateTag: loader("./updateTag.gql"),
};
