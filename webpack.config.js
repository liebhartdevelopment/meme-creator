const webpack = require("webpack");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    general: "./src/js/general.js",
    memes: "./src/js/memes.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "es2015"]
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(svg|eot|tff|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "images/[name].[]ext"
            }
          },
          "img-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery"
    })
  ]
};
