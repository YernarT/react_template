/**
 * comprehensive版本 核心功能之一
 * 路由配置
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import commonRouting from 'src/config/routings/common-routing';
import authRouting from 'src/config/routings/auth-routing';

const routingConfig = [
	...authRouting,
	...commonRouting,
];

export default routingConfig;
