require( 'fs' ).readFile( require( 'path' ).join( __dirname, '../', 'license.md' ), err => {
	try {
		if ( err ) throw err;
	} catch ( err ) {
		console.log( 'There was and error' )
		console.error( err )
	}
} )