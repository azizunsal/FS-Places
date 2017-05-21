module.exports = {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, './docs'),
    filename: 'fs-places.bundle.js',
    publicPath: publicPath
    // sourceMapFilename: '[name].map'
  },

  devServer: {
    port: 7777,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath
  }
}
