const fs = require("fs");
const path = require("path");

export const queries = {
  getLoginUser: fs.readFileSync(
    path.join(__dirname, "getLoginUser.gql"),
    "utf8"
  ),
  spotByPk: fs.readFileSync(path.join(__dirname, "spotByPk.gql"), "utf8"),
  spots: fs.readFileSync(path.join(__dirname, "spots.gql"), "utf8"),
  spotsProfile: fs.readFileSync(
    path.join(__dirname, "spotsProfile.gql"),
    "utf8"
  ),
  tagByPk: fs.readFileSync(path.join(__dirname, "tagByPk.gql"), "utf8"),
  tags: fs.readFileSync(path.join(__dirname, "tags.gql"), "utf8"),
};
