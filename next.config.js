const withPlugins = require( 'next-compose-plugins' );

const withCSS = require( '@zeit/next-css' );
const withSASS = require( '@zeit/next-sass' );
const nextEnv = require( 'next-env' );
const dotenvLoad = require( 'dotenv-load' );
const withSourceMaps = require( '@zeit/next-source-maps' )()
//const path = require( 'path' );
const {Loaders, ProjectPaths} = require( './config' );

// Set node path for project
process.env.NODE_PATH = ProjectPaths( process.cwd() );

// Initialize environment
dotenvLoad();
const withNextEnv = nextEnv( {
	staticPrefix: 'STATIC_', // prefix for environment variables only available to server
	publicPrefix: 'PUBLIC_',// prefix for environment variables only available to server and client
	serverPrefix: 'SERVER_' // prefix for environment variables only available to server
} );
// Set custom env var
process.env.PUBLIC_APPMODE = process.env.NODE_ENV;
const nextConfigBuild = {} // for custom build configuration
const nextConfigDev = {} // for custom dev configuration
const nextConfigCommon = withCSS( withSASS( {
	// serverside config
	webpack: async ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
		//config.plugins.push( new webpack.IgnorePlugin(//__tests__//));
		await Loaders( config );
		return config;
	}
} ) );

module.exports = withPlugins(
	// Plugins
	[
		withCSS( {cssModule: true} ),
		withSASS( {cssModule: true} ),
		[ withNextEnv ],
		[ withSourceMaps ]
	],
	// Next config
	nextConfigCommon
)