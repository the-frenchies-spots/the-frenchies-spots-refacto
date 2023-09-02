import React, { ReactNode } from "react";

import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";

import { SwiperFormLayout } from "../SwiperForm/SwiperFormLayout/SwiperFormLayout";

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
