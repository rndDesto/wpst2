const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
// const ExtractCSS = new ExtractTextPlugin('[name]-css.css');
// const ExtractSASS = new ExtractTextPlugin('[name]-scss.css');
// const Extractmini = new MiniCssExtractPlugin('[name].css');

module.exports = {
  entry: path.join(__dirname,'src/app.js'),
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
      path: path.join(__dirname, 'bundle'),
      filename: '[name].bundle.js',
      publicPath: '/bundle'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader : "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ExtractCSS.extract({
      //     fallback: "style-loader",
      //     use: [
      //       "css-loader",
      //       "postcss-loader",
      //     ]
      //   })
      // },
      // {
      //   test: /\.scss$/,
      //   use: ExtractSASS.extract({
      //     fallback: "style-loader",
      //     use: [
      //       {
      //           loader: "css-loader",
      //           options: {
      //               url: false,
      //               minimize: true,
      //               sourceMap: true
      //           },
      //       }, 
      //       {
      //           loader: "sass-loader",
      //           options: {
      //               sourceMap: true
      //           }
      //       },
            
      //     ]
      //   })
      // }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    port: 8200,
    stats:'errors-only'
  },
  plugins: [
    // ExtractCSS,
    // ExtractSASS,
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.LoaderOptionsPlugin({
      options:{
        postcss:[
          autoprefixer()
        ]
      }
    })
  ]



};
