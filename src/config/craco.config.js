const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  devServer: {
    port: 3030,
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
              "@primary-color": "#E9012B",
              "@link-color": "#656678",
              "@success-color": "#52c41a",
              "@warning-color": "#faad14",
              "@error-color": "#f5222d",
              "@font-size-base": "14px;",
              "@text-color": "#000",
              "@text-color-secondary": "#9A9CB7",
              "@disabled-color": "rgba(0, 0, 0, 0.25)",
              "@border-radius-base": "12px;",
              "@border-color-base": "#d9d9d9",
              "@box-shadow-base":
                "0 2px,2px -2px rgba(0, 0, 0, 0.12), 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 2px rgba(0, 0, 0, 0.05)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
