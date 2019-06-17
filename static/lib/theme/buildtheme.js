/**
 * THEME BUILDER
 * @summary Looks at CSS formatter files in ../colors and builds a theme file
 * @author Cliff Crerar
 * Created at     : 2019-05-26 03:59:26
 * Last modified  : 2019-06-05 00:44:59
 */
//var ch1 = require( 'css-to-json/cssjson' );

/*------------------------*/
const dev = process.env.NODE_ENV === undefined
console.log( 'dev: ', dev );
console.log( 'PROCESS ENV', process.ENV );
/*------------------------*/

const
	path = require( 'path' ),
	ut = require( 'util' ),
	fs = require( 'fs' ),
	CSSJSON = require( path.join( __dirname, '../', 'css-to-json' ) );

console.log( __dirname );
console.log( __filename );
console.log( process.cwd() );

// function export
module.exports = () => {
	ut.log( '|> BUILDING THEMES' );
	// declare variables
	const
		themesOBJ = {},
		showLoops = false,
		relColorSchemeDir = './colors',
		getCWD = ( fName ) => path.join( relColorSchemeDir, ( fName === undefined ? '' : fName ) ),
		readFiles = fs.readdirSync( './colors' );
	var i = 0;
	// Start procedure
	showLoops && console.log( 'start loop 1' );
	for ( i; i < readFiles.length; i++ ) {
		if (
			path.extname( getCWD( readFiles[ i ] ) ) === '.css' &&
			![ 'resulting-file.css' ].includes( readFiles[ i ] )
		) {
			themesOBJ[ path.parse( readFiles[ i ] ).name ] = {};
			showLoops && console.log( 'start loop 2' );
			Object.entries( CSSJSON.toJSON( fs.readFileSync( getCWD( readFiles[ i ] ), 'utf8' ) ).children ).forEach( attr => {themesOBJ[ path.parse( readFiles[ i ] ).name ][ attr[ 0 ].substr( 1 ) ] = Object.entries( attr[ 1 ].attributes )[ 0 ][ 1 ]} );
			showLoops && console.log( 'end loop 2' );
		}
	}
	showLoops && console.log( 'end loop 1' );
	// Finish by writing themes to file
	return ( async () => {
		ut.log( '|> THEMES BUILT' );
		ut.log( '|> THEME COUNT: ', i );
		await fs.writeFile( __dirname + '/themes.json', JSON.stringify( themesOBJ ), ( err ) => {
			ut.log( '|> WRITE OUT THEME NAMES' );
			if ( err ) throw err;
			require( './themeNames.js' )(); // write theme names
		} );
	} )();
}

dev && require( './buildtheme' )();