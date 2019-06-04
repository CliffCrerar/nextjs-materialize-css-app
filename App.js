/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-06-03 01:03:18
 */

import {StyleGlobal, PageHead, NavBar, FloatingButtonAction, Scripts} from "components";
import themeSchema from "static/lib/theme/themes.json";
import {cookieservice} from "static/js/services";
import router from "next/router";
router.ready( () => console.log( "Router is now ready" ) );

const AppMode = process.env.NODE_ENV;
const Brand = {mainText: "Material", accentText: "Next"};
const links = [
	{href: "/", caption: "Home", title: "Application-Landing-page"},
	{href: "/react", caption: "React", title: "React"},
	{href: "./materialize", caption: "Materialize-CSS", title: "Materialize CSS"},
	{href: "/about", caption: "About", title: "About this Page"},
	{href: "/theming", caption: "Theming", title: "Theming"}
];

function setNavSpacer() {
	// Fix navbar fixed height
	var navHeight = document.getElementById( 'nav-Bar' ).clientHeight;
	console.log( 'navHeight: ', navHeight );
	document.getElementById( 'nav-spacer' ).style.height = navHeight + 'px';
}

const App = PageComponent => {
	// const App = () => {

	console.log( "App" );
	const currentTheme =
		cookieservice.getTheme() === undefined
			? "blue-deeporange"
			: cookieservice.getTheme();
	return () => (
		<React.Fragment>
			<PageHead />
			<StyleGlobal themes={themeSchema} currentTheme={currentTheme} />
			<NavBar brand={Brand} navLinks={links} setNavSpacer={setNavSpacer} />
			<PageComponent theme={themeSchema} currentTheme={currentTheme} />
			<FloatingButtonAction
				themeNames={Object.entries( themeSchema ).map( e => e[ 0 ] )}
				themes={themeSchema}
			/>
			<Scripts />
		</React.Fragment>
	);
};

export default App