const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 启动项目时，是否自动打开浏览器
    open: true,
    // 是否开始https
    https: false,


    // 配置跨域
    proxy: {
      // /dev-api 代理名称 process.env.VUE_APP_BASE_API === "/dev-api"
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  // 关闭eslint
  lintOnSave: false
});
