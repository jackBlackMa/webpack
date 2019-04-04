const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmllWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

const isProd = process.env.NODE_ENV === 'production';
const cssProd = ExtractTextPlugin.extract({
    use: [
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
});

const cssDev = [
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
    'sass-loader'];


const cssConfig = isProd ? cssProd : cssDev;


const config = {
    entry: './src/app.js',
    output: {
        filename: "[name]_[hash].js",
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
            },
            {
                test: /\.scss$/,
                use: cssConfig,
                exclude: / node_modules /
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        output: 'images/'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmllWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
            },
        }),
        new ExtractTextPlugin({
            filename: `[name].css`,
            disable: !isProd,
        }),
        // 清除文件
        new CleanWebpackPlugin({
            // Simulate the removal of files
            //
            // default: false
            dry: true,

            // Write Logs to Console
            // (Always enabled when dry is true)
            //
            // default: false
            verbose: true,

            // Automatically remove all unused webpack assets on rebuild
            //
            // default: true
            cleanStaleWebpackAssets: false,

            // Do not allow removal of current webpack assets
            //
            // default: true
            protectWebpackAssets: false,

            // **WARNING**
            //
            // Notes for the below options:
            //
            // They are unsafe...so test initially with dry: true.
            //
            // Relative to webpack's output.path directory.
            // If outside of webpack's output.path directory,
            //    use full path. path.join(process.cwd(), 'build/**/*')
            //
            // These options extend del's pattern matching API.
            // See https://github.com/sindresorhus/del#patterns
            //    for pattern matching documentation

            // Removes files once prior to Webpack compilation
            //   Not included in rebuilds (watch mode)
            //
            // Use !negative patterns to exclude files
            //
            // default: ['**/*']
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
            cleanOnceBeforeBuildPatterns: [], // disables cleanOnceBeforeBuildPatterns

            // Removes files after every build (including watch mode) that match this pattern.
            // Used for files that are not created directly by Webpack.
            //
            // Use !negative patterns to exclude files
            //
            // default: disabled
            cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],

            // Allow clean patterns outside of process.cwd()
            //
            // requires dry option to be explicitly set
            //
            // default: false
            dangerouslyAllowCleanPatternsOutsideProject: true,
        }),

        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

    ],
    devServer: {
        open: true,
        hot: true,
        // port: 8999,
    },
    // devtool: 'source-map',
}

module.exports = config


