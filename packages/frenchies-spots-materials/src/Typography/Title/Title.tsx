import React from "react";

import {
  Title as MantineTitle,
  TitleProps as MantineTitleProps,
} from "@mantine/core";
import { useStyles } from "./Title.styles";
import { TypographyVariants } from "../Typography";

interface TitleProps extends Omit<MantineTitleProps, "variant"> {
  variant?: keyof typeof TypographyVariants;
}

const Title = (props: TitleProps) => {
  const { variant = "body", className, ...titleProps } = props;

  const { classes, cx } = useStyles(variant);

  return (
    <MantineTitle className={cx(classes.title, className)} {...titleProps} />
  );
};

export default Title;
