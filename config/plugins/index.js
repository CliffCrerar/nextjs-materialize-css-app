// plugins with no configs
const
	withSourceMaps = require( "@zeit/next-source-maps" ),
	withSass = require( "@zeit/next-sass" );
// withMDX = require( './mdx.config' ); MDX has been excluded for now

module.exports = [
	// [ withMDX ], excluded for now
	[ withSourceMaps ],
	[ withSass ]
]
