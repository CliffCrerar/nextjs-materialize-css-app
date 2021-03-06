/**
 * About
 *
 * @summary About page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:38:55
 * Last modified  : 2019-06-05 00:23:34
 */

import WithLayout from 'Layout'
import {Materialize} from "components/Boiler-Components";

const PageComponent = () => (

	<main className="container position-relative mt-5">
		<h1 className="w-100 text-center text-default-primary headingShadow">
			Materialize CSS
		</h1>
		<Materialize />
	</main>
);

export default WithLayout( PageComponent );
