import React from "react";

import { Rating, Group, Text } from "@frenchies-spots/material";

const SpotRating = () => {
  return (
    <Group>
      <Rating fractions={2} defaultValue={1.5} color="lime" size="lg" />
      <Text>Note: 3/5 - (10 votes)</Text>
    </Group>
  );
};

export default SpotRating;
