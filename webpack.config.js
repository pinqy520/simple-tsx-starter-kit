"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
loaders.push({
	test: /\.css$/,
	include: ['node_modules'],
	loaders: [
		'style-loader',
		'css-loader'
	]
});
// local scss modules
loaders.push({
	test: /\.scss$/,
	exclude: ['node_modules'],
	loaders: [
		'style-loader?sourceMap',
		'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		'postcss-loader',
		'sass-loader'
	]
});

// local css modules
loaders.push({
	test: /\.css$/,
	exclude: ['node_modules'],
	loaders: [
		'style-loader?sourceMap',
		'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		'postcss-loader',
	]
});

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.tsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		// host: HOST
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html'
		}),
	]
};
