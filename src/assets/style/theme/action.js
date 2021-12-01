/**
 * action 相关样式
 * viewMode 为分辨 light, dark模式, 两种不同样式
 * 
 * 此处只是一个案例, 根据实际的项目需求自行修
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
*/

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
