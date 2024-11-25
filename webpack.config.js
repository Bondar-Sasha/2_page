const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => ({
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
    },
    resolve: {
        extensions: ['.html', '.css', '.js', '.scss'],
    },
    optimization: {
        minimize: true,
        usedExports: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', 'data'),
                    to: path.resolve(__dirname, 'docs', 'data'),
                },
            ],
        }),
    ],

    // devtool: 'source-map',
    devServer: {
        compress: true,
        port: process.env.DEV_PORT,
        hot: true,
        open: true,
    },
})
