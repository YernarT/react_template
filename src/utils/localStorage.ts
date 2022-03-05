export interface localStorageProperties {
	get(key: string, defaultValue?: object): object;
	set(key: string, value: object): void;
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
