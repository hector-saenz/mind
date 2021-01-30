const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'mind',
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: 'public/favicon.ico'
        })
    ]
}