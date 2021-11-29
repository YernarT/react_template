// action 相关样式
// 此处假设了App有 dark, light 两种样式
// 根据项目需求自行修改

export default {
	active: viewMode => (viewMode === 'dark' ? '' : ''),
	hover: viewMode => (viewMode === 'dark' ? '' : ''),
	hoverOpacity: viewMode => (viewMode === 'dark' ? '' : ''),
	selected: viewMode => (viewMode === 'dark' ? '' : ''),
	selectedOpacity: viewMode => (viewMode === 'dark' ? '' : ''),
	disabled: viewMode => (viewMode === 'dark' ? '' : ''),
	disabledOpacity: viewMode => (viewMode === 'dark' ? '' : ''),
	disabledBGC: viewMode => (viewMode === 'dark' ? '' : ''),
	focus: viewMode => (viewMode === 'dark' ? '' : ''),
	focusOpacity: viewMode => (viewMode === 'dark' ? '' : ''),
};
