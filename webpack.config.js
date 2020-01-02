var path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  entry: {
    main: "./assets/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "assets/static"),
    filename: "main.js"
  },
  target: "node",
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, "templates/**/*.html"),
        path.join(__dirname, "templates/base.html")
      ]),
      extractors: [{
        extractor: TailwindExtractor,
        extensions: ["html"]
      }]
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};