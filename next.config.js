/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06 
 * Last modified  : 2019-05-28 05:44:32
 */

require( './config' );
const withSourceMaps = require( '@zeit/next-source-maps' )();
const withSass = require( '@zeit/next-sass' );
const withPlugins = require( 'next-compose-plugins' );

var defConf;

const NextAppConfig = ( phases, {defaultconfig} ) => {
	console.log( 'defaultconfig: ', defaultconfig );
	defConf = defaultconfig;
}
console.log( 'defConf: ', defConf );

//module.exports = withSass( NextAppConfig );

var plugins = [ withSourceMaps, withSass ]

module.exports = withPlugins( [ plugins ], NextAppConfig );