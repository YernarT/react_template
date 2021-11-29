/**
 * 用户授权相关请求
 */
import { jsonServerInstance } from '@api/ajax';

/**
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

// Login
export const reqLog = data => jsonServerInstance.post('auth/login/', data);

// Register
export const reqReg = data =>
	jsonServerInstance.post('auth/registration/', data);
