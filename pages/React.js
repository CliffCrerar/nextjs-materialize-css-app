/**
 * CONTACT
 *
 * @summary Contact page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 22:00:43
 * Last modified  : 2019-05-27 01:03:04
 */
import App from "App";
import {ReactComponent} from "components/Boiler-Components";

const PageComponent = () => (

	<main className="container position-relative mt-5">
		<h1 className="w-100 text-center text-default-primary headingShadow" headingShadow>React</h1>
		<ReactComponent />
	</main>
);

export default App( PageComponent );
