/**
 * WEB PACK PLUG-INS
 *
 * @summary For next configuration of plugins
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-25 04:08:18
 * Last modified  : 2019-05-25 04:14:38
 */

const WebpackCleanPlugin = require( 'webpack-clean-plugin' );

module.exports = ( config ) => {
	const AddPlugins = [
		new WebpackCleanPlugin( {
			on: "emit",
			path: [ '/.next' ]
		} )
	]
	config.concat( AddPlugins );
	return config;
}