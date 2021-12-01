/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */
import { useSafeState, useEventListener } from 'ahooks';

/**
 * 解决移动端100vh显示异常的问题 (浏览器菜单遮挡等..)
 * 返回真实的 1vh 高度
 * @returns {Number|null}
 * 在桌面端返回 null
 */
export default function use1vh() {
	const [vh, setVh] = useSafeState(
		(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
	);

	useEventListener('resize', () => {
		setVh(
			(document.documentElement?.clientHeight || window.innerHeight) * 0.01,
		);
	});

	// 如果是 移动设备
	if (
		RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(
			navigator.userAgent,
		)
	) {
		return vh;
	} else {
		return null;
	}
}
