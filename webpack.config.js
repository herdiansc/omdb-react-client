const Dotenv = require('dotenv-webpack');

var config = {
   entry: __dirname + '/main.js',
	
   output: {
      path: __dirname + '/',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },

   plugins: [
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
         }
      ]
   }
}

module.exports = config;
