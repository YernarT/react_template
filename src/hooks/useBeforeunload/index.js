import { useEffect } from "react";
import { localStorage } from "@utils";

export default function useBeforeunload(data) {
	useEffect(() => {
		const handleBeforeunload = () => {
			Object.entries(data).forEach(([key, value]) => {
				localStorage.set(key, value);
			});
		};

		window.addEventListener("beforeunload", handleBeforeunload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeunload);
		};
	}, [data]);
}
