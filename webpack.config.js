const path = require('path');
module.exports = {
    mode: process.env.production ? 'production':'development',
    target:'web',
    optimization: {
        minimize: false,
    },
    output: {
        path: __dirname + '/lib',
        filename: 'umd.js',
        library: 'Alan',
        libraryTarget: 'umd',
        umdNamedDefine: true
      },
    entry: path.resolve(__dirname, 'index.js'),
    externals: {
        'kendo': 'kendo'
    },
    module: {
        rules: [
            {
                test: /\.kendo$/,
                use: [
                    {
                        loader: path.resolve('kendo-loader.js'),
                        options: {/* ... */ }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};