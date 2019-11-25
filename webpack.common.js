let path = require('path');
const src = path.join(__dirname, './src');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: src,
    entry: src + '/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
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
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'A basic Four Square Places Implementation with Webpack, React and Redux.',
            template: path.resolve(src, 'index.html'),
            filename: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};
