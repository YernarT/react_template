/**
 * comprehensive版本 核心组件之一
 * 路由配置
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

import commonRouting from 'src/config/routings/common-routing';
import authRouting from 'src/config/routings/auth-routing';

const routingConfig = [
	...authRouting,
	...commonRouting,
];

export default routingConfig;
