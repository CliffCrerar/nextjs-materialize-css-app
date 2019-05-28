
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-05-28 02:44:13
 */

import {StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts} from 'components';

const Brand = 'Next Materialize Starter App';
const links = [
	{href: '/', caption: "Hello World", title: 'Next-Materialize-B4-App'},
	{href: '/materialize', caption: "Materialize-CSS", title: 'Materialize CSS'},
	{href: '/react', caption: "React", title: 'React'},
	{href: './themeDeveloper', caption: "Theme-developer", title: "Theme-developer"},
	{href: '/test', caption: "Test", title: 'Test'}
];

const App = PageComponent => {
	console.log( 'App' );
	return () => (
		<div>
			<PageHead />
			<StyleGlobal />
			<NavBar brand={Brand} navLinks={links} />
			<PageComponent />
			<FloatingButtonAction />
			<Scripts />
		</div>
	)
}

export default App;
