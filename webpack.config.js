var webpack = require('webpack');

module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './js/index.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {      test: [
                    /\.js$/,
                    /\.jsx$/
                ], loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
              {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};