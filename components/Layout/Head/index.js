/**
 * PAGE HEAD
 *
 * @summary Next.js Head element
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-23 23:14:52 
 * Last modified  : 2019-06-15 15:00:20
 */

import Head from 'next/head';
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
			<link key="favicon" rel="icon" href="static/favicon/favicon.ico" type="image/ico" />
			<link rel="stylesheet" href="static/lib/css/materialize.css" />
			<link rel="stylesheet" href="static/lib/css/mnext-rad.css" />
		</Head>
	)
}

export default withRouter( PageHead );