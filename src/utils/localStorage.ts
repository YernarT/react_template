import type { isObject } from '#/common';

export interface localStorageProperties {
	get(key: string, defaultValue?: isObject): isObject;
	set(key: string, value: isObject): void;
}

export const localStorage: localStorageProperties = {
	get(key, defaultValue) {
		return JSON.parse(
			window.localStorage.getItem(key) || JSON.stringify(defaultValue),
		);
	},

	set(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value));
	},
};
