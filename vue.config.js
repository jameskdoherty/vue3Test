const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
  //   proxy: {
  //     '^/mathematics/achievement': {
  //       target:'http://localhost:8080/',
  //       ws: true,
  //       changeOrigin: true,
  //     },
  // }
}
})
