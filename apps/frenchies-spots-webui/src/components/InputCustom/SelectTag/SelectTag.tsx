import React, { useEffect, useState } from "react";

import { SelectTagItem, type TTagItem } from "./select-tag-item";
import { useStyles } from "./SelectTag.styles";
import { Group, Box } from "@frenchies-spots/material";

export interface SelectTagProps {
  list?: TTagItem[];
  value: string[];
  onChange?: (value: string[]) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const SelectTag = (props: SelectTagProps) => {
  const {
    style = {},
    list = [],
    value = [],
    onChange,
    disabled = false,
  } = props;

  const { classes } = useStyles();
  const [tags, setTags] = useState<string[]>(value);

  const handleChange = (tagId: string) => {
    if (!disabled)
      setTags((current) => {
        let tagList = [...current];
        const currTagIdx = tagList.indexOf(tagId);
        if (currTagIdx != -1) {
          tagList.splice(currTagIdx, 1);
        } else {
          tagList.push(tagId);
        }
        if (typeof onChange === "function") {
          onChange([...tagList]);
        }
        return [...tagList];
      });
  };

  useEffect(() => {
    if (!disabled) setTags(value);
  }, [value]);

  return (
    <Group p="md">
      {list.map((selectTagItem, index) => {
        const { id, name, tagPictureUrl, category } = selectTagItem;
        return (
          <Box key={index} className={classes.container}>
            <SelectTagItem
              id={id}
              name={name}
              tagPictureUrl={tagPictureUrl}
              category={category}
              selectedTags={tags}
              disabled={disabled}
              onChange={handleChange}
            />
          </Box>
        );
      })}
    </Group>
  );
};
