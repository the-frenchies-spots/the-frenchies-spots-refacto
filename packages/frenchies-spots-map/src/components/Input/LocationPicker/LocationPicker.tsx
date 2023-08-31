import React, { useEffect, useState } from "react";

import { useGeocoding } from "../../../hooks/use-geocoding/use-geocoding";
import { useMap } from "../../../hooks";
import { TCoordinate } from "../../../types";
import { Map } from "../../Map/Map";
import { MapMarker } from "../../Marker";
import { Box, Group, Text } from "@frenchies-spots/material";
import { useStyles } from "./LocarionPicker.styles";

type TMapLocation = { coordinate: TCoordinate; address: string };

interface LocationPickerProps {
  onChange?: (value: TMapLocation) => void;
  value?: TMapLocation | undefined;
}

export const LocationPicker = (props: LocationPickerProps) => {
  const { value, onChange } = props;
  const [locationValue, setLocationValue] = useState<TMapLocation | undefined>(
    value
  );

  const { classes } = useStyles();
  const { searchPlace } = useGeocoding();
  const { viewport, coordinate, onViewportChange, onCoordinateClick } =
    useMap();

  useEffect(() => {
    if (typeof coordinate !== "undefined") {
      const { lat, lng } = coordinate;
      searchPlace(`${lng},${lat}`).then((address) => {
        const res = { coordinate, address: address.placeName };
        setLocationValue(res);
        if (typeof onChange === "function") {
          onChange(res);
        }
      });
    }
  }, [coordinate]);

  return (
    <>
      {" "}
      <Map
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
      >
        {locationValue?.coordinate && (
          <MapMarker
            lat={locationValue.coordinate.lat}
            lng={locationValue.coordinate.lng}
          />
        )}
      </Map>
      <Group>
        <Text>Lat: </Text>
        <Text>{locationValue?.coordinate.lat || 0}</Text>
        <Text> Lng: </Text>
        <Text>{locationValue?.coordinate.lng || 0}</Text>
      </Group>
    </>
  );
};

export default LocationPicker;
