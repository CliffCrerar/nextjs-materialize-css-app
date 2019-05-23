module.exports = function ( {module} ) {
	const
		File_loader = {test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/, use: [ 'file-loader' ]},
		Url_loader = {
			test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/i, use: {loader: 'url-loader', options: {limit: 8192}}
		},
		Css_loader = {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
		Sass_loader = {
			test: /\.(scss)$/, use: [
				"style-loader", // creates style nodes from JS strings
				"css-loader", // translates CSS into CommonJS
				"sass-loader" // compiles Sass to CSS, using Node Sass by default
			],
		};

	Loaders = [
		{obj: Url_loader, type: 'ld', state: 1},
		{obj: Css_loader, type: 'ld', state: 1},
		{obj: Sass_loader, type: 'ld', state: 1},
		{obj: File_loader, type: 'ld', state: 0}
	]

	for ( let i = 0; i < this.Loaders.length; i++ ) {
		if ( Loaders[ i ].state !== 0 ) module.rules.push( Loaders[ i ].obj );
	}
	return {module};
}