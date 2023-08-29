import React from "react";
import { Box, Button } from "@frenchies-spots/material";

import { queries, SpotEntity, SpotsInput } from "@frenchies-spots/gql";
import { useQuery } from "@apollo/client";

const Spot = () => {
  const { data } = useQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, {
    variables: { spotsInput: { searchValue: "" } },
  });

  return (
    <Box>
      <Button>Spot</Button>
      {data?.spots?.map((spot) => {
        return (
          <pre key={spot.id}>
            <code>{JSON.stringify(spot, null, 1)}</code>
            <hr />
          </pre>
        );
      })}
    </Box>
  );
};

export default Spot;
