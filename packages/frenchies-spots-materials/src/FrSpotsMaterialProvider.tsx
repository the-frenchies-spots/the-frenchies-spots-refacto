import { ReactNode } from "react";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";

const customTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    lightBluePurple: [
      "#E3E3FA",
      "#C0C0E9",
      "#9E9ED8",
      "#7B7BC8",
      "#5858B7",
      "#3636A7",
      "#131396",
    ],
    bluePurple: [
      "#8F8FD9",
      "#7575C6",
      "#5B5BB4",
      "#4141A1",
      "#27278F",
      "#0D0D7C",
      "#000069",
    ],
    purple: [
      "#A480A6",
      "#936E94",
      "#825C83",
      "#714A71",
      "#603860",
      "#4F264F",
      "#3E143E",
    ],
    darkPurple: [
      "#3F3979",
      "#362F6D",
      "#2C2561",
      "#221B55",
      "#18114A",
      "#0E073E",
      "#040034",
    ],
    yellow: [
      "#EBA701",
      "#D8A400",
      "#C59400",
      "#B28200",
      "#9F7100",
      "#8D5F00",
      "#7A4D00",
    ],
    red: [
      "#D73636",
      "#C42929",
      "#B11C1C",
      "#9F0F0F",
      "#8C0202",
      "#790000",
      "#660000",
    ],
    brown: [
      "#B68973",
      "#A67B66",
      "#946D59",
      "#825E4B",
      "#714F3E",
      "#5F4131",
      "#4E3223",
    ],
    darkGrey: [
      "#707070",
      "#595959",
      "#434343",
      "#2C2C2C",
      "#161616",
      "#000000",
      "#000000",
    ],
    greyDisable: [
      "#BBBBBB",
      "#A5A5A5",
      "#8E8E8E",
      "#787878",
      "#616161",
      "#4B4B4B",
      "#343434",
    ],
    lightGrey: [
      "#E4E4E4",
      "#D0D0D0",
      "#BDBDBD",
      "#A9A9A9",
      "#959595",
      "#828282",
      "#6E6E6E",
    ],
    grey: [
      "#ECECEC",
      "#D9D9D9",
      "#C6C6C6",
      "#B2B2B2",
      "#9F9F9F",
      "#8C8C8C",
      "#787878",
    ],
    superLightGrey: [
      "#FBFBFB",
      "#F2F2F2",
      "#E9E9E9",
      "#E0E0E0",
      "#D7D7D7",
      "#CECECE",
      "#C5C5C5",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
};

export type CustomTheme = typeof customTheme;

interface FrSpotsMaterialProviderProps {
  children: ReactNode;
}

export const FrSpotsMaterialProvider = ({
  children,
}: FrSpotsMaterialProviderProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      {children}
    </MantineProvider>
  );
};

FrSpotsMaterialProvider.displayName =
  "@frenchies-spots/material/FrSpotsMaterialProvider";
