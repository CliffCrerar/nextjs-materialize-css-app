import Head from 'next/head';
// import '../lib/materialize/sass/materialize.scss'

const PageHead = props => (
	<Head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<title>Online Portfolio - {props.PageTitle}</title>
	</Head>
)

export default PageHead;