import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: { position: "relative" },
  spotMenu: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
  },
}));
