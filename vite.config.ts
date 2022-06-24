import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';

function pathResolve(dir: string): string {
	return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: pathResolve('src') + '/',
			},
		],
	},

	plugins: [
		react(),
		vitePluginImp({
			optimize: true,
			libList: [
				{
					libName: 'antd',
					libDirectory: 'es',
					style: name => `antd/es/${name}/style`,
				},
			],
		}),
	],

	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					/*
					 * There are some major variables below
					 * all less variables could be found in
					 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
					 */

					'@primary-color': '#1890ff', // 全局主色 Primary color for all components
					'@text-color': 'rgba(0, 0, 0, 0.85)', // 主要文字颜色 Major text color
					'@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 辅助文字颜色 Secondary text color
					'@link-color': '#1890ff', // 链接色 Link color
					'@success-color': '#52c41a', // 成功色 Success state color
					'@warning-color': '#faad14', // 警告色 Warning state color
					'@error-color': ' #f5222d', // 错误色 Error state color
					'@font-size-base': '14px', // 主字号 Major text font size
					'@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色 Heading text color
					'@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色 Disable state color
					'@border-radius-base': '4px', // 组件/浮层圆角 Major border radius
					'@border-color-base': '#d9d9d9', // 边框色 Major border color
					'@box-shadow-base': `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
					0 9px 28px 8px rgba(0, 0, 0, 0.05)`, // 浮层阴影 Major shadow for layers
				},
				javascriptEnabled: true,
			},
		},
	},

	server: {
		host: '0.0.0.0',
		port: 3000,
	},
});
