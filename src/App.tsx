import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { GodotCanvas } from "./components/GodotCanvas.tsx";
import "./assets/css/main.css";
import { routes, useRoute } from "./routes.ts";
import { HomePage } from "./components/HomePage.tsx";
import { useEffect } from "react";

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
        <Text fontSize="30px">Hello lil bro</Text>
        <Button onClick={() => routes.home().push()}>Home</Button>
      </HStack>
      <>
        {route.name === "home" && <HomePage />}
        {route.name === "game" && <GodotCanvas />}
        {route.name === false && <FallbackPage />}
      </>
      {/*<GodotCanvas />*/}
    </Stack>
  );
}

function FallbackPage() {
  useEffect(() => {
    routes.home().replace();
  }, []);

  return null;
}
