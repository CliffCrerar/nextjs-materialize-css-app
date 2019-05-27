
/**
 * MAIN APP
 *
 * @summary The main application file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:49:06
 * Last modified  : 2019-05-27 01:00:51
 */

import {FloatingButtonComponent} from 'components';
import PageHead from 'components';
import NavBar from './components/Layout-Components/NavBar-component';

const Index = props => {
	//console.log( 'PageComponent: ', PageComponent );
	console.log( 'config: ', config );
	console.log( 'Index' );
	return (
		<div>
			<PageHead />
			<NavBar />
			<div>
				{props.children}
			</div>
			<FloatingButtonComponent />
		</div>
	)
}
const WithLayout = Index;

export default WithLayout;
