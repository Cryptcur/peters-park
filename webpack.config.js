const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    '@babel/polyfill', // enables async-await
    './src/client/'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
