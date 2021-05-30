import { useEffect } from "react";
import { localStorage } from "@utils";

export default function useBeforeunload(data) {
  useEffect(() => {
    const handleBeforeunload = () => {
      Object.keys(data).forEach((el) => {
        localStorage.set(el, data[el]);
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
