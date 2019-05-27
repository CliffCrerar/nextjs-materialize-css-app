/**
 * PAGE HEAD
 *
 * @summary Next.js Head element
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-23 23:14:52 
 * Last modified  : 2019-05-26 23:11:58
 */

import Head from 'next/head';
import {Links, StyledMain} from 'global/styles';
import {withRouter} from 'next/router'

function formatPath( p ) {
	if ( p === '/' ) {
		return 'Landing Page'
	};
	let firstCap = p[ 1 ].toUpperCase();
	let RestCase = p.substring( 2, p.length );
	return `${firstCap}${RestCase}`
}

const PageHead = ( {router} ) => {
	var thisPath = formatPath( router.pathname );
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Online Portfolio - {thisPath}</title>
			<Links />
			<StyledMain />
		</Head>
	)
}

export default withRouter( PageHead );