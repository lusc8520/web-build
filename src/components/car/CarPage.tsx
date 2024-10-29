import { useCars } from "./CarContext.tsx";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRandomCar } from "./randomCar.ts";
import { useEffect, useState } from "react";
import { CarPicture } from "./car.ts";
import { LinkIcon, ReloadIcon, SaveIcon } from "../icons/icons.tsx";

export function CarPage() {
  const { result, fetchCar } = useRandomCar();
  const { saveCar } = useCars();

  const [isCar, setIsCar] = useState<CarPicture | undefined>(undefined);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <Stack justify="space-between" padding={3} flexGrow={1}>
      <Center flexDir="column" flexGrow={1}>
        <Stack width={["300px", "450px"]} gap={0}>
          <Flex height="25px" justify="end">
            {isCar != undefined && (
              <Flex
                onClick={() =>
                  window.open(
                    `https://cdn2.thecatapi.com/images/${isCar.id}.jpg`,
                  )
                }
                transition="color 0.15s"
                _hover={{ color: "lightgrey" }}
                paddingRight={1}
                gap={1}
                cursor="pointer"
                align="center"
                color="grey"
              >
                <Text color="inherit">View Original</Text>
                <LinkIcon />
              </Flex>
            )}
          </Flex>
          <Stack borderRadius="20px" bgColor="mainDark" padding={5} gap={5}>
            <Box
              alignSelf="stretch"
              aspectRatio="1/1"
              overflow="hidden"
              position="relative"
            >
              <CircularProgress
                color="mainLight"
                display={isCar ? "none" : "block"}
                isIndeterminate
                trackColor="white"
                position="absolute"
                top="50%"
                transform="translate(-50%, -50%)"
                left="50%"
                size={50}
              />
              {(() => {
                if (
                  result === undefined ||
                  result === "fetching" ||
                  !result.ok
                ) {
                  return null;
                }
                if (result.ok) {
                  return (
                    <Image
                      onLoad={() => {
                        console.warn(`car loaded. id: ${result.value.id}`);
                        setIsCar({ id: result.value.id });
                      }}
                      onError={() => {
                        console.error("image error :( refetching car...");
                        setIsCar(undefined);
                        fetchCar();
                      }}
                      height="100%"
                      width="100%"
                      loading="eager"
                      ignoreFallback={true}
                      objectFit="contain"
                      src={`https://cdn2.thecatapi.com/images/${result.value.id}.jpg`}
                    />
                  );
                }
              })()}
            </Box>
            <Flex gap={2}>
              <Button
                border="1px black solid"
                bgColor="#005188"
                _hover={{ bgColor: "#0070a1" }}
                height="40px"
                borderLeftRadius="20px"
                flexGrow={1}
                disabled={!isCar}
                onClick={() => {
                  setIsCar(undefined);
                  fetchCar();
                }}
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Text fontSize={["20px", "25px"]}>Fetch Car</Text>
                <ReloadIcon
                  display={["none", "block"]}
                  color="white"
                  fontSize="25px"
                />
              </Button>
              <Button
                border="1px black solid"
                bgColor="#008a48"
                _hover={{ bgColor: "#00ac69" }}
                height="40px"
                borderRightRadius="20px"
                flexGrow={1}
                disabled={!isCar}
                onClick={() => isCar && saveCar(isCar)}
                alignItems="center"
                justifyContent="space-evenly"
              >
                <SaveIcon
                  display={["none", "block"]}
                  color="white"
                  fontSize="25px"
                />
                <Text fontSize={["20px", "25px"]}>Save Car</Text>
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Center>
      <Flex>
        <Text>list here...</Text>
      </Flex>
    </Stack>
  );
}
