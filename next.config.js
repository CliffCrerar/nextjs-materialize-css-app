/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06 
 * Last modified  : 2019-05-28 05:38:31
 */

require( './config' );
const withSass = require( '@zeit/next-sass' );

const NextAppConfig = ( phases, {defaultconfig} ) => {
	console.log( 'defaultconfig: ', defaultconfig );

}

module.exports = withSass( NextAppConfig );