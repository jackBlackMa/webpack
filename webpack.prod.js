/**
 * @config
 * @desc 生产配置文件
 */

const merge = require("webpack-merge");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  entry: {
    "app.bundle": "./src/app.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: "postcss.config.js"
                }
              }
            },
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name].[hash:8].css`,
      disable: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
});
