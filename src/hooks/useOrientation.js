/**
 * 检测设备的朝向, 仅在移动设备上生效
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

	return orientation;
}
