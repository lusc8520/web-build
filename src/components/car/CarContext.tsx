import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../../hooks/localStorage.ts";
import { CarPicture } from "./car.ts";

type CarContextData = {
  allCars: CarPicture[];
  saveCar: (car: CarPicture) => void;
};

const CarContext = createContext<CarContextData>({
  allCars: [],
  saveCar: () => {},
});

export function CarProvider({ children }: { children: ReactNode }) {
  const { value: allCars, updateState } = useLocalStorage<CarPicture[]>(
    "cars",
    [],
  );

  function saveCar(car: CarPicture) {
    updateState((prev) => [car, ...prev]);
  }

  return (
    <CarContext.Provider value={{ allCars, saveCar }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}
