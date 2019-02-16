const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname, '../public'),
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
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
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
        test: /\.scss$|\.css$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
      },
    ],
  },
};
