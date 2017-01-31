var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.jsx',
	},
	output: {
    path: path.join(__dirname, '../public'),
    filename: '/bundle.js'
  },
	module: {
		loaders: [
			{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style','css','sass'],
        exclude: /(node_modules)/,
        include: path.join(__dirname, '/src')
      },
			{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loader: 'file-loader?name=images/[name]-[hash].[ext]'
			},
			{
					test: /\.(woff|woff2|eot|ttf)$/i,
					loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
 		new webpack.NoErrorsPlugin()
	],
	devServer: {
		historyApiFallback: true
	},
	"build-dev": {
		devtool: "sourcemap",
		debug: true
	}
};
