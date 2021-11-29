// palette 相关样式
// 此处假设了App有 dark, light 两种样式
// 根据项目需求自行修改

export default {
	primary: viewMode => (viewMode === 'dark' ? '' : ''),
	error: viewMode => (viewMode === 'dark' ? '' : ''),
	warning: viewMode => (viewMode === 'dark' ? '' : ''),
	info: viewMode => (viewMode === 'dark' ? '' : ''),
	success: viewMode => (viewMode === 'dark' ? '' : ''),
};
