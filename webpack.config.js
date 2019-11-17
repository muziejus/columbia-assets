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
        loaders.CSS
    ],
  },
  entry: {
    style: "./src/style.css",
    columbia: "./src/columbia.css",
    columbiaReveal: "./src/columbia-reveal.css"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
