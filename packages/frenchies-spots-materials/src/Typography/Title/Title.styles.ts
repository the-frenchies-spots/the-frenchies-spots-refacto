import { createStyles, DEFAULT_THEME as themeO } from "@mantine/core";
import { TypographyVariants } from "../Typography";
import { fonts } from "../../utils";
import { CustomTheme } from "../../FrSpotsMaterialProvider";

export const useStyles = createStyles(
  (theme, variant: keyof typeof TypographyVariants) => {
    let title = {};

    switch (variant) {
      case "h1":
        title = {
          ...fonts["Montserrat-Bold"].style,
          fontSize: 40,
          color: theme.colors.darkPurple[0],
        };
        break;
      case "h2":
        title = {
          ...fonts["Montserrat-Bold"].style,
          fontSize: 18,
          color: "#8F8FD9",
        };
        break;
      default:
        title = {};
    }

    return { title };
  }
);
