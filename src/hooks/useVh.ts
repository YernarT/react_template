/**
 * Solve the problem of abnormal display of 100vh on the mobile browser (browser menu blocking, etc..)
 */
import { useSafeState, useEventListener } from 'ahooks';

export default function use1vh() {
	const [vh, setVh] = useSafeState(
		(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
	);

	useEventListener('resize', () => {
		setVh(
			(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
		);
	});

	// Check if it is a mobile device
	// 1. Mobile browser DOM elements have the tontouchstart attribute, desktop devices do not have this attribute
	// 2. Detects screen orientation, mobile devices can change the orientation (landscape or portrait), desktop devices can't
	if (
		'ontouchstart' in document.documentElement &&
		typeof window.orientation !== 'undefined'
	) {
		return vh;
	} else {
		return null;
	}
}
