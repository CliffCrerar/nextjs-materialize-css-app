/**
 * About
 *
 * @summary About page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:38:55
 * Last modified  : 2019-05-23 07:41:33
 */

import App from 'App';
import {MaterializeComponent} from 'components/boilerComponents';


const PageComponent = () => (
	<section className="container position-relative">
		<h1 className="w-100 text-center">Materialize CSS</h1>
		<MaterializeComponent />
	</section>
)

export default App( PageComponent );