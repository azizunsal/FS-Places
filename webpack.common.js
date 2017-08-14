
let path = require('path');
const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './docs');


module.exports = {
	context: src,
	entry: src + '/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'docs')
    },
    
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
					
				}
			},	
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					},
				]
			}
		]
	}
};
