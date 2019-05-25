/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-23 00:46:18
 */

import App from 'App';
import {HelloWorldComponent} from 'components/boilerComponents'
import Router from 'next/router'

const pageTitle = 'Hello Next Boiler'


const PageComponent = () => {
	return (
		<section className="container position-relative">

			<h1 className="w-100 text-center">{pageTitle}</h1>

			<HelloWorldComponent />
		</section>
	)
}

export default App( PageComponent );
