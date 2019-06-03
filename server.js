// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const {createServer} = require( 'http' );
const {parse} = require( 'url' );
const next = require( 'next' );
const dev = process.env.NODE_ENV !== 'production';
const app = next( {dev} );
const handle = app.getRequestHandler();
const path = require( 'path' )
console.log();

// Temp
var fs = require( 'fs' );
process.env.NODE_ENV = './'
console.log( 'process.env.NODE_ENV: ', process.env.NODE_ENV );
//fs.writeFileSync( './next.json', JSON.stringify( app ) );



app.prepare().then( () => {
	createServer( ( req, res ) => {
		// Be sure to pass `true` as the second argument to `url.parse`.
		// This tells it to parse the query portion of the URL.
		const parsedUrl = parse( req.url, true );
		const {pathname, query} = parsedUrl;

		/* HANDLERS */
		//const {themeNameList} = require( path.join( __dirname, '/static/server' ) )
		/* HANDLERS */

		/*  */


		/*  */

		switch ( pathname ) {

			case 'a': app.render( req, res, '/b', query ); break;

			case 'b': app.render( req, res, '/b', query ); break;

			//case '/themenamelist': themeNameList( req, res ); break;

			default: handle( req, res, parsedUrl ); break;
		}

		/**/ // LOGGING!
		let logAll = true;
		if ( logAll ) {
			1 && console.log( 'query: ', query );
			1 && console.log( 'pathname: ', pathname );
			0 && console.log( 'next: ', next );
			0 && console.log( 'next({ dev });: ', next( {dev} ) );
			0 && console.log( 'handle: ', handle );
			0 && console.log( 'parsedUrl: ', parsedUrl );
		}
		/**/
	} ).listen( 3000, err => {
		if ( err ) throw err;
		console.log( '> Ready on http://localhost:3000' );
	} );
} );