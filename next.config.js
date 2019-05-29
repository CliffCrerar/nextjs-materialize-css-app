/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06 
 * Last modified  : 2019-05-29 23:34:27
 */

// Declarations
require( './config' );
const withSourceMaps = require( '@zeit/next-source-maps' )();
const withSass = require( '@zeit/next-sass' );
const withPlugins = require( 'next-compose-plugins' );


// Plugins
var plugins = [ withSourceMaps, withSass ]

// Configuration
const NextAppConfig = ( phases, {defaultconfig} ) => {
	console.log( 'defaultconfig: ', defaultconfig );
}

// build themes 
//buildTheme();




module.exports = withPlugins( [ plugins ], NextAppConfig );