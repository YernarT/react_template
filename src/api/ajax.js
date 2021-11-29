/**
 * 封住 ajax 函数, 统一处理请求
 * 对 axios库 进行二次封装
 */
import axios from 'axios';

import { localStorage } from '@utils';

/**
 * 此处创建了一个请求实例, 编写请求拦截器逻辑
 * 如果App中 使用了多个不同的后端接口
 * API风格不同的时候, 推荐创建多个请求实例管理
 * */
export const jsonServerInstance = axios.create({
	baseURL: '/json-server',
	validateStatus: status => status >= 200 && status < 300,
});

// 请求拦截器
jsonServerInstance.interceptors.request.use(config => {
	// 假设后端使用的是 JWT验证方式, 我们将 JWT 储存在本地, 且只有在登陆和退出时会触发更新(JWT)
	const { jwt } = localStorage.get('user');

	if (jwt) {
		// 根据需求自行添加 请求头
		config.headers['Authorization'] = `Bearer ${jwt}`;
	}

	return config;
});

// 响应拦截器
jsonServerInstance.interceptors.response.use(
	res => res.data,
	err => {
		/**
		 * 此处只是一个栗子 🌰
		 * 根据项目需求自行修改
		 * 有更好的意见可以提 issue, pr
		 */
		if (axios.isCancel(err)) {
			// Interrupt the Promise chain
			return new Promise(() => {});
		}

		if (err.response && err.response.status) {
			switch (err.response.status) {
				case 500:
					return Promise.reject(new Error({ err: 500 }));
				case 404:
					return Promise.reject(new Error({ err: 404 }));
				default:
					return Promise.reject(err.response.data);
			}
		}

		if (err.response === undefined) {
			return Promise.reject(new Error({ err: 500 }));
		}

		return Promise.reject(new Error(err));
	},
);
