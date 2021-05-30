import { useState, useEffect } from "react";
import { debounce } from "@utils";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateSize = debounce(
      () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }),

      500
    );

    window.addEventListener("resize", updateSize);
    return () =>
      window.removeEventListener("resize", updateSize);
  }, []);

  return windowSize;
}
