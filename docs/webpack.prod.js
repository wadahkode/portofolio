const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new WorkboxPlugin.InjectManifest({
            swSrc: path.join(process.cwd(), 'app/src/sw.js'),
            swDest: 'service-worker.js',
            exclude: [
                // /\.map$/,
                /manifest$/,
                //\.htaccess$/,
                /service-worker\.js$/,
                /sw\.js$/,
            ],
            maximumFileSizeToCacheInBytes: 10*1024*1024
        }),
    ]
//   optimization: {
//     splitChunks: {
//       // include all types of chunks
//       chunks: 'all'
//     }
//   }
});