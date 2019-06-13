/**
 * Cookie Service
 * @summary Creates cookies for browser
 * @author Cliff Crerar
 * Created at     : 2019-06-02 23:25:10
 * Last modified  : 2019-06-03 00:39:13
 */

const Cookies = require( 'js-cookie' );
const devMode = process.env.NODE_ENV === 'development';

const cookieservice = {
	setTheme: function ( themeName, callback ) {
		let cb;
		arguments[ 1 ] === undefined ? ( cb = () => null ) : ( cb = callback );
		devMode && console.log( 'setting theme cooky:', themeName );
		Cookies.set( 'theme', themeName );
		devMode && console.log( 'Cookies.get(theme): ', Cookies.get( 'theme' ) );
		return cb();
	},
	getTheme: function () {
		return Cookies.get( 'theme' );
	},
	erase: function () {
		return Cookies.erase();
	},
};

export default cookieservice;
