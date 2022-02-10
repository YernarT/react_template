import { atom } from 'recoil';
import { localStorage } from '@/utils';

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

export const userAtom = atom({
	key: 'userAtom',
	// default value, aka initial value
	default: localStorage.get('user', defaultUserState),
});
