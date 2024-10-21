import { useEffect, useState } from "react";

export function useTimer(interval: number, func: () => void) {
  const [number, setNumber] = useState(-9999);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    func();
  }, [number]);
}
