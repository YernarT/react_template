/**
 * comprehensive版本 核心功能之一
 * 项目内部逻辑的配置
 * 无关CRA, Webpack, Babel等外层配置
 *
 * 假设项目是多角色的项目, 每个角色访问的页面都不一样
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

export const DEBUG = true;

export const Role = {
	guest: 'guest',
	user: 'user',
	admin: 'admin',
};
