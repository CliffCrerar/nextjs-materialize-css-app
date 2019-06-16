/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06
 * Last modified  : 2019-06-15 13:42:25
 */

// Declarations
require( "./config" );
const withSourceMaps = require( "@zeit/next-source-maps" );
const withSass = require( "@zeit/next-sass" );
const withPlugins = require( "next-compose-plugins" );

// Load document ready scripts
const domReadyContent = true;

// Set build directory for build and dev
const productionBuildDirectory = "dist";
const developmentBuildDirectory = ".next";
const distDir = process.env.NODE_ENV === 'development' ? developmentBuildDirectory : productionBuildDirectory

// Run themes file rebuild

// Plugins
var plugins = [
	[ withSourceMaps ],
	[ withSass ]
];
// Configuration
const NextAppConfig = {
	distDir,
	target: 'server',
	env: {

	},
	pageExtensions: [ 'jsx', 'js' ],
	webpack: ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		// Important: return the modified config
		config.module.rules.push(
			{
				test: /\.md$/,
				use: 'raw-loader'
			}
		)
		// Example using webpack option
		config.plugins.push( new webpack.IgnorePlugin( /\/__tests__\// ) );
		return config;
	},
};
console.log( 'NextAppConfig: ', NextAppConfig );
// Implementations
domReadyContent && ( process.env.DOM_CONTENT_LOAD = true );

module.exports = withPlugins( plugins, NextAppConfig );