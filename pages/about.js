/**
 * About this project
 * @summary A page about this project what it is how it was created and what is expected
 * @author Cliff Crerar
 * Created at     : 2019-05-30 22:08:41
 * Last modified  : 2019-06-15 15:22:51
 */
import WithLayout from 'Layout'

import {About} from 'components/Boiler-Components'
const PageComponent = props => (
	<main className="container" > { /* <div>{JSON.stringify( Router )}</div> */}
		<About />
	</main>
)
export default WithLayout( PageComponent );