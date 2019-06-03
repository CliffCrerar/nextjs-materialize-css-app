/**
 * About this project
 * @summary A page about this project what it is how it was created and what is expected
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 22:08:41
 * Last modified  : 2019-05-30 22:16:42
 */
import App from 'App'
import Router from 'next/router';

const PageComponent = props => (
	<main class="container">
		{/* <div>{JSON.stringify( Router )}</div> */}

		<h1 className="w-100 text-center text-default-primary">About</h1>

	</main>
)

export default App( PageComponent );