/**
 * FETCH MATERIALIZE JS
 *
 * @summary Gets the materialize javascript from the libraries folder
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-26 21:56:11
 * Last modified  : 2019-05-28 01:59:31
 */

const scriptPaths = {
	materialize: {
		development: 'static/lib/materialize-css/js/materialize.js',
		production: 'static/lib/materialize-css/js/materialize.min.js'
	}
}


export default scriptPaths;