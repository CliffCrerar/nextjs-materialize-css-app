/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-28 01:44:22
 */
import App from 'App'
import {HelloWorldComponent} from 'components/Default'

const pageTitle = 'Hello Next App'
const PageComponent = () => {
	console.log( 'Index' );
	return (
		<main className="container position-relative">
			<h1 className="w-100 text-center">{pageTitle}</h1>
			<HelloWorldComponent />
		</main>
	)
}

export default App( PageComponent );
