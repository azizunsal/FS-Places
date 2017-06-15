'use strict';
var webpack = require('webpack');
let path = require('path');
const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './docs');

module.exports = {
  context: src,
  devtool: 'eval-source-map',
  entry: [src + '/index.js'],
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'prod.bundle.js',
    publicPath: dist
    // sourceMapFilename: '[name].map'
  },

module: {
		loaders: [
			{
				loader: 'babel',
				test: /\.js$/,
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},

			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},  

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}