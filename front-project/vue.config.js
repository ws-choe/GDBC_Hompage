// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })


const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir:
    '../back-project/src/main/resources/static',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:80',
        changeOrigin: true,
        pathRewrite: { '^/': '/' },
      },
    },
  },
});
