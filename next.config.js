const
	ut = require( 'util' ),
	withPlugins = require( 'next-compose-plugins' ),

	withCSS = require( '@zeit/next-css' ),
	withSASS = require( '@zeit/next-sass' ),
	withSourceMaps = require( '@zeit/next-source-maps' )(),

	nextEnv = require( 'next-env' ),
	dotenvLoad = require( 'dotenv-load' ),

	{Loaders, ProjectPaths} = require( './config' ),

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
		ut.log( ' -> Running custom webpack config' );
		await Loaders( config ); // configure loaders
		await Plugins( config ); // configure plugins
		console.log( config );
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