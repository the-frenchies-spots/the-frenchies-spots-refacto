import React, { ReactNode } from "react";

import { Box, SwiperFormLayout } from "@frenchies-spots/material";
import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";

interface SwiperFrameProps {
  children: ReactNode;
}

export const SwiperFrame = (props: SwiperFrameProps) => {
  const { children } = props;
  return (
    <SwiperFormLayout
      navigation={(swiper) => <SwiperNavigation swiper={swiper} />}
    >
      {children}
    </SwiperFormLayout>
  );
};
