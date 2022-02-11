import { atom } from 'recoil';
import { getLatestState, localStorage } from '@/utils';

export interface userStateProperties {
	username: string;
	role: string;
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

// LocalStorage内数据"过期"
if (!isValid) {
	localStorage.set('user', state);
}

export const userAtom = atom({
	key: 'userAtom',
	// default value, aka initial value
	default: localStorage.get('user', state),
});
