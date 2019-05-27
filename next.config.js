/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06 
 * Last modified  : 2019-05-28 00:27:05
 */

require( './config' );
const withSass = require( '@zeit/next-sass' );

module.exports = withSass( {
	cssModules: true
} );