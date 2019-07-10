/**
 * GLOBAL SCRIPTS
 *
 * @summary Script tags for global available on all pages
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:47:41
 * Last modified  : 2019-06-15 15:12:30
 */

import {scriptPaths} from 'static/js';
var appMode = process.env.NODE_ENV;
const Scripts = () => {
	console.log( 'Scripts' );
	return (
		<React.Fragment>
			<script src={scriptPaths.materialize[ appMode ]} />
			<script src={scriptPaths.documentReady} />
		</React.Fragment>
	);
};

export default Scripts;
