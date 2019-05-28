/**
 * MATERIALIZE EVENT LISTENER
 *
 * @summary Listens for the right moment to run materialize-css javascript
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 02:04:20
 * Last modified  : 2019-05-28 02:15:05
 */

function RunMatJS( listener ) {
	try {
		return document.addEventListener( 'DOMContentLoaded', listener )
	} catch ( err ) {
		console.log( 'Error running material function:' );
		throw err;
	}

}

export default RunMatJS;