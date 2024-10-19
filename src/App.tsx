import { ChakraProvider, Flex, Stack, Text } from "@chakra-ui/react";
import { GodotCanvas } from "./GodotCanvas.tsx";
import { theme } from "./theme/theme.ts";
import "./assets/css/main.css";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack
        gap={0}
        overflow="hidden"
        bgColor="#0c0d14"
        width="100vw"
        height="100vh"
      >
        <Flex padding="10px" bgColor="#232433">
          <Text fontSize="30px">Hello lil bro</Text>
        </Flex>
        <GodotCanvas />
      </Stack>
    </ChakraProvider>
  );
}
