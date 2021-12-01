/**
 * 检测设备的朝向, 仅在移动设备上生效
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
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
