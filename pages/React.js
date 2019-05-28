/**
 * CONTACT
 *
 * @summary Contact page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 22:00:43
 * Last modified  : 2019-05-28 03:23:34
 */
import App from 'App'
import {ReactComponent} from 'components/Default';

const PageComponent = () => (
	<main className="container position-relative">
		<h1 className="w-100 text-center pt-4">React</h1>
		<ReactComponent />
	</main>
)

export default App( PageComponent );