
import React from 'react';
import App, {Container} from 'next/app';
import WithLayout from 'Index'
import config from 'config'

class AppContent extends App {
	constructor ( props ) {
		super( props )
	}

	static async getInitialProps( {Component, ctx} ) {
		let pageProps = {};

		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
		}

		return {pageProps};
	}

	componentDidMount() {

	}

	render() {
		console.log( '_app' );
		const {Component, ...pageProps} = this.props;
		return (
			<Container>
				<WithLayout>
					<Component {...pageProps} />
				</WithLayout>
			</Container>
		);
	}
};

export default AppContent;