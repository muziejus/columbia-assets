const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = require("./webpack/loaders");
const plugins = require("./webpack/plugins");

module.exports = {
  target: "web",
  plugins: [
    plugins.MiniCssExtractPlugin,
  ],
  module: {
    rules: 
      [
        loaders.JS,
        loaders.CSS
    ],
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
