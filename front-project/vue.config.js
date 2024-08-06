const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: '../back-project/src/main/resources/static',
  devServer: {
    proxy: 'http://localhost:80',
  },
});