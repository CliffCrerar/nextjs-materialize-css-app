/**
 * SCRIPTS
 *
 * @summary Inline scripts for application
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-26 21:52:32
 * Last modified  : 2019-05-26 22:39:23
 */

import {materialize_script, scriptPaths} from 'static/js'

// type ? <between> the script will be injected, <src> the script will be referenced
const inlineScripts = [
	{type: 'between', instantiate: 'run', script: materialize_script}
]

const Scripts = () => (
	<React.Fragment>
		<script src={scriptPaths.materialize}></script>
	</React.Fragment>
)

export default Scripts;
