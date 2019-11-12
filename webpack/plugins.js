const _MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
  ignoreOrder: false
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin
};
