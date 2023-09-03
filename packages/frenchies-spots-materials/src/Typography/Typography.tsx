import React, { ReactNode } from "react";
import { Sx, Text } from "@mantine/core";
import Title from "./Title/Title";

export enum TypographyVariants {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "body",
  "subTitle1",
  "subTitle2",
  "caption",
}

interface TypographyProps {
  children: ReactNode;
  variant?: keyof typeof TypographyVariants;
  sx?: Sx;
}

export const Typography = (props: TypographyProps) => {
  const { children, variant = "body", sx } = props;

  let Component: React.FC<{
    children: ReactNode;
    sx?: Sx;
    variant?: keyof typeof TypographyVariants;
  }>;

  switch (variant) {
    case "h1":
      Component = Title;
      break;
    // case TypographyVariants.H1:
    //   Component = Text;
    //   break;
    // case TypographyVariants.H1:
    //   Component = Text;
    //   break;
    default:
      Component = Title;
  }

  return (
    <Component sx={sx} variant={variant}>
      {children}
    </Component>
  );
};
