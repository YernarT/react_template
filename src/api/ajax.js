import axios from "axios";

import { useRecoilValue } from "recoil";
import { userAtom } from "@recoil";

import { message } from "antd";

export const myPythonApiInstance = axios.create({
	baseURL: "my-python-api",
	validateStatus: status => status >= 200 && status < 300,
});

myPythonApiInstance.interceptors.request.use(config => {
	const { jwt } = useRecoilValue(userAtom);

	if (jwt) {
		config.headers["Authorization"] = `Bearer ${jwt}`;
	}

	return config;
});

myPythonApiInstance.interceptors.response.use(
	// return data
	res => res.data,
	err => {
		// TODO:
		// 当verify jwt返回false时, 执行"退出"动作
		// 提醒并跳转到登录页

		if (axios.isCancel(err)) {
			// Interrupt the Promise chain
			return new Promise(() => {});
		}

		if (err.response && err.response.status) {
			switch (err.response.status) {
				case 500:
					// message.error("Сервер не работает, повторите попытку позже");
					message.error("server is down, please try again later");
					return Promise.reject(new Error({ err: 500 }));
				case 404:
					// message.error("Oшибка клиента, дождитесь ремонта");
					message.error("client error, please wait for repair");
					return Promise.reject(new Error({ err: 404 }));
				default:
					return Promise.reject(err.response.data);
			}
		}

		if (err.response === undefined) {
			// message.error("Сервер не работает, повторите попытку позже");
			message.error("server is down, please try again later");

			return Promise.reject(new Error({ err: 500 }));
		}

		return Promise.reject(err);
	},
);
