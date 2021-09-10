const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
	devServer: {
		port: 4000,
		disableHostCheck: true,
		proxy: {
			"/json-server": {
				target: "http://127.0.0.1:4100",
				changeOrigin: true,
				secure: false,
				pathRewrite: { "^/json-server": "" },
			},
		},
	},

	webpack: {
		alias: {
			"@api": path.resolve("src/api"),
			"@assets": path.resolve("src/assets"),
			"@config": path.resolve("src/config"),
			"@hooks": path.resolve("src/hooks"),
			"@components": path.resolve("src/components"),
			"@pages": path.resolve("src/pages"),
			"@recoil": path.resolve("src/recoil"),
			"@utils": path.resolve("src/utils"),
			"@data": path.resolve("src/data"),
			"@i18n": path.resolve("src/i18n"),
		},
		configure: webpackConfig => {
			// console.log(webpackConfig);

			return webpackConfig;
		},
	},

	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							/*
							 * There are some major variables below
							 * all less variables could be found in
							 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
							 */

							"@ant-prefix": "react-app-template",
							"@primary-color": "darkblue", // primary color for all components
							"@text-color": "rgba(0, 0, 0, 0.85)", // major text color
							"@text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
							"@link-color": "blue", // link color
							"@success-color": "#52c41a", // success state color
							"@warning-color": "#faad14", // warning state color
							"@error-color": " #f5222d", // error state color
							"@font-size-base": "1rem", // major text font size
							"@heading-color": "rgba(0, 0, 0, 1)", // heading text color
							"@disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
							"@border-radius-base": "12px", // major border radius
							"@border-color-base": "#000", // major border color
							"@box-shadow-base": "2px 2px 5px #000", // major shadow for layers
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
