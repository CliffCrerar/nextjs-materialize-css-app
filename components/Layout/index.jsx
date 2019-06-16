/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-06-03 01:03:18
 */
import React, {useState} from 'react';
import {StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts, Footer, PageLoader} from 'components';
// import Router from 'next/router';
// console.log( 'Router: ', Router );

// Router.ready( () => console.log( 'ROUTER READY' ) );
// Router.events.on( 'routeChangeStart', ( ev ) => console.log( "routeChangeStart", ev ) );
// Router.events.on( 'routeChangeComplete', ( ev ) => routing( "routeChangeComplete", ev ) );
// Router.events.on( 'routeChangeError', ( ev ) => routing( "routeChangeError", ev ) );

const WithLayout = PageComponent => {
	console.log( 'Layout' );

	return ( props ) => {
		{console.log( 'props: ', props );}
		const [ count, setCount ] = useState( 0 );
		return (
			<React.Fragment>
				<PageHead />
				<StyleGlobal themeFromCookies={props.theme} />
				<NavBar />
				{/*<PageLoader />*/}
				<PageComponent />
				<FloatingButtonAction />
				<Scripts />
				<Footer />
			</React.Fragment >
		)
	};
};


export default WithLayout;
