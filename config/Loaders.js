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
		},
		Babel_loader = {
			test: /\.m?js$/, exclude: /(node_modules|bower_components)/, use: {loader: 'babel-loader', options: {presets: [ '@babel/preset-env' ]}}
		},
		JSX_CSS_loader = {
			test: /\.css$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						plugins: [
							require.resolve( 'babel-plugin-transform-es2015-modules-commonjs' ),
							require.resolve( 'styled-jsx/babel' ),
						]
					}
				},
				'styled-jsx-css-loader'
			]
		}

	Loaders = [
		{obj: Url_loader, type: 'ld', state: 0},
		{obj: Css_loader, type: 'ld', state: 0},
		{obj: Sass_loader, type: 'ld', state: 0},
		{obj: Babel_loader, type: 'ld', state: 0},
		{obj: JSX_CSS_loader, type: 'ld', state: 0},
		{obj: File_loader, type: 'ld', state: 0}
	]

	for ( let i = 0; i < this.Loaders.length; i++ ) {
		if ( Loaders[ i ].state !== 0 ) module.rules.push( Loaders[ i ].obj );
	}
	return {module};
}