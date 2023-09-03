import React from "react";

import { Text } from "@frenchies-spots/material";

import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";

const FavoritPage = () => {
  return <Text>FavoritPage</Text>;
};

export default FavoritPage;

FavoritPage.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
