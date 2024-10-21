import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    main: "#6842ff",
    mainLight: "#7857ff",
    backgroundLight: "#232433",
    background: "#0c0d14",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
        fontFamily: "Sniglet",
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Sniglet",
      },
    },
  },
});
