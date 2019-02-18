module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9001/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
