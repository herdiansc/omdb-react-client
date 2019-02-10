const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
   entry: __dirname + '/src/main.jsx',
	
   output: {
      path: __dirname + '/dist',
      filename: '[name].[hash].bundle.js'
   },
	
   devServer: {
      contentBase: __dirname + "/public",
      inline: true,
      port: 8080
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: __dirname + '/public/index.html',
         minify: {
            collapseWhitespace: true,
            removeComments: true
         }
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[hash].bundle.css'
      }),
      new CopyWebpackPlugin([
         {from: __dirname + '/public', to: __dirname + '/dist'}
      ]),
      new Dotenv()
   ],
	
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.html$/,
            use: {
               loader: "html-loader"
            }
         },
         {
            test: /\.css/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader"
            ]
         }
      ]
   }
}

module.exports = config;
