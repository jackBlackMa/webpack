const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader?sourceMap",
          {
            loader: "postcss-loader?sourceMap",
            options: {
              config: {
                path: "postcss.config.js"
              }
            }
          },
          "sass-loader?sourceMap"
        ]
      }
    ]
  },

  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    open: true,
    hot: true,
    port: 10000
  },
  devtool: "source-map"
});
