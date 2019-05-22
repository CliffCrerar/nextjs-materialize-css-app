const
	ut = require( 'util' ),
	nodeSass = require( 'node-sass' ),
	fs = require( 'fs' ),
	strip = require( 'strip-comments' );

ut.log( '|---------------- TESTING ------------------|' )

const
	file = './lib/materialize/sass/materialize.scss',
	options = {type: 'string'};


nodeSass.render( {file, options}, fn )

function fn( err, res ) {
	if ( err ) throw err;
	//console.log( res.css );
	const cssString = res.css.toString();

	const pureCSS = strip( cssString );

	fs.writeFileSync( './materialize.css', pureCSS, 'utf8' )
	return;
}