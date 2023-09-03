import React, { ReactElement } from "react";

import { Text } from "@frenchies-spots/material";

import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";

const FavoritPage = () => {
  return <Text>FavoritPage</Text>;
};

export default FavoritPage;

FavoritPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
