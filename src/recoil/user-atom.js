/**
 * 用户数据相关 全局状态
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_template
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
	}),
});
