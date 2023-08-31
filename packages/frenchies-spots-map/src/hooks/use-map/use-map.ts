import React, { useState, useCallback } from "react";
import { TViewport, TCoordinate } from "../../types";

const franceViewPort = {
  bearing: 0,
  latitude: 46.851348046414415,
  longitude: 3.2371168456396333,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 4.144539557736261,
};

export const useMap = (defaultViewport = franceViewPort) => {
  const [localePlace, setLocalePlace] = useState({});
  const [viewport, setViewport] = useState<TViewport>(defaultViewport);
  const [coordinates, setCoordinates] = useState<TCoordinate | undefined>(
    undefined
  );

  return {
    localePlace,
    viewport,
    onViewportChange: setViewport,
    coordinates,
    onCoordinateClick: setCoordinates,
  };
};
