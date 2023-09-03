import React, { ReactElement, useState } from "react";

import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Box, Button, Log } from "@frenchies-spots/material";
import { queries, SpotEntity, SpotsInput } from "@frenchies-spots/gql";
import { useGeoloc } from "@frenchies-spots/map";

import SpotsUi from "@/components/SpotsUi/SpotsUi";
import { SPOTS_DISPLAY_MODE } from "@/enum/spots-display-mode.enum";
import { PageLayout } from "./../../components/Layout/PageLayout/PageLayout";

const SpotsPage = () => {
  const [displayMode, setDisplayMode] = useState<SPOTS_DISPLAY_MODE>(
    SPOTS_DISPLAY_MODE.MAP_MODE
  );
  const router = useRouter();
  const { userPosition } = useGeoloc();

  const { data } = useQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, {
    variables: { spotsInput: { searchValue: "" } },
  });

  const handleDetailClick = (id: string) => {
    router.push(`/spots/${id}`);
  };

  return (
    <Box w="100%" h="100vh">
      <SpotsUi
        mode={displayMode}
        userPosition={userPosition}
        spotList={data?.spots}
      />
    </Box>
  );
};

SpotsPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default SpotsPage;
