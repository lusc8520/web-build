import { Button, Flex, VStack } from "@chakra-ui/react";
import { routes } from "../routes.ts";
import { PlayIcon } from "./icons/icons.tsx";

export function HomePage() {
  return (
    <VStack flexGrow={1} justify="center">
      <Button
        onClick={() => routes.game({ game: "empty-scene" }).push()}
        fontSize="25px"
        borderRadius="2em"
        bgColor="#6842ff"
        _hover={{ bgColor: "#7452fa", transform: "scale(1.5)" }}
      >
        <Flex color="white" align="center" gap="8px">
          Play Now
          <PlayIcon width="30px" height="30px" />
        </Flex>
      </Button>
    </VStack>
  );
}
