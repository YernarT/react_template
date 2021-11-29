/**
 * comprehensive版本 核心组件之一
 * CRACO - Creact React App Config Override
 * 外层配置 (Webpack, Babel...)
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
	// Babel 插件
	babel: {
		plugins: ['babel-plugin-styless'],
	},

	// 开发模式 服务器配置
	devServer: {
		port: 12345,
		disableHostCheck: true,
		// 代理配置
		proxy: {
			'/json-server': {
				target: 'http://127.0.0.1:12344',
				changeOrigin: true,
				secure: false,
				pathRewrite: { '^/json-server': '' },
			},
		},
	},

	// Webpack 配置
	webpack: {
		alias: {
			'@api': path.resolve('src/api'),
			'@assets': path.resolve('src/assets'),
			'@config': path.resolve('src/config'),
			'@components': path.resolve('src/components'),
			'@pages': path.resolve('src/pages'),
			'@recoil': path.resolve('src/recoil'),
			'@utils': path.resolve('src/utils'),
			'@data': path.resolve('src/data'),
			'@hooks': path.resolve('src/hooks'),
		},
		configure: webpackConfig => {
			// console.log(webpackConfig);

			return webpackConfig;
		},
	},

	// CRACO 插件
	plugins: [
		{
			// Antd组件 按需引入
			plugin: CracoAntDesignPlugin,
			options: {
				// Antd组件 适用Less编写
				// 项目任何地方都能使用 Less
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							/*
							 * There are some major variables below
							 * all less variables could be found in
							 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
							 */

							'@ant-prefix': 'quick-start-react',
							'@primary-color': '#FF005C', // primary color for all components
							'@text-color': '#FFF', // major text color
							'@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
							'@link-color': '#40BFFF', // link color
							'@success-color': '#53D1B6', // success state color
							'@warning-color': '#FFC833', // warning state color
							'@error-color': ' #F2263E', // error state color
							'@font-size-base': '1rem', // major text font size
							'@heading-color': '#FFF', // heading text color
							'@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
							'@border-radius-base': '6px', // major border radius
							'@border-color-base': '#FFF', // major border color
							'@box-shadow-base': '0 0 4px rgba(0, 0, 0, 0.6)', // major shadow for layers
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
