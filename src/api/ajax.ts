import axios from 'axios';
import { localStorage } from '@/utils';

export const apiServerInstance = axios.create({
	baseURL: 'http://localhost:8000',
	validateStatus: status => status >= 200 && status < 300,
});

apiServerInstance.interceptors.request.use(config => {
	const { jwt } = localStorage.get('user');

	if (jwt && config.headers) {
		config.headers['Authorization'] = `Bearer ${jwt}`;
	}

	return config;
});

apiServerInstance.interceptors.response.use(
	res => res,
	err => {
		if (err.response && err.response.status) {
			let { status } = err.response;

			if (status >= 500) {
				return Promise.reject({
					message: 'Сервер құлап қалды...',
				});
			} else if (status >= 400 && status < 500) {
				return Promise.reject(err.response.data);
			} else {
				return Promise.reject({
					message: 'Белгісіз жағдай, кейінірек қайталаңыз',
				});
			}
		}

		if (err.message === 'Network Error') {
			return Promise.reject({
				message: 'Сервер істен шықты, кейінірек қайталаңыз',
			});
		}

		console.log('\n\n\n开发中的未知错误!');
		console.log(err);
		console.log('\n\n\n');
		return Promise.reject({
			message: 'Сервер істен шықты, кейінірек қайталаңыз',
		});
	},
);
