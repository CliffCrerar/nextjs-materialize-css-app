const
	os = require( 'os' );

module.exports = ( rootDir ) => {

	const
		x = os.platform() === 'win32' ? ';' : ':', // delimiter in this context
		node_app = `${rootDir}${x}`,
		node_lib = `${rootDir}/lib${x}`,
		node_global = `${rootDir}/global${x}`,
		node_Path = `${node_app}${rootDir}${node_lib}${node_global}`;

	return node_Path
}


