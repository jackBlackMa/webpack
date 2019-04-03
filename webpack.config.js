const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './main',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [
                //     'style-loader',
                //     {
                //         loader: 'css-loader',
                //         options: {
                //         }
                //     }
                // ]
                loaders: ExtractTextPlugin.extract({
                    use: ['css-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'],
                    exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name].css`
        })
    ]
}

module.exports = config