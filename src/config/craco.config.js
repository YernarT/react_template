const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  devServer: {
    port: 4000,
    disableHostCheck: true,
    proxy: {
      "/api": {
        // target: "https://getman.cn",
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "" },
      },
    },
  },

  webpack: {
    alias: {
      "@api": path.resolve("src/api"),
      "@assets": path.resolve("src/assets"),
      "@config": path.resolve("src/config"),
      "@components": path.resolve("src/components"),
      "@pages": path.resolve("src/pages"),
      "@redux": path.resolve("src/redux"),
      "@utils": path.resolve("src/utils"),
      "@i18n": path.resolve("src/i18n"),
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
              "@primary-color": "rgb(17, 236, 229)", // primary color for all components
              "@text-color": "rgba(0, 0, 0, 0.85)", // major text color
              "@text-color-secondary":
                "rgba(0, 0, 0, 0.45)", // secondary text color
              "@link-color": "rgb(17, 236, 229)", // link color
              "@success-color": "#52c41a", // success state color
              "@warning-color": "#faad14", // warning state color
              "@error-color": " #f5222d", // error state color
              "@font-size-base": "1rem", // major text font size
              "@heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
              "@disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
              "@border-radius-base": "6px", // major border radius
              "@border-color-base": "#d9d9d9", // major border color
              "@box-shadow-base":
                "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
