/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06
 * Last modified  : 2019-06-03 22:32:18
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
	serverRuntimeConfig: {
		// Will only be available on the server side
		//mySecret: 'secret',
		//secondSecret: process.env.SECOND_SECRET // Pass through env variables
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		// staticFolder: '/static'
	},
	pageExtensions: [ 'jsx', 'js' ],
};

// Implementations
domReadyContent && ( process.env.DOM_CONTENT_LOAD = true );

module.exports = withPlugins( plugins, NextAppConfig );