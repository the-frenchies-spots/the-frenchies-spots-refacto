import React from "react";

import { Group, Button } from "@frenchies-spots/material";
import type { Swiper } from "swiper/types";

interface SwiperNavigationProps {
  swiper: Swiper;
  disabled?: boolean;
}

const SwiperNavigation = (props: SwiperNavigationProps) => {
  const { swiper, disabled = false } = props;
  return (
    <Group grow>
      <Button variant="text" onClick={() => swiper.slidePrev()}>
        Retour
      </Button>
      <Button onClick={() => swiper.slideNext()} disabled={disabled}>
        Suivant
      </Button>
    </Group>
  );
};

export default SwiperNavigation;
