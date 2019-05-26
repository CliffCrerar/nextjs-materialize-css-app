/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-26 21:04:19
 */

import App from 'App';
import {HelloWorldComponent} from 'components/boilerComponents'
//import Router from 'next/router'

const pageTitle = 'Hello Next Boiler'
const PageComponent = () => {
	return (
		<main className="container position-relative">
			<h1 className="w-100 text-center">{pageTitle}</h1>
			<HelloWorldComponent />
		</main>
	)
}

export default App( PageComponent );
