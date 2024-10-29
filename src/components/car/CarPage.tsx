import { useCars } from "./CarContext.tsx";
import {
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
import { ReloadIcon, SaveIcon } from "../icons/icons.tsx";

export function CarPage() {
  const { result, fetchCar } = useRandomCar();
  const { saveCar } = useCars();

  const [isCar, setIsCar] = useState<CarPicture | undefined>(undefined);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <Center flexGrow={1}>
      <Stack
        borderRadius="20px"
        border="0.1px solid grey"
        bgColor="mainDark"
        padding={5}
        gap={5}
      >
        <Center
          overflow="hidden"
          height="300px"
          width="500px"
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
            if (result === undefined || result === "fetching" || !result.ok) {
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
        </Center>
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
            justifyContent="end"
            gap="25%"
          >
            <Text fontSize="25px">Fetch Car</Text>
            <ReloadIcon color="white" fontSize="25px" />
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
            gap="25%"
            justifyContent="start"
          >
            <SaveIcon color="white" fontSize="25px" />
            <Text fontSize="25px">Save Car</Text>
          </Button>
        </Flex>
      </Stack>
    </Center>
  );
}
