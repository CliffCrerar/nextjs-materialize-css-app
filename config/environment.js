/**
 * ENVIRONMENT CONFIG
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2019-05-27 23:58:19 
 * Last modified  : 2019-05-27 23:59:33
 */

const
	os = require( 'os' );

function ProjectPaths( rootDir ) {
	const
		x = os.platform() === 'win32' ? ';' : ':', // delimiter in this context
		node_app = `${rootDir}${x}`,
		node_lib = `${rootDir}/static/lib${x}`,
		node_global = `${rootDir}/global${x}`,
		node_Path = `${node_app}${rootDir}${node_lib}${node_global}`;
	return node_Path
}

process.env.NODE_PATH = ProjectPaths( process.cwd() );