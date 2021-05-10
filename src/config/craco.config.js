const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  devServer: {
    port: 3063,
    disableHostCheck: true,
    proxy: {
      "/data-api": {
        // target: "https://getman.cn",
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/data-api": "" },
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
              "@primary-color": "rgb(17, 236, 229)",
              "@text-color": "#000",
              "@link-color": "rgb(17, 236, 229)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
