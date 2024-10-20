import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { GodotCanvas } from "./components/GodotCanvas.tsx";
import "./assets/css/main.css";
import { routes, useRoute } from "./routes.ts";
import { HomePage } from "./components/HomePage.tsx";
import { useEffect } from "react";
import { HomeIcon } from "./components/icons/icons.tsx";

export function App() {
  const route = useRoute();

  return (
    <Stack
      gap={0}
      overflow="hidden"
      bgColor="#0c0d14"
      width="100vw"
      height="100vh"
    >
      <HStack padding="10px" bgColor="#232433">
        <Button
          height="50px"
          _hover={{ bgColor: "#6842ff" }}
          borderRadius="2em"
          bgColor={route.name === "home" ? "#6842ff" : "transparent"}
          variant="ghost"
          onClick={() => routes.home().push()}
        >
          <Flex gap="5px">
            <HomeIcon width="40px" height="40px" />
            <Text fontSize="35px">Home</Text>
          </Flex>
        </Button>
      </HStack>
      <>
        {route.name === "home" && <HomePage />}
        {route.name === "game" && <GodotCanvas />}
        {route.name === false && <FallbackPage />}
      </>
    </Stack>
  );
}

function FallbackPage() {
  useEffect(() => {
    routes.home().replace();
  }, []);

  return null;
}
