import React from "react";

import { SpotEntity } from "@frenchies-spots/gql";
import { TCoordinate } from "@frenchies-spots/map";
import { SPOTS_DISPLAY_MODE } from "@/enum/spots-display-mode.enum";

import SpotsMapUi from "./SpotsMapUi/SpotsMapUi";

interface SpotsUi {
  spotList: SpotEntity[] | undefined;
  mode: SPOTS_DISPLAY_MODE;
  userPosition: TCoordinate | null;
}

const SpotsUi = ({ spotList, userPosition, mode }: SpotsUi) => {
  switch (mode) {
    case SPOTS_DISPLAY_MODE.SPOTS_MODE:
      return <SpotsMapUi spotList={spotList} userPosition={userPosition} />;
    case SPOTS_DISPLAY_MODE.MAP_MODE:
      return <SpotsMapUi spotList={spotList} userPosition={userPosition} />;
    case SPOTS_DISPLAY_MODE.COOPERATION_MODE:
      return <SpotsMapUi spotList={spotList} userPosition={userPosition} />;
    default:
      return <p>Error</p>;
  }
};

export default SpotsUi;
