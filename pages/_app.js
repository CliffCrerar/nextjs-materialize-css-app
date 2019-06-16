import React from 'react';
import App, {Container} from 'next/app';
import {cookieservice} from 'static/js/services';
class MaterialNextApp extends App {
	static async getInitialProps( {Component, ctx} ) {
		let pageProps = {};
		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
			pageProps.theme = await cookieservice.getTheme() || 'deep-blueorange'
		}
		return {pageProps};
	}
	render() {
		console.log( '_app' )
		const {Component, pageProps} = this.props;
		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}
export default MaterialNextApp;