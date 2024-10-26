import { useCars } from "./CarContext.tsx";
import { Button, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRandomCar } from "./randomCar.ts";
import { useEffect, useState } from "react";
import { CarPicture } from "./car.ts";

export function CarPage() {
  const { result, fetchCar } = useRandomCar();
  const { saveCar } = useCars();

  const [car, setCar] = useState<CarPicture | undefined>(undefined);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <Center flexGrow={1}>
      <Stack>
        {(() => {
          if (result === undefined) {
            return <Text>Undefined</Text>;
          }
          if (result === "fetching") {
            return <Text>Loading...</Text>;
          }
          if (!result.ok) {
            return <Text>Error...{result.value}</Text>;
          }
          if (result.ok) {
            return (
              <Image
                height="300px"
                onLoad={() => setCar({ id: result.value.id })}
                width="300px"
                onError={() => {
                  setCar(undefined);
                  fetchCar();
                }}
                objectFit="contain"
                src={`https://cdn2.thecatapi.com/images/${result.value.id}.jpg`}
              />
            );
          }
        })()}
        <Flex>
          <Button
            disabled={!car}
            onClick={() => {
              setCar(undefined);
              fetchCar();
            }}
          >
            Fetch
          </Button>
          <Button disabled={!car} onClick={() => car && saveCar(car)}>
            Save
          </Button>
        </Flex>
      </Stack>
    </Center>
  );
}
