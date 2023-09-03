import React from "react";

import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
