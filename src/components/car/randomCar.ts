import { useState } from "react";
import { FetchResult } from "../../types/fetch.ts";

const carUrl = "https://api.thecatapi.com/v1/images/search";

type CarFetchResult = FetchResult<{ id: string }, string>;

type ReturnType = {
  result: CarFetchResult;
  fetchCar: () => void;
  setResult: (result: CarFetchResult) => void;
};

export function useRandomCar(): ReturnType {
  const [result, setFetchState] = useState<CarFetchResult>(undefined);

  async function fetchCar() {
    setFetchState("fetching");
    // simulate 200ms min fetch time
    // await new Promise((resolve) => setTimeout(resolve, 200));
    fetch(carUrl)
      .then((response) => response.json())
      .then((carList) =>
        setFetchState({ ok: true, value: { id: carList[0].id } }),
      )
      .catch((e) => setFetchState({ ok: false, value: e.message }));
  }

  function setResult(result: CarFetchResult) {
    setFetchState(result);
  }

  return { result, fetchCar, setResult };
}
