/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";

import { useRouter } from "next/router";
import { Box, Log } from "@frenchies-spots/material";
import { useLazyQuery } from "@apollo/client";
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

  const [getSpotByPk, { data, loading }] = useLazyQuery<
    { spotByPk: SpotEntity },
    QuerySpotByPkArgs
  >(queries.spotByPk);

  useEffect(() => {
    if (spotId !== undefined) {
      getSpotByPk({
        variables: { id: `${spotId}` },
      });
    }
  }, [spotId]);

  return (
    <Box>
      <Log value={spotId} />
      <Log value={data} />
    </Box>
  );
};

export default SpotDetailPage;

SpotDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
