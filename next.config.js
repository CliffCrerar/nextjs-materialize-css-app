/**
 * NEXT CONFIG
 *
 * @summary Configure Next App
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-27 23:42:06
 * Last modified  : 2019-06-17 23:28:32
 */

// Declarations
const
	target = "server",
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
		pageExtensions: [ 'js', 'jsx', 'md', 'mdx' ],
		webpack: ( config, {buildId, dev, isServer, defaultLoaders, webpack} ) => {
			console.log( "Node Path: ", process.env.NODE_PATH, '\n' );

			// Note: we provide webpack above so you should not `require` it
			// Perform customizations to webpack config
			// Important: return the modified config
			config.module.rules.push( {test: /\.md$/, use: 'raw-loader'} );
			// Example using webpack option
			config.plugins.push( new webpack.IgnorePlugin( /\/__tests__\// ) );
			return config;
		},
	};
// Implementations
// domReadyContent && ( process.env.DOM_CONTENT_LOAD = true );
module.exports = withPlugins( plugins, NextAppConfig );