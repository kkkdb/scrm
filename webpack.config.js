var path = require('path'),
	webpack = require('webpack')
// npm run dev
module.exports = {
	entry: './src/main.js',
	output: {
		path: '/dist/',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.css', '.scss', '.less'],
		alias: {
		    'vue$': 'vue/dist/vue.js'
	 	}
	},
	plugins: [
		new webpack.ProvidePlugin({
      		"$":'webpack-zepto',
	      	"zepto":"zepto",
	      	"window.zepto":"webpack-zepto"
	    })
	]
};