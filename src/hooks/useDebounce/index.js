import { useEffect, useRef } from "react";

export default function useDebounce(fn, ms = 100, deps = []) {
	let timeout = useRef();

	useEffect(() => {
		if (timeout.current) clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			fn();
		}, ms);
	}, deps);

	const cancel = () => {
		clearTimeout(timeout.current);
		timeout = null;
	};

	// 暴露了cancel API, 用来控制何时停止防抖函数用
	return [cancel];
}

/**
 * 案例:
 * import { useDebounce } from 'hooks'
 *
 * const Home = (props) => {
 * 	 const [a, setA] = useState(0);
 * 	 const [b, setB] = useState(0);
 *   const [cancel] = useDebounce(() => {
 *     setB(a);
 *   }, 2000, [a]);
 *
 *   const changeIpt = (e) => {
 *     setA(e.target.value);
 *   }
 *
 *   return (<div>
 *       <input type="text" onChange={changeIpt} />
 *       { b } { a }
 *     </div>);
 * }
 *
 */
