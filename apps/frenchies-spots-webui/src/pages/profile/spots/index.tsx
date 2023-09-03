import React from "react";

import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";

const ProfileSpots = () => {
  return <div>ProfileSpots</div>;
};

export default ProfileSpots;

ProfileSpots.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
