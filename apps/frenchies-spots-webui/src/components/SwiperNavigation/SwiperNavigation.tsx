import React from "react";

import { Group, Button, SwiperType } from "@frenchies-spots/material";

interface SwiperNavigationProps {
  swiper: SwiperType;
}

const SwiperNavigation = (props: SwiperNavigationProps) => {
  const { swiper } = props;
  return (
    <Group grow>
      <Button variant="text" onClick={() => swiper.slidePrev()}>
        Retour
      </Button>
      <Button onClick={() => swiper.slideNext()}>Suivant</Button>
    </Group>
  );
};

export default SwiperNavigation;
