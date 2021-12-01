/**
 * 用户授权相关请求
 */
import { jsonServerInstance } from '@api/ajax';

/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

// Login
export const reqLog = data => jsonServerInstance.post('auth/login/', data);

// Register
export const reqReg = data =>
	jsonServerInstance.post('auth/registration/', data);
