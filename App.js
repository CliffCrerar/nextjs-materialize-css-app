
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06 
 * Last modified  : 2019-05-22 21:33:45
 */
import {NavBar} from 'components';
import MaterializeCSS from './components/materialize-jsx';

console.log( process.env );

const links = [
	{href: '/', caption: "Home", title: 'Home Page'},
	{href: '/about', caption: "About", title: 'About Page'},
	{href: '/contact', caption: "Contact", title: 'Contact Page'}
]

const App = ( Page ) => {
	return () => (
		<main>
			<MaterializeCSS />
			<NavBar navLinks={links} />
			<Page />
		</main>
	)
}

export default App;