const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        hot: true,
        open: false,
        compress: true,
        port: 3000
    },

    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx"],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(le|c)ss$/,
                use: [ "style-loader", "css-loader", "less-loader" ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [{ loader: '@svgr/webpack', options: { icon: true } }],
            },

        ]
    },

    resolve: {
        extensions: ['.jsx', '.js'],
    },


}