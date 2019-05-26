
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-05-26 19:54:00
 */
import {NavBarComponent} from 'components';
import PageHead from 'global/PageHead';
import {StyledMain, StyledVariables} from './global/styles';
import Router from 'next/router';

const links = [
	{href: '/', caption: "Hello World", title: 'Next-Materialize-B4-App'},
	{href: '/materialize', caption: "Materialize-CSS", title: 'Materialize CSS'},
	{href: '/react', caption: "React", title: 'React'},
	{href: './themedev', caption: "Theme-developer", title: "Theme-developer"},
	{href: '/test', caption: "Test", title: 'Test'}
]

const App = ( PageComponent ) => {

	return () => (
		<div>
			<PageHead title={`{{variable}}`} />
			<StyledMain />
			<NavBarComponent navLinks={links} />
			<PageComponent />
		</div>
	)
}

export default App;