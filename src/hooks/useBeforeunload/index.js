import { useEffect } from "react";
import { localStorage } from "@utils";

export default function useBeforeunload(data) {
  useEffect(() => {
    const handleBeforeunload = () => {
      Object.entries(data).forEach((el) => {
        localStorage.set(el[0], el[1]);
      });
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeunload
    );
    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeunload
      );
    };
  }, [data]);
}
