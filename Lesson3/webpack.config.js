const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader","css-loader","sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
        { 
            template: './index.html', 
            filename: 'index.html'
        }
    ),
  ],
  devServer:{
    static: path.resolve(__dirname,'dist'),
    port: 4200,
    open: true
  }
};
