import { gql, DocumentNode } from "@apollo/client";

import { createOrUpdateRating } from "./createOrUpdateRating";
import { deleteSpot } from "./deleteSpot";
import { deleteTag } from "./deleteTag";
import { insertSpot } from "./insertSpot";
import { insertTag } from "./insertTag";
import { logout } from "./logout";
import { signIn } from "./signIn";
import { signUp } from "./signUp";
import { toggleFavorite } from "./toggleFavorite";
import { updateSpot } from "./updateSpot";
import { updateTag } from "./updateTag";

export const mutations: Record<string, DocumentNode> = {
  createOrUpdateRating,
  deleteSpot,
  deleteTag,
  insertSpot,
  insertTag,
  logout,
  signIn,
  signUp,
  toggleFavorite,
  updateSpot,
  updateTag,
};
