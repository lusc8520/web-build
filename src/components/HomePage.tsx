import { Button, Text, VStack } from "@chakra-ui/react";
import { routes } from "../routes.ts";

export function HomePage() {
  return (
    <VStack>
      <Text fontSize="25px">Home Page</Text>
      <Button onClick={() => routes.game({ game: "test" }).push()}>Hi</Button>
    </VStack>
  );
}
