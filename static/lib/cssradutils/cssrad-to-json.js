/**
 * CONVERT CSS RAD TO JSON
 * @summary Take the bootstrap util classes and extract the classnames to json file
 * @author Cliff Crerar
 * Created at     : 2019-06-05 00:39:20
 * Last modified  : 2019-06-05 01:04:40
 */

const cssRadFile = require( 'fs' ).readFileSync( './cssradutils.css', 'utf8' );
const CSSTOJSON = require( '../css-to-json' );

const cssRadJson = JSON.stringify( Object.entries( CSSTOJSON.toJSON( cssRadFile ).children ).map( itm => itm[ 0 ] ) );
console.log( 'cssRadJson: ', cssRadJson );
require( 'fs' ).writeFileSync( './cssrad.json', cssRadJson );
console.log();