/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-06-03 01:03:18
 */

import {StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts} from 'components';
import {Router} from 'next/router';
console.log( 'Router: ', Router );
import React from 'react';



const WithLayout = PageComponent => {
	console.log( 'App' );

	function LoadingSpinner() {
		return (
			<div>
				<img src="static/img/loading.gif"></img>
			</div>
		)
	}

	return () => (
		<React.Fragment>
			<PageHead />
			<StyleGlobal />
			<NavBar />
			<div>

				<LoadingSpinner />
				<div hidden="true">
					<PageComponent />
				</div>
			</div>
			<FloatingButtonAction />
			<Scripts />
		</React.Fragment >
	);
};


export default WithLayout;
