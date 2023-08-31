import React, { useState } from "react";
import { useRegion } from "../../../hooks/use-region/use-region";
import { Select } from "@frenchies-spots/material";

interface SelectRegionProps {
  value?: string | null;
  onChange?: (newValue: string | null) => void;
}

export const SelectRegion = (props: SelectRegionProps) => {
  const { value = null, onChange } = props;
  const [selectRegion, setSelectRegion] = useState<string | null>(value);

  const { regions } = useRegion();

  const handleRegionChange = (codeRegion: string | null) => {
    setSelectRegion(codeRegion);
    if (typeof onChange === "function") {
      onChange(codeRegion);
    }
  };

  return (
    <Select
      value={selectRegion}
      onChange={handleRegionChange}
      label="Select Region"
      placeholder="Pick one region"
      data={regions.map((region) => ({
        value: region.code,
        label: region.nom,
      }))}
    />
  );
};
