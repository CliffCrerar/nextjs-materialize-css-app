// plugins with no configs
const
	withSourceMaps = require( "@zeit/next-source-maps" ),
	withSass = require( "@zeit/next-sass" ),
	withMDX = require( './mdx.config' );

module.exports = [
	[ withMDX ],
	[ withSourceMaps ],
	[ withSass ]
]
