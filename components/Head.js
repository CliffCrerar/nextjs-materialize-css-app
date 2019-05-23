import Head from 'next/head';
// import '../lib/materialize/sass/materialize.scss'

const PageHead = props => {
	console.log( 'props: ', props );

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Online Portfolio - {props.PageTitle}</title>
			{/* <link rel="stylesheet" href='../lib/fonts/lobster/stylesheet.css' /> */}
			<link rel="stylesheet" href='static/materialize.css' />

		</Head>
	)
}

export default PageHead;