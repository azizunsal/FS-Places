let path = require('path');
const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './docs');

module.exports = {
	context: src,
	entry: [
		// The script refreshing the browser on none hot updates
		'webpack-dev-server/client?http://localhost:2222',

		 // For hot style updates
   		'webpack/hot/only-dev-server',

		// and the application
   		src + '/index.js'
	],
	output: {
		path: dist,
		publicPath: '',
		filename: 'main.min.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: dist,
		inline: true,
		port: 2222,
		hot: true,
		quiet: true
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
	}
};
