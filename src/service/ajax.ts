import type { userStateProperties } from '@/store';

import axios from 'axios';
import { localStorage } from '@/utils';

export const apiServerInstance = axios.create({
	baseURL: 'http://localhost:8000',
	validateStatus: status => status >= 200 && status < 300,
});

// Request interceptor
apiServerInstance.interceptors.request.use(config => {
	// Every time the jwt is updated in the page, the localstorage needs to be updated together
	const { jwt } = localStorage.get('user') as userStateProperties;

	if (jwt && config.headers) {
		config.headers['Authorization'] = `Bearer ${jwt}`;
	}

	return config;
});

// Response interceptor
apiServerInstance.interceptors.response.use(
	response => response.data,
	error => {
		if (error.response && error.response.status) {
			let { status } = error.response;

			if (status >= 500) {
				return Promise.reject({
					message: 'The server crashed...',
				});
			}

			if (status >= 400) {
				return Promise.reject(error.response.data);
			}
		}

		if (error.message === 'Network Error') {
			return Promise.reject({
				message: 'Server failed, try again later',
			});
		}

		console.error('Error in request: ', error);
		return Promise.reject(error);
	},
);
