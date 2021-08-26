import { useEffect } from "react";

export default function useBeforeunload(fn, deps = []) {
	useEffect(() => {
		window.addEventListener("beforeunload", fn);

		return () => {
			window.removeEventListener("beforeunload", fn);
		};
	}, deps);
}
