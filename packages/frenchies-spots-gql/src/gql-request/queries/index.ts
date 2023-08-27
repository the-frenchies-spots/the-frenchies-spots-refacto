import { DocumentNode } from "graphql";
import { loader } from "graphql.macro";

export const queries: Record<string, DocumentNode> = {
  getLoginUser: loader("./getLoginUser.gql"),
  spotByPk: loader("./spotByPk.gql"),
  spots: loader("./spots.gql"),
  spotsProfile: loader("./spotsProfile.gql"),
  tagByPk: loader("./tagByPk.gql"),
  tags: loader("./tags.gql"),
};
