
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-05-28 07:44:43
 */

import { StyleTheme, StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts } from 'components';
import themeSchema from 'static/lib/theme/themes.json';
import router from 'next/router'
router.ready(() => console.log('Router is now ready'))

const AppMode = process.env.NODE_ENV;
const Brand = 'Next Materialize Starter App';
const links = [
	{ href: '/', caption: "Hello World", title: 'Next-Materialize-B4-App' },
	{ href: '/materialize', caption: "Materialize-CSS", title: 'Materialize CSS' },
	{ href: '/react', caption: "React", title: 'React' },
	{ href: './themeDeveloper', caption: "Theme-developer", title: "Theme-developer" },
	{ href: '/test', caption: "Test", title: 'Test' }
];

const App = PageComponent => {
	//AppMode === 'development' && devFunctions();
	console.log('App');
	return () => (
		<div>
			<PageHead />
			<StyleTheme schema={themeSchema} />
			<StyleGlobal />
			<NavBar brand={Brand} navLinks={links} />
			<PageComponent />
			<FloatingButtonAction />
			<Scripts />
		</div>
	)
}

export default App;
