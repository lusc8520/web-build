import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
