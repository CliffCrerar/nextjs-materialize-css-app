/**
 * THEME BUILDER
 * @summary Looks at CSS formatter files in ../colors and builds a theme file
 * @author Cliff Crerar
 * Created at     : 2019-05-26 03:59:26
 * Last modified  : 2019-05-26 18:20:50
 */
//var ch1 = require( 'css-to-json/cssjson' );
const
	ut = require( 'util' ),
	CSSJSON = require( '../css-to-json' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	relColorSchemeDir = '../colors',
	getCWD = ( fName ) => path.join( __dirname, relColorSchemeDir, ( fName === undefined ? '' : fName ) ),
	readFiles = fs.readdirSync( getCWD() ),
	themesOBJ = {},
	showLoops = false;
module.exports = () => {
	ut.log( '|> BUILDING THEMES' );
	showLoops && console.log( 'start loop 1' );
	for ( let i = 0; i < readFiles.length; i++ ) {
		if (
			path.extname( getCWD( readFiles[ i ] ) ) === '.css'
			&& ![ 'resulting-file.css' ].includes( readFiles[ i ] )
		) {
			themesOBJ[ path.parse( readFiles[ i ] ).name ] = {};
			showLoops && console.log( 'start loop 2' );
			Object.entries( CSSJSON.toJSON( fs.readFileSync( getCWD( readFiles[ i ] ), 'utf8' ) ).children ).forEach( attr => {themesOBJ[ path.parse( readFiles[ i ] ).name ][ attr[ 0 ].substr( 1 ) ] = Object.entries( attr[ 1 ].attributes )[ 0 ][ 1 ]} );
			showLoops && console.log( 'end loop 2' );
		}
	}
	showLoops && console.log( 'end loop 1' );
	showLoops && console.log( themesOBJ, process.cwd() );
	return ( () => {
		ut.log( '|> THEMES BUILT' );
		fs.writeFileSync( __dirname + '/themes.json', JSON.stringify( themesOBJ ) );
	} )();
}


/*
const
	fs = require( 'fs' ),
	path = require( 'path' );

console.log( __dirname );

var filesInHere = fs.readdirSync( __dirname );
console.log( 'dir: ', filesInHere );

filesInHere.forEach( fileName => {
	console.log( 'file: ', fileName );
	console.log( fs.readFileSync( path.join( __dirname, fileName ), 'utf8' ) );
	const file = fs.readFileSync( path.join( __dirname, fileName ), 'utf8' )
	//file.split( '{' ).split( '}' );
	console.log( file );
} );*/