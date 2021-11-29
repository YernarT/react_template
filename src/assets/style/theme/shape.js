// shape 相关样式
// 此处假设了App有 dark, light 两种样式
// 根据项目需求自行修改

export default {
	borderRadius: '12px',

	borderColor: viewMode => (viewMode === 'dark' ? '' : ''),

	// 也可以拆分成对象返回, 可以复用更多属性
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.36)',
};
