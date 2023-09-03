import React, { ReactElement } from "react";
import { PageLayout, SpotEditionForm } from "../../../components";

const SpotUpdatePage = () => {
  // return <SpotEditionForm />;
  return <></>;
};

export default SpotUpdatePage;

SpotUpdatePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
