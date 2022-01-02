/**
 * 检测设备的朝向, 仅在移动设备上生效
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_architecture
 */

import { useEventListener, useSafeState } from 'ahooks';

export default function useOrientation() {
	const [orientation, setOrienrtation] = useSafeState(
		window.orientation === 0 || window.orientation === 180
			? 'vertical'
			: 'horizontal',
	);
	const eventName =
		'onorientationchange' in window ? 'orientationchange' : 'resize';

	function eventHandler() {
		if (window.orientation === 0 || window.orientation === 180) {
			setOrienrtation('vertical');
		} else {
			setOrienrtation('horizontal');
		}
	}

	useEventListener(eventName, eventHandler);

	// 如果是 移动设备
	if (
		RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(
			navigator.userAgent,
		)
	) {
		return orientation;
	} else {
		// 桌面端
		return 'vertical';
	}
}
