/**
 * FETCH MATERIALIZE JS
 *
 * @summary Gets the materialize javascript from the libraries folder
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-26 21:56:11
 * Last modified  : 2019-06-03 22:25:47
 */

const scriptPaths = {
  documentReady: "static/js/document-ready.js",
  materialize: {
    development: "static/lib/materialize-css/js/materialize.js",
    production: "static/lib/materialize-css/js/materialize.min.js"
  }
};

export default scriptPaths;
