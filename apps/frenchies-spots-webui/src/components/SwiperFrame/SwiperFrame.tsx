import React, { ReactNode } from "react";

import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";

import { SwiperFormLayout } from "../SwiperForm/SwiperFormLayout/SwiperFormLayout";

interface SwiperFrameProps {
  children: ReactNode;
  disabled?: boolean;
}

export const SwiperFrame = (props: SwiperFrameProps) => {
  const { children, disabled = false } = props;
  return (
    <SwiperFormLayout
      navigation={(swiper) => (
        <SwiperNavigation disabled={disabled} swiper={swiper} />
      )}
    >
      {children}
    </SwiperFormLayout>
  );
};
