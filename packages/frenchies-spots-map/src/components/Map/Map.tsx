import React, { useState, useRef, type ReactNode } from "react";
import ReactMapGL from "react-map-gl";
import { TViewport, TCoordinate } from "../../types";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  viewport: TViewport;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  children?: ReactNode;
}

export const Map = (props: MapProps) => {
  const { children, viewport, onViewportChange, onCoordinateClick } = props;
  const [loaded, setLoaded] = useState(false);

  const handleViewportChange = (viewState: TViewport) => {
    if (typeof onViewportChange === "function") {
      onViewportChange(viewState);
    }
  };

  const handleCoordinateClick = (coordinate: TCoordinate) => {
    if (typeof onCoordinateClick === "function") {
      onCoordinateClick(coordinate);
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      onMove={(evt) => handleViewportChange(evt.viewState)}
      onClick={(evt) => handleCoordinateClick(evt.lngLat)}
      onLoad={() => setLoaded(true)}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </ReactMapGL>
  );
};
