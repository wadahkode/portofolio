const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
    uikit: './app/uikit.js'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    //new HtmlWebpackPlugin({
    //  title: 'Production',
    //}),
    // new WorkboxPlugin.GenerateSW({
    //     clientsClaim: true,
    //     skipWaiting: true,
    //     maximumFileSizeToCacheInBytes: 5*1024*1024
    // }),
  ],
  output: {
    //filename: '[name].bundle.js',
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'vendor/uikit/js'),
  },
};