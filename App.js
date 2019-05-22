
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06 
 * Last modified  : 2019-05-23 01:03:11
 */
import {NavBar} from 'components';
import {TagStyle, StyleMain} from 'css/global';

console.log( process.env );

const links = [
	{href: '/', caption: "Home", title: 'Home Page'},
	{href: '/about', caption: "About", title: 'About Page'},
	{href: '/contact', caption: "Contact", title: 'Contact Page'}
]

const App = ( Page ) => {
	return () => (
		<main>
			<MainStyles />
			<TagStyle
				<NavBar navLinks={links} />
			<Page />
		</main>
	)
}

export default App;