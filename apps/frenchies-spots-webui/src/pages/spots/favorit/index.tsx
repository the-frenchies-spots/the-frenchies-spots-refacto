import React, { ReactElement } from "react";

import { Text } from "@frenchies-spots/material";

import { PageLayout } from "../../../components";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";

const FavoritPage = () => {
  return <Text>FavoritPage</Text>;
};

export default FavoritPage;

FavoritPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
