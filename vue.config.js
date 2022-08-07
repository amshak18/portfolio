const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // GraphQL Loader
    config.module
        .rule('pdf')
        .test(/\.pdf$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/pdf/[name].[ext]'
        })
        .end()
  }
})
