const path = require("path")
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
  module: {
    rules: [
      loaders.CSS,
      loaders.SASS,
    ],
  },
  entry: {
    style: "./src/style.css",
    columbia: "./src/columbia.css",
    columbiaReveal: "./src/columbia-reveal.css",
    columbiaRevealTheme: "./src/sass/columbia-reveal.scss"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
