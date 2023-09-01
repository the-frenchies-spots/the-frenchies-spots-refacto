import React, { useState, useCallback, useEffect } from "react";
import { Group, Box } from "@mantine/core";
import { ImagePicker } from "./ImagePicker";

export interface MultipleImagePickerProps {
  value?: string[];
  onChange?: (base64List: string[]) => void;
  style?: any;
}

export const MultipleImagePicker = (props: MultipleImagePickerProps) => {
  const { style = {}, onChange, value = [] } = props;

  const [base64List, setBase64List] = useState<string[]>(value);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(base64List);
    }
  }, [base64List]);

  const handleListChange = (base64: string, index: number) => {
    setBase64List((current) => {
      let imageList = [...current];
      imageList[index] = base64;
      return [...imageList];
    });
  };

  const handleImageChange = (base64: string) => {
    setBase64List((current) => [...current, base64]);
  };

  const handleDeleteImage = useCallback(
    (index: number) => {
      setBase64List((current) => current.filter((_, _idx) => _idx !== index));
    },
    [setBase64List]
  );

  return (
    <Group>
      <Box>
        <ImagePicker disablePreview={true} onImageChange={handleImageChange} />
      </Box>
      {base64List.map((picture, index) => {
        return (
          <Box key={index + Math.floor(Math.random() * 999999)}>
            <ImagePicker
              index={index}
              value={picture}
              isCardMode={true}
              onImageDelete={handleDeleteImage}
              onImageChange={(base64: string) =>
                handleListChange(base64, index)
              }
            />
          </Box>
        );
      })}
    </Group>
  );
};
