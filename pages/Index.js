/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-27 01:02:44
 */

import {HelloWorldComponent} from 'components/Boiler-Components'

const pageTitle = 'Hello Next Boiler'
const PageComponent = () => {
	console.log( process.env.PUBLIC_APPMODE );
	return (
		<main className="container position-relative">
			<h1 className="w-100 text-center">{pageTitle}</h1>
			<HelloWorldComponent />
		</main>
	)
}

export default PageComponent;
