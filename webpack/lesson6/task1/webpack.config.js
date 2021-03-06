module.exports = {
    entry : './src/index.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        rules:[{
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
      },]
    }
}