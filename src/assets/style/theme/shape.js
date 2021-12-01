/**
 * shape 相关样式
 * viewMode 为分辨 light, dark模式, 两种不同样式
 * 
 * 此处只是一个案例, 根据实际的项目需求自行修
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
*/

export default {
	borderRadius: '12px',

	borderColor: viewMode => (viewMode === 'dark' ? '' : ''),

	// 也可以拆分成对象返回, 可以复用更多属性
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.36)',
};
