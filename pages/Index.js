/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-28 03:23:15
 */
import App from 'App'
import {HelloWorldComponent} from 'components/Default'

const pageTitle = 'Online'
const PageComponent = () => {
	console.log( 'Index' );
	return (
		<main className="container position-relative">
			<h1 className="w-100 text-center pt-4">{pageTitle}</h1>
			<HelloWorldComponent />
		</main>
	)
}

export default App( PageComponent );
