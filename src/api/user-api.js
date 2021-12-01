/**
 * 用户功能相关请求
 */
import { jsonServerInstance } from '@api/ajax';

/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

// get all user
export const reqUserList = params => jsonServerInstance.get('/users', params);
