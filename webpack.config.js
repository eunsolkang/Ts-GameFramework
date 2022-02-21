const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
    devServer: {
        port: 5000
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{ loader: "ts-loader" }
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.mp3$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
                template: './dist/index.html'
            })
      ],
}