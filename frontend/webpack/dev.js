const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './src/index.jsx'
  ],

  output: {
    path: '/',
    filename: 'index.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API: JSON.stringify(process.env.API),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$|.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      }
    ],
  },
};
