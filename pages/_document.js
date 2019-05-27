// import {NextScript} from '@engineerapart/nextscript'
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {StyledMain, Links} from 'global/styles'

class AppDocument extends Document {
	constructor ( props ) {
		super( props )
	}

	static async getInitialProps( ctx ) {
		const initialProps = await Document.getInitialProps( ctx );
		return {...initialProps};
	}
	render() {
		console.log( '_document' );

		return (
			<Html>
				<Head />
				<body className="custom_class">
					<Main />
					<NextScript />
					<script src="static/lib/materialize-css/js/materialize.js"></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;