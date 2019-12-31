module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/effect/'
    : '/',
  productionSourceMap: process.env.NODE_ENV === 'development',
  lintOnSave: true,
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  devServer: {
    port: '3000',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [{ from: /./, to: '/index.html' }]
    }
  }
}
