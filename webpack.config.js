var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './flickrGallery.js'
    ],
    output: {
        path: path.resolve(__dirname, "bin"),
        publicPath: 'http://localhost:8080/bin',
        filename: 'app.bundle.js'
    },
    devServer: {
     	historyApiFallback: true,
     	hot: true,
     	inline: true,
     	progress: true
    },
    resolve: {
     	extensions: ["", ".js", ".css", ".json"]
    },
    plugins: [
     //  new webpack.HotModuleReplacementPlugin(),
     //  new webpack.optimize.UglifyJsPlugin({
     //      compressor: {
     //          warnings: false
     //      }
     //  }),
    	// new webpack.ProvidePlugin({
    	// 	$: "jquery",
    	// 	jQuery: "jquery",
    	// 	"window.jQuery": "jquery"
    	// })
    ],
    module: {
     	loaders: [
	     	{
	     		test: /\.js$/,
	     		exclude: /node_modules/,
	     		loader: 'babel?presets[]=es2015&presets[]=react',
	     	},
	     	{
        		test: /\.css$/,
        		loader: "style!css",
      		},
      		{
        		test: /\.(jpg|png|gif|svg)$/,
        		loader: "url?limit=10000",
      		},
      		{
		       test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
		       loader : 'url?prefix=font/&limit=10000'
			}

     	]
    }
};