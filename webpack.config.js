const path = require('path');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HardSourceWebpackPlugin()
  ],
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  }
};