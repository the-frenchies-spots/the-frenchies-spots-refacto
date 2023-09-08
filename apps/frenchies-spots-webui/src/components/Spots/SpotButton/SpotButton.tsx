import React, { ReactNode } from "react";
import { useStyles } from "./SpotButton.styles";
import { Flex, Loader } from "@frenchies-spots/material";
import type { FlexProps } from "@frenchies-spots/material";
import { IconHeart } from "@frenchies-spots/icon";

export interface SpotButtonProps extends Omit<FlexProps, "children"> {
  children: ReactNode;
  loading?: boolean;
}

const SpotButton = (props: SpotButtonProps) => {
  const { children, loading = false, className, ...other } = props;
  const { cx, classes } = useStyles();

  return (
    <Flex
      className={cx(classes.container, className)}
      justify="center"
      align="center"
      {...other}
    >
      {loading ? <Loader /> : children}
    </Flex>
  );
};

export default SpotButton;
