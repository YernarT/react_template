import { useEffect, useRef } from "react";

export default function useEventListener(eventName, handler, element = window) {
	// 创建一个 ref 来存储处理程序
	const saveHandler = useRef();

	// 如果 handler 变化了，就更新 ref.current 的值。
	// 这个让我们下面的 effect 永远获取到最新的 handler
	useEffect(() => {
		saveHandler.current = handler;
	}, [handler]);

	useEffect(
		() => {
			// 确保元素支持 addEventListener
			const isSupported = element && element.addEventListener;
			if (!isSupported) return;

			// 创建事件监听调用存储在 ref 的处理方法
			const eventListener = event => saveHandler.current(event);

			// 添加事件监听
			element.addEventListener(eventName, eventListener);

			// 清除的时候移除事件监听
			return () => {
				element.removeEventListener(eventName, eventListener);
			};
		},
		[eventName, element], // 如果 eventName 或 element 变化，就再次运行
	);
}

/**
 * 例子:
 * const [coords, setCoords] = useState({ x: 0, y:0 });
 * // 使用 useCallback 的事件处理程序，这样引用就不会更改
 * const handler = useCallback(
 *   ({ clientX, clientY }) => {
 *     setCoords({ x: clientX, y: clientY });
 *   };
 * );
 *
 * useEventListener('mousemove', handler);
 */
