import type { allowedRole } from '@/utils';

import { atom } from 'recoil';
import { localStorage, role } from '@/utils';

export interface userStateProperties {
	username: string;
	role: allowedRole;
	jwt: string;
}

export const defaultUserState: userStateProperties = {
	username: '',
	role: role.GUEST,
	jwt: '',
};

const state = localStorage.get('user', defaultUserState);

export const userAtom = atom({
	key: 'userAtom',
	// default value, aka initial value
	default: state,
});
