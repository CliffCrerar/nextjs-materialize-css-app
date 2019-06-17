/**
 * MDX Config
 * @summary short description for the file
 * @author Cliff Crerar
 *
 * Link to configuring MDX for Next.js
 * @link https://mdxjs.com/getting-started/next
 *
 * Created at     : 2019-06-17 21:48:18
 * Last modified  : 2019-06-17 23:03:11
 */

const
	nextMDX = require( '@next/mdx' ),
	withMDX = nextMDX( {
		extension: /\.(md|mdx)$/,
		options: {
			remarkPlugins: []
		}
	} );

module.exports = withMDX;