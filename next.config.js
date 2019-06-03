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

// Run themes file rebuild
//buildTheme();

// Plugins
var plugins = [ [ withSourceMaps ], [ withSass ] ];

// Configuration
const NextAppConfig = ( phases, {defaultconfig} ) => {
	//console.log( 'defaultconfig: ', defaultconfig );

	return defaultconfig;
};

// Implementations
domReadyContent && ( process.env.DOM_CONTENT_LOAD = true );

module.exports = withPlugins( plugins, NextAppConfig );
