import React, { useEffect, useState } from "react";

import {
  TLocation,
  useGeocoding,
} from "../../../hooks/use-geocoding/use-geocoding";
import { useMap } from "../../../hooks";
import { Map } from "../../Map/Map";
import { MapMarker } from "../../Marker";
import { Box, Group, Text } from "@frenchies-spots/material";
import { useStyles } from "./LocarionPicker.styles";

interface LocationPickerProps {
  onChange?: (value: TLocation) => void;
  value?: TLocation | undefined;
}

export const LocationPicker = (props: LocationPickerProps) => {
  const { value, onChange } = props;
  const [locationValue, setLocationValue] = useState<TLocation | undefined>(
    value
  );

  const { classes } = useStyles();
  const { searchPlace } = useGeocoding();
  const { viewport, coordinates, onViewportChange, onCoordinateClick } =
    useMap();

  useEffect(() => {
    setLocationValue(value);
  }, [value]);

  useEffect(() => {
    if (typeof coordinates !== "undefined") {
      const { lat, lng } = coordinates;
      searchPlace(`${lng},${lat}`).then((address) => {
        const res = { coordinates, value: address.placeName };
        setLocationValue(res);
        if (typeof onChange === "function") {
          onChange(res);
        }
      });
    }
  }, [coordinates]);

  return (
    <>
      <Map
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
      >
        {locationValue?.coordinates && (
          <MapMarker
            lat={locationValue.coordinates.lat}
            lng={locationValue.coordinates.lng}
          />
        )}
      </Map>
      {/* <Group>
        <Text>Lat: </Text>
        <Text>{locationValue?.coordinates.lat || 0}</Text>
        <Text> Lng: </Text>
        <Text>{locationValue?.coordinates.lng || 0}</Text>
      </Group> */}
    </>
  );
};

export default LocationPicker;
