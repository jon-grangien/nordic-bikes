import webpack from 'webpack';

export default {
  devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', 'json', '.scss', '.css',]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false
	    }
	  })
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
			 test: /\.scss$/,
			 loader: 'style!css!sass?outputStyle=compressed'
		  },
      {
        test: /\.json$/,
        loaders: ["json"]
      }
		]
	},
	sassLoader: {
		includePaths: [
			'./node_modules',
			// this is required only for NPM < 3.
	 	  // Dependencies are flat in NPM 3+ so pointing to
			// the internal grommet/node_modules folder is not needed
			'./node_modules/grommet/node_modules'
		]
	}
};
