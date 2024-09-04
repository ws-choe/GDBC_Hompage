
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  
  // 빌드된 파일의 출력 경로 설정
  outputDir: '../back-project/src/main/resources/static',

  // CSS 파일이 별도로 생성되지 않도록 설정
  css: {
    extract: false, // CSS를 별도로 추출하지 않고, JavaScript에 포함시킴
  },

  // 개발 서버 설정
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:80',
        changeOrigin: true,
        pathRewrite: { '^/': '/' },
        ws:false
        
      },
    },
  },

  // Webpack 설정 조정
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    ],
    optimization: {
      splitChunks: false, // 코드 분할 비활성화 (필요에 따라 설정)
    },
  },
});
