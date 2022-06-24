import type { allowedRole } from '@/utils';

import { atom } from 'recoil';
import { getLatestState, localStorage, role } from '@/utils';

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

const [isValid, state] = getLatestState<userStateProperties>(
	localStorage.get('user', {}),
	defaultUserState,
);

// The data in LocalStorage is not as expected
if (!isValid) {
	localStorage.set('user', state);
}

export const userAtom = atom({
	key: 'userAtom',
	// default value, aka initial value
	default: state,
});
