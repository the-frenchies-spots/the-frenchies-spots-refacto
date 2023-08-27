import { gql, DocumentNode } from "@apollo/client";

import { getLoginUser } from "./getLoginUser";
import { spotByPk } from "./spotByPk";
import { spots } from "./spots";
import { spotsProfile } from "./spotsProfile";
import { tagByPk } from "./tagByPk";
import { tags } from "./tags";

export const queries: Record<string, DocumentNode> = {
  getLoginUser,
  spotByPk,
  spots,
  spotsProfile,
  tagByPk,
  tags,
};
