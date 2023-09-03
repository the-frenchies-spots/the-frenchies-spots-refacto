import React, { ReactElement } from "react";

import { useRouter } from "next/router";
import { Box, Log } from "@frenchies-spots/material";
import { useQuery } from "@apollo/client";
import {
  QuerySpotByPkArgs,
  SpotEntity,
  SpotsInput,
  queries,
} from "@frenchies-spots/gql";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";

const SpotDetailPage = () => {
  const router = useRouter();
  const { spotId } = router.query;

  const { data } = useQuery<{ spotByPk: SpotEntity }, QuerySpotByPkArgs>(
    queries.spotByPk,
    {
      variables: { id: `${spotId}` },
    }
  );

  return (
    <Box>
      <Log value={data} />
    </Box>
  );
};

export default SpotDetailPage;

SpotDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
