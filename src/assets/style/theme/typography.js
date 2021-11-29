// typography 相关样式
// 此处假设了App有 dark, light 两种样式
// 根据项目需求自行修改

export default {
	// 可以根据 h1, h2, h3... p, span 这样去设计

	title: {
		fontWeight: 800,
		fontSize: '1.62rem',
		color: 'rgba(0, 0, 0, 0.85)',
	},

	text: {
		fontWeight: 500,
		fontSize: '1.12rem',
		color: '#5f6367',
	},

	link: viewMode => {
		if (viewMode === 'dark') {
			return {
				fontWeight: 500,
				fontSize: '1rem',
				color: 'blue',
			};
		} else {
			return {
				fontWeight: 500,
				fontSize: '1rem',
				color: 'darkblue',
			};
		}
	},

	button: viewMode => {
		if (viewMode === 'dark') {
			return {
				fontWeight: 600,
				fontSize: '1rem',
				color: '#fff',
			};
		} else {
			return {
				fontWeight: 600,
				fontSize: '1rem',
				color: '#000',
			};
		}
	},
};
