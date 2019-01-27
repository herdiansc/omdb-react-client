const path = require('path');

var config = {
   entry: __dirname + '/main.js',
	
   output: {
      path: path.join(__dirname, "dist"),
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
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
