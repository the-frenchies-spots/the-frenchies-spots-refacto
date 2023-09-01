import React, { useRef, useState } from "react";
import { IconCameraFilled, IconCamera, IconX } from "@frenchies-spots/icon";
import { useStyles } from "./ImagePicker.styles";
import { Box, Image, Text } from "@mantine/core";

interface ImagePickerProps {
  index?: number;
  value?: string | null;
  style?: Record<string, string | number>;
  onImageChange?: (base64: string) => void;
  onImageDelete?: (index: number) => void;
  disablePreview?: boolean;
  isCardMode?: boolean;
}

export const ImagePicker = (props: ImagePickerProps) => {
  const {
    index,
    onImageChange,
    onImageDelete,
    value = null,
    disablePreview = false,
    isCardMode = false,
  } = props;

  const [selectedImage, setSelectedImage] = useState<string | null>(value);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };
  const { classes } = useStyles(isCardMode);

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e?.target?.files) {
      const file = e.target.files[0];
      if (file) {
        const base64 = URL.createObjectURL(file);
        setSelectedImage(base64);
        if (typeof onImageChange === "function") {
          onImageChange(base64);
        }
      }
    }
  };

  const handleImageDelete: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (typeof onImageDelete === "function") {
      if (index !== undefined) {
        onImageDelete(index);
      }
    }
  };

  return (
    <Box>
      <Box onClick={handleImageClick} className={classes.container}>
        {!disablePreview && selectedImage ? (
          <Image className={classes.image} src={selectedImage} />
        ) : (
          <IconCameraFilled size={40} style={{ color: "#8F8FD9" }} />
        )}
        {isCardMode && (
          <Box onClick={handleImageDelete} className={classes.deleteContainer}>
            <IconX size={16} color="white" />
          </Box>
        )}
      </Box>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
    </Box>
  );
};
