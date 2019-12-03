import React from 'react';
import App from 'next/app';
class MaterialNextApp extends App {
	static async getInitialProps( {Component, ctx} ) {
		let pageProps = {};
		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );

		}
		return {pageProps};
	}
	render() {
		// console.log( '_app' )
		const {Component, pageProps} = this.props;
		return (
				<Component {...pageProps} />
		);
	}
}
export default MaterialNextApp;