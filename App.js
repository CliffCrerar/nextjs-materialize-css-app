/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-06-03 01:03:18
 */

import { StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts } from 'components';
import themeSchema from 'static/lib/theme/themes.json';
import { cookieservice } from 'static/js/services';
import router from 'next/router';
router.ready(() => console.log('Router is now ready'));

const AppMode = process.env.NODE_ENV;
const Brand = { mainText: 'Cliff', accentText: 'Crerar' };
const links = [
	{ href: '/', caption: 'Home', title: 'Application-Landing-page' },
	{ href: '/about', caption: 'About', title: 'About this Page' },
	// {href: '/react', caption: "React", title: 'React'},
	// {href: './themeDeveloper', caption: "Theme-developer", title: "Theme-developer"},
	// {href: '/test', caption: "Test", title: 'Test'}
	{ href: '/colors', caption: 'Colors', title: 'Colors page' },
];

const App = PageComponent => {
	console.log('App');
	return () => (
		<React.Fragment>
			<PageHead />
			<StyleGlobal themes={themeSchema} />
			<NavBar brand={Brand} navLinks={links} />
			<PageComponent theme={themeSchema} />
			<FloatingButtonAction themeNames={Object.entries(themeSchema).map(e => e[0])} themes={themeSchema} />
			<Scripts />
		</React.Fragment>
	);
};

App.getInitialProps = function() {
	initProps = {};
};

export default App;
