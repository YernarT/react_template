import { atom } from 'recoil';
import { getLatestState, localStorage } from '@/utils';

export interface userStateProperties {
	username: string;
	role: 'guest' | 'user' | 'admin';
	jwt: string;
}

export const defaultUserState: userStateProperties = {
	username: '',
	role: 'guest',
	jwt: '',
};

const [isValid, state] = getLatestState(
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
	default: localStorage.get('user', state) as userStateProperties,
});
