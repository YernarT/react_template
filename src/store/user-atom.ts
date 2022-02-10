import { atom } from 'recoil';
import { localStorage } from '@/utils';

export const userAtom = atom({
	key: 'userAtom',
	// default value, aka initial value
	default: localStorage.get('user', {
		// 获取用户信息
		username: '',
		role: 'guest',
		jwt: '',
	}),
});
