import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    main: "#6842ff",
    mainLight: "#7857ff",
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
