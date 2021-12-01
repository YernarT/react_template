/**
 * 用户相关的 全局状态
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */
import { atom } from 'recoil';
import { localStorage } from '@utils';

export const userAtom = atom({
	key: 'userAtom',
	// 默认值
	default: localStorage.get('user', {
		// 用户 ID
		id: null,
		// 用户名
		username: '',
		// 角色
		role: 'guest',
		// JWT
		jwt: '',
		refreshJWT: '',
	}),
});
