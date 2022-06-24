/**
 * Check the contents of localStorage are out of date or incorrect
 */

 export default function getLatestState<T extends object>(
	dataToBeDetected: object,
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

	return [true, dataToBeDetected as T];
}
