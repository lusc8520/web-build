import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/localStorage.ts";
import { CarPicture } from "./car.ts";

type CarContextData = {
  allCars: CarPicture[];
  fetchCar: () => void;
  setError: () => void;
};

const carUrl = "https://api.thecatapi.com/v1/images/search";

type CarFetchResult = "error" | "loading" | { id: string };

const CarContext = createContext<CarContextData>({
  allCars: [],
  fetchCar: () => {},
  setError: () => {},
});

export function CarProvider({ children }: { children: ReactNode }) {
  const { value: allCars } = useLocalStorage<CarPicture[]>("cars", []);

  const [, setFetchState] = useState<CarFetchResult>("loading");

  function fetchCar() {
    fetch(carUrl)
      .then((response) => response.json())
      .then((carList) => setFetchState({ id: carList[0].id }))
      .catch(() => setError());
  }

  function setError() {
    setFetchState("error");
  }

  return (
    <CarContext.Provider value={{ allCars, fetchCar, setError }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}
