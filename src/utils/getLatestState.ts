/**
 * Check the contents of localStorage are out of date or incorrect
 */

import type { isObject } from '#/common';

export default function getLatestState<T extends isObject>(
	dataToBeDetected: T,
	defaultCorrectData: T,
): [isValid: boolean, state: T] {
	let fromStorageKeys = Object.keys(dataToBeDetected);
	let defaultKeys = Object.keys(defaultCorrectData);

	if (fromStorageKeys.length !== defaultKeys.length) {
		return [false, defaultCorrectData];
	}

	fromStorageKeys.forEach(key => {
		if (!defaultKeys.includes(key)) {
			return [false, defaultCorrectData];
		}
	});

	return [true, dataToBeDetected];
}
