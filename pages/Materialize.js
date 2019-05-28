/**
 * About
 *
 * @summary About page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:38:55
 * Last modified  : 2019-05-27 01:02:59
 */
import App from 'App'
import {MaterializeComponent} from 'components/Default';

const PageComponent = () => (
	<main className="container position-relative">
		<h1 className="w-100 text-center pt-4">Materialize CSS</h1>
		<MaterializeComponent />
	</main>
)

export default App( PageComponent );