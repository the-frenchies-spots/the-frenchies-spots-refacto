import React from "react";

import { useRouter } from "next/router";
import { Box } from "@frenchies-spots/material";

const SpotDetailPage = () => {
  const router = useRouter();
  const { spotId } = router.query;

  return <Box>{spotId}</Box>;
};

export default SpotDetailPage;
