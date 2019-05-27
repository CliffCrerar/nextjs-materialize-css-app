
import React from 'react';
import App, {Container} from 'next/app';
import WithLayout from 'Index'
import materialize_script from 'static/js'

class AppContent extends App {
	constructor ( props ) {
		super( props )
	}

	componentDidMount() {
		console.log( 'component mounted' );
		//materialize_script();
		require( 'static/lib/materialize-css/js/materialize' );
	}

	render() {
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