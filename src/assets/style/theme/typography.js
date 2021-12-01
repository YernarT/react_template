/**
 * typography 相关样式
 * viewMode 为分辨 light, dark模式, 两种不同样式
 *
 * 此处只是一个案例, 根据实际的项目需求自行修
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

export default {
	// 可以根据 h1, h2, h3... p, span 这样去设计

	title: viewMode => {
		if (viewMode === 'dark') {
			return {
				fontWeight: 700,
				fontSize: '1.14rem',
				color: 'rgba(255, 255, 255, 0.85)',

				marginBottom: 0,
			};
		} else {
			return {
				fontWeight: 700,
				fontSize: '1.14rem',
				color: 'rgba(0, 0, 0, 0.85)',

				marginBottom: 0,
			};
		}
	},

	text: viewMode => {
		if (viewMode === 'dark') {
			return {
				fontWeight: 600,
				fontSize: '0.86rem',
				color: 'rgba(255, 255, 255, 0.85)',

				marginBottom: 0,
			};
		} else {
			return {
				fontWeight: 600,
				fontSize: '0.86rem',
				color: 'rgba(0, 0, 0, 0.85)',

				marginBottom: 0,
			};
		}
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
