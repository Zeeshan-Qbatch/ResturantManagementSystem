var path= require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry : './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules:[
      { test: /\.(js)$/, use: 'babel-loader'} ,
      { test: /\.css$/ , use: [ 'style-loader' , 'css-loader' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    port: 5200,
    proxy: {
      '/api': 'http://localhost:5000'
    },
    hot: true,
    historyApiFallback: true
  }
} 