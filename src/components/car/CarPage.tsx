import { CarProvider } from "./CarContext.tsx";
import { Box } from "@chakra-ui/react";

export function CarPage() {
  return (
    <CarProvider>
      <Box>cars</Box>
    </CarProvider>
  );
}
