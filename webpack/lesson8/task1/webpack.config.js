const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry : './src/index.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        rules:[{
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images',
            },
          },
        ],
       
      }]
    },
     plugins:[
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename:'[name].css'
            })
        ],
    devserver:{
      port:9000,
      hot:true,
    }
}