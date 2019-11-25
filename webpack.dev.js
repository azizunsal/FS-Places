const merge = require('webpack-merge');
const common = require('./webpack.common.js');

console.log("process.env.NODE_ENV => ", process.env.NODE_ENV);

module.exports = merge(common, {
    stats: 'errors-warnings',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
/*         contentBase: path.join(__dirname, 'dist'),
        compress: true, */
        port: 9000
      }
});
