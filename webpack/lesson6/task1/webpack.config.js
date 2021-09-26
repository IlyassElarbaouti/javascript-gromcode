module.exports = {
    entry : './src/index.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test:/.css$/,
            use:['style-loader','css-loader']
        },
        {
            test:/.scss$/,
            use:['scss-loader','style-loader','css-loader',]
        },
        {
            test:/.(jpg|png)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:8192
                }
            }]
        }]
    }
}