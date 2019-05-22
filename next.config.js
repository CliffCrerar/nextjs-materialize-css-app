const withPlugins = require( 'next-compose-plugins' );

const withCSS = require( '@zeit/next-css' );
const withSASS = require( '@zeit/next-sass' );
const nextEnv = require( 'next-env' );
const dotenvLoad = require( 'dotenv-load' );
const path = require( 'path' );

process.env.NODE_PATH = process.cwd();

//console.log( process );


// Initialize environment
dotenvLoad();
const withNextEnv = nextEnv( {
	staticPrefix: 'STATIC_',
	publicPrefix: 'PUBLIC_',
	serverPrefix: 'SERVER_'
} );


const nextConfigBuild = {}

const nextConfigDev = {}

const nextConfigCommon = {
	// serverside config
	//webpack: ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
	//config.plugins.push( new webpack.IgnorePlugin(//__tests__//));
	//config.module.rules.push( {test: /\.(png|jpe?g|gif)$/, use: [ {loader: 'file-loader', options: {}, }, ], } )
	//isServer = false;
	//	config.module.rules.push( {test: /\.css$/, use: [ 'style-loader', 'css-loader' ], } );
	// config.module.rules.push( {
	// 	test: /\.(scss|css|sass)$/, use: [
	// 		"style-loader", // creates style nodes from JS strings
	// 		"css-loader", // translates CSS into CommonJS
	// 		"sass-loader" // compiles Sass to CSS, using Node Sass by default
	// 	]
	// } );
	//return config;

}

module.exports = withPlugins(
	// Plugins
	[
		withCSS,
		withSASS,
		withNextEnv
	],
	// Next config
	//nextConfigCommon
)