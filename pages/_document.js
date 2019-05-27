// import {NextScript} from '@engineerapart/nextscript'
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	constructor ( props ) {
		super( props )
	}

	static async getInitialProps( ctx ) {
		const initialProps = await Document.getInitialProps( ctx );
		return {...initialProps};
	}

	render() {
		return (
			<Html>
				<Head></Head>
				<body className="custom_class">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;