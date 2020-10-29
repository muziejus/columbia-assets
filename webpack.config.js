const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path")
const loaders = require("./webpack/loaders");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  entry: {
    style: "./src/style.css",
    columbia: "./src/columbia.css",
    columbiaReveal: "./src/columbia-reveal.css",
    columbiaRevealTheme: "./src/sass/columbia-reveal.scss",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      loaders.CSS,
      loaders.SASS,
    ],
  },
};

/*
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = require("./webpack/loaders");
const plugins = require("./webpack/plugins");

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  target: "web",
  plugins: [
    plugins.MiniCssExtractPlugin,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
*/
