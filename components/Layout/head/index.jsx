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

console.log( 'NODE ENV -------->', process.env.NODE_ENV );

function formatPath( p ) {
	if ( p === '/' ) {
		return 'Landing Page'
	};
	let firstCap = p[1].toUpperCase();
	let RestCase = p.substring( 2, p.length );
	return `${firstCap}${RestCase}`
}



const PageHead = ( {router} ) => {
	var thisPath = formatPath( router.pathname );

	// const Analytics = () => {
	// 	const gtagScript = () => {
	// 		window.dataLayer = window.dataLayer || [];
	// 		function gtag() {dataLayer.push( arguments );}
	// 		gtag( 'js', new Date() );
	// 		gtag( 'config', 'UA-149871914-1' );
	// 	}
	// 	return (
	// 		<React.Fragment>
	// 			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-149871914-1"></script>
	// 			<script src={gtagScript()}></script>
	// 		</React.Fragment>
	// 	)
	// }

	return (
		<Head>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Analytics />
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Material Next: {thisPath}</title>
			<link key="favicon" rel="icon" href="static/favicon/favicon.ico" type="image/ico" />
			<link rel="stylesheet" href="static/style/lib/materialize.css" />
			<link rel="stylesheet" href="static/style/lib/mnext-rad.css" />
			<link rel="stylesheet" href="static/style/css/style.css" />
		</Head>
	)
}

export default withRouter( PageHead );