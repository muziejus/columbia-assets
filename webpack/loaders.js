const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JS = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

const CSS = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: process.env.NODE_ENV === 'development',
      }
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 1
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: "postcss",
        plugins: [
          require("postcss-preset-env"),
          require("tailwindcss"),
          require("autoprefixer")
        ]
      }
    },
  ]
};  

module.exports = {
  JS,
  CSS
};
