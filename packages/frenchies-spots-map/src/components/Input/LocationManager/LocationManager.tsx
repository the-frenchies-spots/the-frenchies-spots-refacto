import React, { useState } from "react";

import { Box, Stack } from "@frenchies-spots/material";
import { AutocompleteAddress } from "./../AutocompleteAddress/AutocompleteAddress";
import { LocationPicker } from "./../LocationPicker/LocationPicker";
import { SelectRegion } from "../SelectRegion/SelectRegion";
import { TLocation } from "../../../hooks/use-geocoding/use-geocoding";
import { useRegion } from "../../../hooks";

type TLocationData = { location: TLocation; codeRegion: string };

interface LocationManagerProps {
  value?: TLocationData;
  onChange?: (newValue: TLocationData) => void;
}

export const LocationManager = ({ value, onChange }: LocationManagerProps) => {
  const { getCodeRegionByCoordinate } = useRegion();
  const [locationData, setLocationData] = useState<TLocationData | undefined>(
    value
  );

  const handleChange = async (newData: TLocation) => {
    const { lat, lng } = newData.coordinates;
    const codeRegion = await getCodeRegionByCoordinate(lat, lng);
    const result = { location: newData, codeRegion };
    if (typeof onChange === "function") {
      onChange(result);
    }
    setLocationData(result);
  };

  return (
    <Stack>
      <AutocompleteAddress
        value={locationData?.location?.value}
        onChange={handleChange}
      />
      <Box h={300}>
        <LocationPicker
          value={locationData?.location}
          onChange={handleChange}
        />
      </Box>
      <SelectRegion
        value={locationData?.codeRegion}
        placeholder="region"
        readOnly
      />
    </Stack>
  );
};
