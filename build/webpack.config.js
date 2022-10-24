const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        static: './dist',
        compress: false,
        port: 8080,
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     // cleanOnce
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}