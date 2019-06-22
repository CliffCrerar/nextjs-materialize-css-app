/**
 * NEXT CONFIG
 * @summary Configure Next App
 * @author Cliff Crerar
 * Created at     : 2019-05-27 23:42:06
 * Last modified  : 2019-06-18 02:43:24
 * @about NextJS config
 */

// Declarations
const
	target = "serverless",
	withPlugins = require( "next-compose-plugins" ),
	{plugins, nodePath} = require( './config' ),
	//{withMdx} = require( './config' ),
	defaultThemeName = "blue-deeporange", // Set default theme name
	distributionBuildDirectory = ".next", // Set build directory for build and dev
	distDir = distributionBuildDirectory,
	// Run themes file rebuild
	NextAppConfig = { // Configuration
		distDir,
		target,
		env: {
			temp_secret: 'temp',
			DEFAULT_THEME: defaultThemeName
		},
		pageExtensions: [ 'js', 'jsx', 'md'/*, 'mdx'*/ ],
		webpack: ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
			// Note: we provide webpack above so you should not `require` it
			// Perform customizations to webpack config
			// Important: return the modified config
			config.module.rules.push( {test: /\.md$/, use: 'raw-loader'} );
			// Example using webpack option
			config.plugins.push( new webpack.IgnorePlugin( /\/__tests__\// ) );
			return config;
		},
	};
// Implementation of config
console.log( "Node Path: ", process.env.NODE_PATH, '\n' );
module.exports = withPlugins( plugins, NextAppConfig );
