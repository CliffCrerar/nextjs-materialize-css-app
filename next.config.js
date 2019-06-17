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
const defaultThemeName = "blue-deeporange" // Set default theme name
const distributionBuildDirectory = ".next"; // Set build directory for build and dev
const distDir = distributionBuildDirectory
// Run themes file rebuild
var plugins = [
	[ withSourceMaps ],
	[ withSass ]
]; // Plugins
const NextAppConfig = { // Configuration
	distDir,
	target: 'server',
	env: {
		temp_secret: 'temp',
		DEFAULT_THEME: defaultThemeName
	},
	pageExtensions: [ 'jsx', 'js' ],
	webpack: ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		// Important: return the modified config
		config.module.rules.push( {test: /\.md$/, use: 'raw-loader'} );
		// Example using webpack option
		config.plugins.push( new webpack.IgnorePlugin( /\/__tests__\// ) );
		return config;
	},
};
// Implementations
// domReadyContent && ( process.env.DOM_CONTENT_LOAD = true );
module.exports = withPlugins( plugins, NextAppConfig );