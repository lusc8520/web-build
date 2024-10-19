import { GodotCanvas } from "./GodotCanvas";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider>
      <GodotCanvas />
    </ChakraProvider>
  );
}
