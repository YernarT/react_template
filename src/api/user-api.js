/**
 * 用户功能相关请求
 */
import { jsonServerInstance } from '@api/ajax';

/**
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

// get all user
export const reqUserList = params => jsonServerInstance.get('/users', params);
